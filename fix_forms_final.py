#!/usr/bin/env python3
import subprocess
import os
import re

FORMS = {
    "gida-disi": [
        ("KİTAP - ÜRÜN BİLGİ FORMU.docx", "kitap", "📚"),
        ("Gıda_Saklama_Kuması_Ürün_Bilgi_Formu.docx", "gida-saklama-kumasi", "🧺"),
        ("Mum,Balmumu ve Yan Ürünleri Bilgi Formu.docx", "mum-balmumu", "🕯️"),
        ("SABUN - ÜRÜN BİLGİ FORMU.docx", "sabun", "🧼"),
        ("Solucan Gübresi Bilgi Formu.docx", "solucan-gubresi", "🌱"),
        ("kozmetik_urun_formu.docx", "kozmetik", "💄"),
        ("tekstil_urunleri_bilgi_formu.docx", "tekstil", "👕"),
        ("tuz urun bilgi formu.docx dosyasının kopyası.docx", "tuz", "🧂"),
        ("urun_bilgi_formu-Sıvı form.docx", "sivi-form", "🧴"),
    ],
    "gida": [
        ("AĞAÇTA_YETİŞEN_MEYVE_ÜRÜNLERİ_BİLGİ FORMU.docx", "agacta-yetisen-meyveler", "🍎"),
        ("Ekmek_bilgi_formu.docx", "ekmek", "🍞"),
        ("Taze Sebze Ürünleri Bilgi Formu.docx", "taze-sebze", "🥬"),
        ("bal_bilgi_formu.docx", "bal", "🍯"),
        ("hububat_urunleri_bilgi_formu.docx", "hububat", "🌾"),
        ("islenmis_urunler_bilgi_formu.docx", "islenmis-urunler", "🥫"),
        ("pirinç_bilgi_formu.docx", "pirinc", "🍚"),
        ("sut_urunleri_bilgi_formu.docx", "sut-urunleri", "🥛"),
        ("üretici_ön_bilgi_formu.docx", "uretici-on-bilgi", "📋"),
        ("yumurta_bilgi_formu.docx", "yumurta", "🥚"),
        ("zeytinyagi_bilgi_formu.docx", "zeytinyagi", "🫒"),
    ]
}

BASE_PATHS = {
    "gida-disi": "/Users/ardaarli/Desktop/KOOP ARŞİV/ÜRÜN BİLGİ FORMLARI/GIDA DIŞI ÜRÜNLER",
    "gida": "/Users/ardaarli/Desktop/KOOP ARŞİV/ÜRÜN BİLGİ FORMLARI/GIDA ÜRÜNLERİ"
}

def get_content(filepath):
    try:
        result = subprocess.run(['textutil', '-convert', 'txt', '-stdout', filepath], 
                              capture_output=True, text=True, timeout=15)
        return result.stdout if result.returncode == 0 else None
    except:
        return None

def is_section_header(line):
    """Bölüm başlığı mı?"""
    line = line.strip()
    # 1. 2. 3. gibi numaralı
    if re.match(r'^\d+\.', line):
        return True
    # Tamamen BÜYÜK HARF ve UZUN
    if line.isupper() and len(line) > 10:
        return True
    return False

def is_subsection_header(line):
    """Alt bölüm başlığı mı?"""
    line = line.strip()
    if re.match(r'^[a-z]:', line):
        return True
    return False

def parse_content(text):
    """İçeriği parse et"""
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    
    # İlk birkaç satırı atla (KADIKÖY KOOPERATİFİ, başlık gibi)
    start_idx = 0
    for i, line in enumerate(lines):
        if line.isupper() and 'FORMU' in line:
            start_idx = i + 1
            break
    
    sections = []
    current_section = None
    current_subsection = None
    current_items = []
    
    for line in lines[start_idx:]:
        # Ana bölüm
        if is_section_header(line):
            if current_section and current_items:
                sections.append((current_section, current_subsection, current_items))
            current_section = line
            current_subsection = None
            current_items = []
        # Alt bölüm
        elif is_subsection_header(line):
            if current_subsection:
                sections.append((current_section, current_subsection, current_items))
            current_subsection = line
            current_items = []
        # Soru veya madde
        elif line.endswith('?') or line.endswith(':') or line.startswith('•') or line.startswith('-'):
            current_items.append(line)
    
    if current_section:
        sections.append((current_section, current_subsection, current_items))
    
    return sections

def create_component(form_title, icon, category, id_name, sections):
    color = "purple" if category == "gida-disi" else "green"
    component_name = ''.join(w.capitalize() for w in id_name.split('-'))
    
    sections_html = ""
    for sec, subsec, items in sections:
        if not sec or not items:
            continue
            
        # Boş alt başlıklar ("BAL BİLGİ FORMU" gibi başlıklar altında items yok)
        skip_sections = ['KOOPERATİF', 'FORMU', 'ÜRÜN']
        if any(skip in sec for skip in skip_sections) and not subsec:
            continue
            
        sections_html += f'''
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-{color}-600">
                {sec}
              </h2>
'''
        if subsec:
            sections_html += f'''              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">{subsec}</h3>
                <div className="space-y-4">
'''
        else:
            sections_html += '''              <div className="space-y-4">
'''
        
        for item in items:
            # • işaretini temizle
            item_clean = item.lstrip('•- ').strip()
            sections_html += f'''                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {item_clean}
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
'''
        
        sections_html += '''              </div>
            </div>

'''
    
    return f'''import Link from "next/link";
import Navigation from "../../../../components/Navigation";

export default function {component_name}FormPage() {{
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/kooperatifcilik" className="hover:text-blue-600 dark:hover:text-blue-400">Neden ve Nasıl Kooperatifçilik?</Link>
          <span>/</span>
          <Link href="/kooperatifcilik/urun-uretici-formlari" className="hover:text-blue-600 dark:hover:text-blue-400">Ürün & Üretici Formları</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">{form_title}</span>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {form_title.upper()}
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="prose prose-lg dark:prose-invert max-w-none">
{sections_html}
            <div className="bg-{color}-50 dark:bg-{color}-900/20 rounded-lg p-6 border-l-4 border-{color}-600">
              <p className="text-sm text-{color}-800 dark:text-{color}-200">
                <strong>📋 Not:</strong> Bu form, Kadıköy Kooperatifi'ne ürün tedarik etmek isteyen üreticiler tarafından doldurulmalıdır. 
                Formu doldurduktan sonra kooperatif yönetimi ile iletişime geçin.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/kooperatifcilik/urun-uretici-formlari"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={{2}} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Form Ana Sayfasına Dön
          </Link>
        </div>
      </main>
    </div>
  );
}}
'''

print("Recreating forms without empty headers...")

for category, file_list in FORMS.items():
    for filename, id_name, icon in file_list:
        print(f"Processing {category}/{id_name}...")
        
        filepath = f"{BASE_PATHS[category]}/{filename}"
        content = get_content(filepath)
        
        if not content:
            print(f"  ❌ Could not read")
            continue
        
        form_title = filename.replace('.docx', '').replace('_', ' ').replace('ÜRÜN BİLGİ FORMU', '').strip()
        
        sections = parse_content(content)
        page = create_component(form_title, icon, category, id_name, sections)
        
        output = f"src/app/kooperatifcilik/urun-uretici-formlari/{category}/{id_name}/page.tsx"
        with open(output, 'w', encoding='utf-8') as f:
            f.write(page)
        
        print(f"  ✓ Created")

print("\nDone!")


