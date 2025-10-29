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

def parse_content(text):
    """İçeriği parse et ve yapılandır"""
    lines = [l.strip() for l in text.split('\n')]
    
    # Boş satırları filtrele
    lines = [l for l in lines if l]
    
    # Başlığı bul (KADIKÖY KOOPERATİFİ, vb. atla)
    start_idx = 0
    for i, line in enumerate(lines):
        if 'FORMU' in line or 'FORM' in line:
            start_idx = i
            break
    
    # Asıl içerik
    content_lines = lines[start_idx+1:]
    
    sections = []
    current_section = None
    current_subsection = None
    current_items = []
    
    for line in content_lines:
        # BÖLÜM: 1. 2. 3. gibi
        if re.match(r'^\d+\.\s+[A-ZÜĞÖŞÇİ]', line):
            if current_section and current_items:
                sections.append((current_section, current_subsection, current_items))
            current_section = line
            current_subsection = None
            current_items = []
        # Alt bölüm: a: b: c:
        elif re.match(r'^[a-z]:\s+[A-ZÜĞÖŞÇİ]', line):
            if current_subsection and current_items:
                sections.append((current_section, current_subsection, current_items))
            current_subsection = line
            current_items = []
        # Soru veya madde işareti
        elif line.endswith('?') or (line.endswith(':') and len(line) < 100) or line.startswith('•'):
            current_items.append(line)
    
    # Son bölümü ekle
    if current_section:
        sections.append((current_section, current_subsection, current_items))
    
    # Boş bölümleri filtrele
    sections = [(s, ss, items) for s, ss, items in sections if items]
    
    return sections

def create_component(form_title, icon, category, id_name, sections):
    color = "purple" if category == "gida-disi" else "green"
    component_name = ''.join(w.capitalize() for w in id_name.split('-'))
    
    sections_html = ""
    for sec, subsec, items in sections:
        if not items:
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
            item_clean = item.lstrip('•- ').strip()
            if not item_clean or len(item_clean) < 3:
                continue
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

print("Creating all forms with correct parsing...")

for category, file_list in FORMS.items():
    for filename, id_name, icon in file_list:
        print(f"Processing {category}/{id_name}...")
        
        filepath = f"{BASE_PATHS[category]}/{filename}"
        content = get_content(filepath)
        
        if not content:
            print(f"  ❌ Could not read")
            continue
        
        form_title = filename.replace('.docx', '').replace('_', ' ').replace('ÜRÜN BİLGİ FORMU', '').strip()
        if not form_title:
            form_title = id_name.replace('-', ' ').title()
        
        sections = parse_content(content)
        
        if not sections:
            print(f"  ⚠️ No sections found")
            continue
        
        page = create_component(form_title, icon, category, id_name, sections)
        
        output = f"src/app/kooperatifcilik/urun-uretici-formlari/{category}/{id_name}/page.tsx"
        with open(output, 'w', encoding='utf-8') as f:
            f.write(page)
        
        print(f"  ✓ Created ({len(sections)} sections)")

print("\nDone!")


