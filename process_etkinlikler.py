#!/usr/bin/env python3
"""
Etkinlik klasöründeki dosyaları işler:
- JPG görselleri WebP'ye çevirir
- PDF dosyalarını WebP'ye çevirir (pdf2image veya sips kullanarak)
- DOCX dosyalarını textutil ile okuyup metin olarak kaydeder
- Etkinlik sayfalarını oluşturur
"""

import os
import subprocess
import json
import re
from pathlib import Path
from collections import defaultdict
import unicodedata

# Yollar
SOURCE_DIR = "/Users/ardaarli/Desktop/Etkinlik"
PUBLIC_DIR = "public/etkinlikler"
PAGES_DIR = "src/app/etkinlikler"

def normalize_filename(name):
    """Dosya adını URL-safe hale getirir"""
    name = unicodedata.normalize('NFC', name)
    name = name.lower()
    replacements = {
        'ş': 's', 'ğ': 'g', 'ü': 'u', 'ö': 'o', 'ç': 'c', 'ı': 'i',
        'Ş': 's', 'Ğ': 'g', 'Ü': 'u', 'Ö': 'o', 'Ç': 'c', 'İ': 'i'
    }
    for old, new in replacements.items():
        name = name.replace(old, new)
    name = re.sub(r'[^a-z0-9\s-]', '', name)
    name = re.sub(r'\s+', '-', name)
    name = re.sub(r'-+', '-', name)
    return name.strip('-')

def check_dependencies():
    """Gerekli araçların kurulu olup olmadığını kontrol eder"""
    has_pdf2image = False
    try:
        import pdf2image  # type: ignore
        has_pdf2image = True
        print("✅ pdf2image kütüphanesi mevcut")
    except ImportError:
        print("⚠️  pdf2image yok, sips kullanılacak")
    
    try:
        subprocess.run(['cwebp', '-version'], capture_output=True, check=True)
        print("✅ cwebp mevcut")
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("❌ cwebp bulunamadı. 'brew install webp' ile kurun.")
        return False, False
    
    return True, has_pdf2image

def convert_file_to_webp(input_path, output_path, quality=85):
    """cwebp kullanarak bir dosyayı WebP'ye çevirir"""
    try:
        cmd = ['cwebp', '-q', str(quality), str(input_path), '-o', str(output_path)]
        result = subprocess.run(cmd, capture_output=True, text=True)
        return result.returncode == 0
    except Exception as e:
        print(f"  ❌ JPG->WebP hatası: {e}")
        return False

def convert_jpg_to_webp(input_path, output_path, quality=85):
    """JPG dosyasını WebP'ye çevirir"""
    return convert_file_to_webp(input_path, output_path, quality)

def convert_pdf_to_webp_pdf2image(input_path, output_dir, output_prefix, quality=85):
    """PDF dosyasını pdf2image kullanarak WebP'ye çevirir ve tüm sayfaları döndürür"""
    try:
        from pdf2image import convert_from_path  # type: ignore
        
        images = convert_from_path(input_path, dpi=150)
        if not images:
            return []
        
        output_paths = []
        
        for idx, image in enumerate(images, start=1):
            temp_png = os.path.join(output_dir, f"{output_prefix}-page-{idx}.png")
            final_webp = os.path.join(output_dir, f"{output_prefix}-page-{idx}.webp")
            
            image.save(temp_png, 'PNG')
            
            if convert_file_to_webp(temp_png, final_webp, quality=quality):
                output_paths.append(final_webp)
            else:
                print(f"  ❌ PDF -> WebP dönüştürme hatası (sayfa {idx})")
            
            if os.path.exists(temp_png):
                os.remove(temp_png)
        
        return output_paths
    except Exception as e:
        print(f"  ❌ PDF->WebP (pdf2image) hatası: {e}")
        return []

def convert_pdf_to_webp_sips(input_path, output_dir, output_prefix, quality=85):
    """PDF dosyasını sips kullanarak WebP'ye çevirir (tek sayfa)"""
    try:
        # sips PDF'yi PNG'ye çevirir
        temp_png = os.path.join(output_dir, f"{output_prefix}-page-1.png")
        final_webp = os.path.join(output_dir, f"{output_prefix}-page-1.webp")
        cmd = ['sips', '-s', 'format', 'png', '--out', temp_png, input_path]
        result = subprocess.run(cmd, capture_output=True, text=True)
        
        if result.returncode != 0:
            print(f"  ⚠️  PDF->PNG (sips) hatası: {result.stderr}")
            return []
        
        if convert_file_to_webp(temp_png, final_webp, quality=quality):
            output_paths = [final_webp]
        else:
            print("  ❌ PDF->WebP (sips) hatası")
            output_paths = []
        
        # Geçici dosyayı sil
        if os.path.exists(temp_png):
            os.remove(temp_png)
        
        return output_paths
    except Exception as e:
        print(f"  ❌ PDF->WebP (sips) hatası: {e}")
        return []

def read_docx_with_textutil(input_path):
    """DOCX dosyasını textutil ile okur"""
    try:
        cmd = ['textutil', '-convert', 'txt', '-stdout', str(input_path)]
        result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
        
        if result.returncode == 0:
            return result.stdout
        else:
            print(f"  ⚠️  textutil hatası: {result.stderr}")
            return None
    except Exception as e:
        print(f"  ❌ DOCX okuma hatası: {e}")
        return None

def extract_number_from_filename(filename):
    """Dosya isminden başlangıçtaki numarayı çıkarır"""
    # Dosya isminin başındaki numarayı bul (örn: "3 Viome..." -> 3)
    match = re.match(r'^(\d+)', filename)
    if match:
        return int(match.group(1))
    return None

def scan_etkinlik_folder():
    """Etkinlik klasöründeki dosyaları tarar"""
    structure = defaultdict(lambda: {
        'images': [],
        'pdfs': [],
        'docx': [],
        'docs': []
    })
    
    root_files = []  # Root klasöründeki dosyalar için
    
    if not os.path.exists(SOURCE_DIR):
        print(f"❌ Klasör bulunamadı: {SOURCE_DIR}")
        return structure
    
    for root, dirs, files in os.walk(SOURCE_DIR):
        files = [f for f in files if not f.startswith('.')]
        
        if not files:
            continue
        
        rel_path = os.path.relpath(root, SOURCE_DIR)
        folder_name = rel_path if rel_path != '.' else 'root'
        
        for file in files:
            file_path = os.path.join(root, file)
            ext = os.path.splitext(file)[1].lower()
            
            file_info = {
                'name': file,
                'path': file_path,
                'ext': ext
            }
            
            # Root klasöründeki dosyaları ayrı tut
            if folder_name == 'root':
                root_files.append(file_info)
            else:
                if ext in ['.jpg', '.jpeg', '.png']:
                    structure[folder_name]['images'].append(file_info)
                elif ext == '.pdf':
                    structure[folder_name]['pdfs'].append(file_info)
                elif ext == '.docx':
                    structure[folder_name]['docx'].append(file_info)
                elif ext == '.doc':
                    structure[folder_name]['docs'].append(file_info)
    
    # Root klasöründeki dosyaları numaralarına göre ayrı etkinlikler olarak işle
    if root_files:
        # Dosyaları numaralarına göre grupla
        root_groups = defaultdict(list)
        for file_info in root_files:
            num = extract_number_from_filename(file_info['name'])
            if num:
                root_groups[num].append(file_info)
            else:
                # Numara yoksa, dosya ismini kullan
                name_key = normalize_filename(os.path.splitext(file_info['name'])[0])
                root_groups[name_key].append(file_info)
        
        # Her grup için ayrı etkinlik oluştur
        for key, files in root_groups.items():
            folder_name = f"root-{key}" if isinstance(key, int) else f"root-{key}"
            for file_info in files:
                ext = file_info['ext']
                if ext in ['.jpg', '.jpeg', '.png']:
                    structure[folder_name]['images'].append(file_info)
                elif ext == '.pdf':
                    structure[folder_name]['pdfs'].append(file_info)
                elif ext == '.docx':
                    structure[folder_name]['docx'].append(file_info)
                elif ext == '.doc':
                    structure[folder_name]['docs'].append(file_info)
    
    return structure

def process_etkinlikler():
    """Etkinlikleri işler ve sayfaları oluşturur"""
    print("=" * 70)
    print("ETKİNLİKLER İŞLENİYOR...")
    print("=" * 70)
    
    deps_ok, has_pdf2image = check_dependencies()
    if not deps_ok:
        return
    
    structure = scan_etkinlik_folder()
    
    if not structure:
        print("\n⚠️  Klasör boş veya erişilemiyor!")
        return
    
    print(f"\n✅ {len(structure)} klasör bulundu\n")
    
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    
    etkinlikler = []
    
    # Önce root olmayan klasörleri işle, sonra root klasörlerini numaraya göre sırala
    regular_folders = {k: v for k, v in structure.items() if not k.startswith('root-')}
    root_folders = {k: v for k, v in structure.items() if k.startswith('root-')}
    
    # Root klasörlerini numaraya göre sırala
    def get_sort_key(name):
        if name.startswith('root-'):
            match = re.match(r'root-(\d+)', name)
            if match:
                return (0, int(match.group(1)))  # Root klasörleri önce, numaraya göre
            return (0, 999)  # Numara yoksa en sona
        return (1, name)  # Normal klasörler sonra
    
    all_folders = sorted(structure.items(), key=lambda x: get_sort_key(x[0]))
    
    for folder_name, files in all_folders:
        print(f"📁 {folder_name}")
        
        # Root klasörlerinden etkinlik ismini çıkar
        if folder_name.startswith('root-'):
            # Dosya isimlerinden etkinlik ismini bul
            all_files = files['images'] + files['pdfs'] + files['docx'] + files['docs']
            if all_files:
                # İlk dosyanın ismini kullan
                first_file = all_files[0]['name']
                # Numara ve başlığı çıkar (örn: "3 Viome..." -> "Viome...")
                match = re.match(r'^(\d+)\s*(.+)', os.path.splitext(first_file)[0])
                if match:
                    etkinlik_title = match.group(2).strip()  # Sadece başlık, numara yok
                else:
                    etkinlik_title = os.path.splitext(first_file)[0]
            else:
                etkinlik_title = folder_name.replace('root-', '')
        else:
            # Normal klasörlerden de numarayı kaldır
            match = re.match(r'^(\d+)\s*(.+)', folder_name)
            if match:
                etkinlik_title = match.group(2).strip()
            else:
                etkinlik_title = folder_name
        
        folder_slug = normalize_filename(folder_name)
        folder_public = os.path.join(PUBLIC_DIR, folder_slug)
        os.makedirs(folder_public, exist_ok=True)
        
        etkinlik = {
            'slug': folder_slug,
            'title': etkinlik_title,
            'images': [],
            'content': None,
            'content_type': None,
            'date': None,
            'pdf_pages': []
        }
        
        # JPG görselleri işle
        for img_info in files['images']:
            img_name = os.path.splitext(img_info['name'])[0]
            img_slug = normalize_filename(img_name)
            output_name = f"{img_slug}.webp"
            output_path = os.path.join(folder_public, output_name)
            
            if not os.path.exists(output_path):
                print(f"  📸 {img_info['name']} -> {output_name}")
                if convert_jpg_to_webp(img_info['path'], output_path):
                    print(f"    ✅ Dönüştürüldü")
                else:
                    print(f"    ❌ Hata")
            else:
                print(f"  📸 {img_info['name']} -> Zaten mevcut")
            
            etkinlik['images'].append({
                'name': img_info['name'],
                'path': f"/etkinlikler/{folder_slug}/{output_name}"
            })
        
        # PDF dosyalarını işle
        for pdf_info in files['pdfs']:
            pdf_name = os.path.splitext(pdf_info['name'])[0]
            pdf_slug = normalize_filename(pdf_name)
            output_prefix = pdf_slug
            
            print(f"  📄 {pdf_info['name']} -> sayfalara ayrılıyor")
            if has_pdf2image:
                output_paths = convert_pdf_to_webp_pdf2image(pdf_info['path'], folder_public, output_prefix)
            else:
                output_paths = convert_pdf_to_webp_sips(pdf_info['path'], folder_public, output_prefix)
            
            if not output_paths:
                print(f"    ❌ PDF dönüştürülemedi")
                continue
            
            relative_paths = [f"/etkinlikler/{folder_slug}/{os.path.basename(path)}" for path in output_paths]
            etkinlik['pdf_pages'].extend(relative_paths)

            if not files['docx'] and not files['docs']:
                etkinlik['content'] = relative_paths[0]
                etkinlik['content_type'] = 'pdf'
            
            if not etkinlik.get('thumbnail'):
                etkinlik['thumbnail'] = relative_paths[0]
        
        # DOCX dosyalarını işle
        for docx_info in files['docx']:
            docx_name = os.path.splitext(docx_info['name'])[0]
            docx_slug = normalize_filename(docx_name)
            output_name = f"{docx_slug}.txt"
            output_path = os.path.join(folder_public, output_name)
            
            if not os.path.exists(output_path):
                print(f"  📝 {docx_info['name']} -> {output_name}")
                content = read_docx_with_textutil(docx_info['path'])
                if content:
                    with open(output_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"    ✅ Dönüştürüldü")
                else:
                    print(f"    ❌ Hata")
            else:
                print(f"  📝 {docx_info['name']} -> Zaten mevcut")
            
            etkinlik['content'] = f"/etkinlikler/{folder_slug}/{output_name}"
            etkinlik['content_type'] = 'text'
        
        # DOC dosyalarını işle
        for doc_info in files['docs']:
            doc_name = os.path.splitext(doc_info['name'])[0]
            doc_slug = normalize_filename(doc_name)
            output_name = f"{doc_slug}.txt"
            output_path = os.path.join(folder_public, output_name)
            
            if not os.path.exists(output_path):
                print(f"  📝 {doc_info['name']} -> {output_name}")
                content = read_docx_with_textutil(doc_info['path'])
                if content:
                    with open(output_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"    ✅ Dönüştürüldü")
                else:
                    print(f"    ❌ Hata")
            else:
                print(f"  📝 {doc_info['name']} -> Zaten mevcut")
            
            etkinlik['content'] = f"/etkinlikler/{folder_slug}/{output_name}"
            etkinlik['content_type'] = 'text'
        
        if not etkinlik['content'] and etkinlik['images']:
            etkinlik['thumbnail'] = etkinlik['images'][0]['path']
        
        etkinlikler.append(etkinlik)
        print()
    
    # Etkinlikleri numaraya göre sırala
    def get_etkinlik_sort_key(etkinlik):
        # Başlıktan numarayı çıkar
        match = re.match(r'^(\d+)', etkinlik['title'])
        if match:
            return int(match.group(1))
        return 999  # Numara yoksa en sona
    
    etkinlikler.sort(key=get_etkinlik_sort_key)
    
    json_path = os.path.join(PUBLIC_DIR, 'etkinlikler.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(etkinlikler, f, ensure_ascii=False, indent=2)
    
    print(f"💾 Etkinlik listesi kaydedildi: {json_path}")
    print(f"\n✅ Toplam {len(etkinlikler)} etkinlik işlendi")
    
    return etkinlikler

if __name__ == '__main__':
    process_etkinlikler()

