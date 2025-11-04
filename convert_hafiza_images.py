#!/usr/bin/env python3
"""
Görselleri WebP formatına dönüştürür ve public/hafiza klasörüne organize eder.
cwebp kullanarak dönüştürme yapar.
Thumbnail'lar da oluşturulur.
"""

import os
import subprocess
import shutil
from pathlib import Path
import sys
import unicodedata

# Ana klasörler
SOURCE_DIR = "/Users/ardaarli/Desktop/GÖRSELLER"
TARGET_DIR = "public/hafiza"

# Klasör isimleri (URL-safe)
# Not: Dosya sistemindeki gerçek isimlerle eşleşmeli
FOLDER_MAPPING = {
    "Broşür": "brosur",
    "Haftalık Toplantı Duyuru Afişleri": "haftalik-toplanti-duyuru-afisleri",
    "KKKA Toplantı Duyuru Afişleri": "kkka-toplanti-duyuru-afisleri",
    "Paylaşım görselleri": "paylasim-gorselleri",
    "gorseller": "gorseller",
    "logo": "logo"
}

# Fuzzy matching için anahtar kelimeler
FOLDER_KEYWORDS = {
    "brosur": ["broşür", "broşur", "brosur", "bros"],
    "haftalik-toplanti-duyuru-afisleri": ["haftalık", "toplantı", "duyuru", "afiş", "afis"],
    "kkka-toplanti-duyuru-afisleri": ["kkka", "kooperatif", "kendini", "anlatıyor", "anlatiyor"],
    "paylasim-gorselleri": ["paylaşım", "paylasim", "paylas", "görselleri", "gorselleri"],
    "gorseller": ["görseller", "gorseller", "gorsel"],
    "logo": ["logo"]
}

def check_cwebp():
    """cwebp'in kurulu olup olmadığını kontrol eder"""
    try:
        subprocess.run(['cwebp', '-version'], capture_output=True, check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("HATA: cwebp bulunamadı. Lütfen 'brew install webp' ile kurun.")
        return False

def convert_to_webp(input_path, output_path, quality=85, resize=None):
    """cwebp kullanarak görseli WebP formatına dönüştürür"""
    try:
        cmd = ['cwebp', '-q', str(quality)]
        
        # Resize parametresi varsa ekle
        if resize:
            cmd.extend(['-resize', str(resize), '0'])
        
        # PNG için şeffaflık desteği
        if input_path.lower().endswith('.png'):
            cmd.append('-lossless')
        
        cmd.extend([input_path, '-o', output_path])
        
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0:
            return True
        else:
            print(f"cwebp hatası: {result.stderr}")
            return False
    except Exception as e:
        print(f"Hata: {input_path} -> {output_path}: {e}")
        return False

def get_image_files(directory):
    """Klasördeki tüm görsel dosyalarını bulur"""
    image_extensions = {'.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'}
    images = []
    
    for root, dirs, files in os.walk(directory):
        # Alt klasörleri de tarar
        for file in files:
            if any(file.lower().endswith(ext.lower()) for ext in image_extensions):
                images.append(os.path.join(root, file))
    
    return images

def create_thumbnail(input_path, output_path, size=400):
    """cwebp kullanarak thumbnail oluşturur"""
    # Önce sips ile resize yap, sonra cwebp ile dönüştür
    try:
        # Geçici dosya oluştur
        temp_path = output_path + '.temp.jpg'
        
        # sips ile resize (macOS'ta mevcut)
        resize_cmd = ['sips', '-Z', str(size), '--out', temp_path, input_path]
        resize_result = subprocess.run(resize_cmd, capture_output=True, text=True)
        
        if resize_result.returncode != 0:
            # sips yoksa, cwebp'in resize özelliğini kullan
            return convert_to_webp(input_path, output_path, quality=75, resize=size)
        
        # Geçici dosyayı WebP'ye dönüştür
        result = convert_to_webp(temp_path, output_path, quality=75)
        
        # Geçici dosyayı sil
        if os.path.exists(temp_path):
            os.remove(temp_path)
        
        return result
    except Exception as e:
        # sips yoksa direkt cwebp resize kullan
        return convert_to_webp(input_path, output_path, quality=75, resize=size)

def sanitize_filename(filename):
    """Dosya adını URL-safe hale getirir"""
    # Dosya uzantısını ayır
    name, ext = os.path.splitext(filename)
    # Türkçe karakterleri ve özel karakterleri temizle
    name = name.replace(' ', '-').replace('_', '-')
    # Küçük harfe çevir
    name = name.lower()
    # Özel karakterleri temizle
    name = ''.join(c for c in name if c.isalnum() or c in ('-', '.'))
    return f"{name}.webp"

def process_folder(folder_name, folder_path):
    """Bir klasörü işler"""
    folder_key = find_folder_match(folder_name)
    if not folder_key:
        print(f"Klasör eşleşmesi bulunamadı: {folder_name}")
        return
    
    # Hedef klasörleri oluştur
    target_folder = os.path.join(TARGET_DIR, folder_key)
    target_full = os.path.join(target_folder, "full")
    target_thumb = os.path.join(target_folder, "thumb")
    
    os.makedirs(target_full, exist_ok=True)
    os.makedirs(target_thumb, exist_ok=True)
    
    # Görselleri bul
    images = get_image_files(folder_path)
    print(f"\n{folder_name}: {len(images)} görsel bulundu")
    
    processed = 0
    for img_path in images:
        # Dosya adını temizle
        filename = os.path.basename(img_path)
        safe_name = sanitize_filename(filename)
        
        # Full size WebP
        full_output = os.path.join(target_full, safe_name)
        if convert_to_webp(img_path, full_output, quality=85):
            # Thumbnail oluştur
            thumb_output = os.path.join(target_thumb, safe_name)
            create_thumbnail(full_output, thumb_output, size=400)
            processed += 1
            if processed % 10 == 0:
                print(f"  İşlendi: {processed}/{len(images)}")
    
    print(f"✓ {folder_name}: {processed} görsel dönüştürüldü")

def find_folder_match(folder_name):
    """Klasör ismini fuzzy matching ile eşleştirir"""
    folder_lower = folder_name.lower()
    
    # Önce tam eşleşme dene
    if folder_name in FOLDER_MAPPING:
        return FOLDER_MAPPING[folder_name]
    
    # KKKA için özel kontrol (önce kontrol et çünkü "kooperatif" diğer klasörlerde de var)
    if "kkka" in folder_lower:
        return "kkka-toplanti-duyuru-afisleri"
    
    # Fuzzy matching
    for target_id, keywords in FOLDER_KEYWORDS.items():
        # KKKA'yı atla, zaten yukarıda kontrol ettik
        if target_id == "kkka-toplanti-duyuru-afisleri":
            continue
        for keyword in keywords:
            if keyword.lower() in folder_lower:
                return target_id
    
    return None

def main():
    # cwebp kontrolü
    if not check_cwebp():
        sys.exit(1)
    
    # Public klasörünü oluştur
    os.makedirs(TARGET_DIR, exist_ok=True)
    
    # Her ana klasörü işle
    for folder_name in os.listdir(SOURCE_DIR):
        folder_path = os.path.join(SOURCE_DIR, folder_name)
        if os.path.isdir(folder_path):
            folder_id = find_folder_match(folder_name)
            if folder_id:
                # FOLDER_MAPPING'deki orijinal ismi kullan
                original_name = next((k for k, v in FOLDER_MAPPING.items() if v == folder_id), folder_name)
                process_folder(original_name, folder_path)
            else:
                print(f"Klasör eşleşmesi bulunamadı: {folder_name}")
    
    print("\n✓ Tüm görseller dönüştürüldü!")

if __name__ == "__main__":
    main()

