#!/usr/bin/env python3
import subprocess

forms = {
    "gida-disi": [
        ("Gıda_Saklama_Kuması_Ürün_Bilgi_Formu.docx", "gida-saklama-kumasi", "🧺"),
        ("KİTAP - ÜRÜN BİLGİ FORMU.docx", "kitap", "📚"),
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

base_paths = {
    "gida-disi": "/Users/ardaarli/Desktop/KOOP ARŞİV/ÜRÜN BİLGİ FORMLARI/GIDA DIŞI ÜRÜNLER",
    "gida": "/Users/ardaarli/Desktop/KOOP ARŞİV/ÜRÜN BİLGİ FORMLARI/GIDA ÜRÜNLERİ"
}

def get_docx_content(filename, category):
    """Docx içeriğini al"""
    filepath = f"{base_paths[category]}/{filename}"
    try:
        result = subprocess.run(['textutil', '-convert', 'txt', '-stdout', filepath], 
                              capture_output=True, text=True, timeout=10)
        return result.stdout.strip() if result.returncode == 0 else None
    except:
        return None

def parse_content_to_sections(text):
    """İçeriği parse et ve bölümlere ayır"""
    sections = []
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    
    current_section = None
    current_items = []
    
    for line in lines:
        # Başlık olabilir mi?
        if (line.isupper() and len(line) > 5 and line.count(' ') < 5) or line.startswith('1.') or line.startswith('2.') or line.startswith('3.') or line.startswith('4.'):
            if current_section:
                sections.append((current_section, current_items))
            current_section = line
            current_items = []
        elif line.startswith('•') or line.startswith('-'):
            current_items.append(('item', line.lstrip('•- ')))
        elif line.endswith('?') or line.endswith(':'):
            current_items.append(('question', line))
        else:
            current_items.append(('text', line))
    
    if current_section:
        sections.append((current_section, current_items))
    
    return sections

def create_react_component(content, form_title, icon, category, id_name):
    """React component oluştur"""
    
    color = "purple" if category == "gida-disi" else "green"
    nav_path = "../../../../components/Navigation"
    
    # İçeriği basit HTML'e çevir
    sections_html = ""
    for section_title, items in parse_content_to_sections(content):
        if section_title:
            sections_html += f'''
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-{color}-600">
                {section_title}
              </h2>
              <div className="space-y-4">
'''
            for item_type, item_content in items:
                if item_type in ['question', 'item']:
                    sections_html += f'''                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {item_content}
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
'''
            sections_html += '''              </div>
            </div>
'''
    
    # Component adı
    component_name = ''.join(word.capitalize() for word in id_name.split('-'))
    
    template = f'''import Link from "next/link";
import Navigation from "{nav_path}";

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
            <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300">{content[:2000]}</pre>
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
    return template

print("Creating all forms with real content...")

for category, file_list in forms.items():
    for filename, id_name, icon in file_list:
        print(f"Processing {category}/{id_name}...")
        
        content = get_docx_content(filename, category)
        if not content:
            print(f"  ❌ Could not read {filename}")
            continue
        
        form_title = filename.replace('.docx', '').replace('_', ' ').replace('ÜRÜN BİLGİ FORMU', '').strip()
        
        page_content = create_react_component(content, form_title, icon, category, id_name)
        
        output_path = f"src/app/kooperatifcilik/urun-uretici-formlari/{category}/{id_name}/page.tsx"
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(page_content)
        
        print(f"  ✓ Created {output_path}")

print("\nDone!")


