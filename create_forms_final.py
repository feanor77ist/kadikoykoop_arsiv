#!/usr/bin/env python3
import subprocess
import os

FORMS = {
    "gida-disi": [
        ("KİTAP - ÜRÜN BİLGİ FORMU.docx", "kitap", "📚", "Kitap Ürün Bilgi Formu"),
        ("Gıda_Saklama_Kuması_Ürün_Bilgi_Formu.docx", "gida-saklama-kumasi", "🧺", "Gıda Saklama Kuması Ürün Bilgi Formu"),
        ("Mum,Balmumu ve Yan Ürünleri Bilgi Formu.docx", "mum-balmumu", "🕯️", "Mum, Balmumu ve Yan Ürünleri Bilgi Formu"),
        ("SABUN - ÜRÜN BİLGİ FORMU.docx", "sabun", "🧼", "Sabun Ürün Bilgi Formu"),
        ("Solucan Gübresi Bilgi Formu.docx", "solucan-gubresi", "🌱", "Solucan Gübresi Bilgi Formu"),
        ("kozmetik_urun_formu.docx", "kozmetik", "💄", "Kozmetik Ürün Formu"),
        ("tekstil_urunleri_bilgi_formu.docx", "tekstil", "👕", "Tekstil Ürünleri Bilgi Formu"),
        ("tuz urun bilgi formu.docx dosyasının kopyası.docx", "tuz", "🧂", "Tuz Ürün Bilgi Formu"),
        ("urun_bilgi_formu-Sıvı form.docx", "sivi-form", "🧴", "Sıvı Form Ürün Bilgi Formu"),
    ],
    "gida": [
        ("AĞAÇTA_YETİŞEN_MEYVE_ÜRÜNLERİ_BİLGİ FORMU.docx", "agacta-yetisen-meyveler", "🍎", "Ağaçta Yetişen Meyve Ürünleri Bilgi Formu"),
        ("Ekmek_bilgi_formu.docx", "ekmek", "🍞", "Ekmek Bilgi Formu"),
        ("Taze Sebze Ürünleri Bilgi Formu.docx", "taze-sebze", "🥬", "Taze Sebze Ürünleri Bilgi Formu"),
        ("bal_bilgi_formu.docx", "bal", "🍯", "Bal Bilgi Formu"),
        ("hububat_urunleri_bilgi_formu.docx", "hububat", "🌾", "Hububat Ürünleri Bilgi Formu"),
        ("islenmis_urunler_bilgi_formu.docx", "islenmis-urunler", "🥫", "İşlenmiş Ürünler Bilgi Formu"),
        ("pirinç_bilgi_formu.docx", "pirinc", "🍚", "Pirinç Bilgi Formu"),
        ("sut_urunleri_bilgi_formu.docx", "sut-urunleri", "🥛", "Süt Ürünleri Bilgi Formu"),
        ("üretici_ön_bilgi_formu.docx", "uretici-on-bilgi", "📋", "Üretici Ön Bilgi Formu"),
        ("yumurta_bilgi_formu.docx", "yumurta", "🥚", "Yumurta Bilgi Formu"),
        ("zeytinyagi_bilgi_formu.docx", "zeytinyagi", "🫒", "Zeytinyağı Bilgi Formu"),
    ]
}

BASE_PATHS = {
    "gida-disi": "/Users/ardaarli/Desktop/KOOP ARŞİV/ÜRÜN BİLGİ FORMLARI/GIDA DIŞI ÜRÜNLER",
    "gida": "/Users/ardaarli/Desktop/KOOP ARŞİV/ÜRÜN BİLGİ FORMLARI/GIDA ÜRÜNLERİ"
}

def get_content(filename, category):
    try:
        filepath = f"{BASE_PATHS[category]}/{filename}"
        result = subprocess.run(['textutil', '-convert', 'txt', '-stdout', filepath], 
                              capture_output=True, text=True, timeout=10)
        return result.stdout if result.returncode == 0 else None
    except:
        return None

def create_form_page(form_title, icon, category, id_name, content):
    color = "purple" if category == "gida-disi" else "green"
    
    # İçeriği parse et
    lines = content.strip().split('\n')
    sections = []
    current_section = None
    current_items = []
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        # Bölüm başlığı?
        if (line.isupper() and len(line) > 5) or line.strip().startswith(('1.', '2.', '3.', '4.', '5.')):
            if current_section and current_items:
                sections.append((current_section, current_items))
            current_section = line
            current_items = []
        elif line.endswith('?') or line.endswith(':'):
            current_items.append(line)
    
    if current_section and current_items:
        sections.append((current_section, current_items))
    
    # HTML oluştur
    sections_html = ""
    for sec_title, items in sections:
        sections_html += f'''            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-{color}-600">
                {sec_title}
              </h2>
              <div className="space-y-4">
'''
        for item in items:
            sections_html += f'''                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {item}
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
'''
        sections_html += '''              </div>
            </div>

'''
    
    component_name = ''.join(w.capitalize() for w in id_name.split('-'))
    
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

print("Creating all forms...")

for category, file_list in FORMS.items():
    for filename, id_name, icon, form_title in file_list:
        print(f"Processing {category}/{id_name}...")
        content = get_content(filename, category)
        if not content:
            print(f"  ❌ Could not read")
            continue
        
        page = create_form_page(form_title, icon, category, id_name, content)
        output = f"src/app/kooperatifcilik/urun-uretici-formlari/{category}/{id_name}/page.tsx"
        with open(output, 'w', encoding='utf-8') as f:
            f.write(page)
        print(f"  ✓ Created")
print("Done!")


