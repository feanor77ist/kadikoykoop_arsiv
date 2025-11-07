#!/usr/bin/env python3
"""
Instagram ve Facebook içeriklerini çekip görselleri WebP formatına çeviren script
"""

import os
import json
import re
import subprocess
from pathlib import Path
from urllib.parse import urlparse, parse_qs

# requests modülünü kontrol et ve yükle
try:
    import requests
except ImportError:
    print("❌ 'requests' modülü bulunamadı.")
    print("Lütfen şu komutu çalıştırarak yükleyin: pip3 install requests")
    exit(1)

# BeautifulSoup için kontrol
try:
    from bs4 import BeautifulSoup
    HAS_BS4 = True
except ImportError:
    HAS_BS4 = False
    print("❌ BeautifulSoup4 yüklü değil. HTML parsing için gerekli!")
    print("Lütfen şu komutu çalıştırarak yükleyin: pip3 install beautifulsoup4")
    exit(1)

import time

# Dizinler
PUBLIC_DIR = "public/etkinlikler/sosyal-medya"
IMAGES_DIR = os.path.join(PUBLIC_DIR, "images")
os.makedirs(IMAGES_DIR, exist_ok=True)

def check_cwebp():
    """cwebp kurulu mu kontrol et"""
    try:
        subprocess.run(["cwebp", "-version"], capture_output=True, check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("❌ cwebp bulunamadı. Lütfen 'brew install webp' ile kurun.")
        return False

def convert_to_webp(input_path, output_path, quality=85):
    """Görseli WebP formatına çevir"""
    try:
        result = subprocess.run(
            ["cwebp", "-q", str(quality), input_path, "-o", output_path],
            capture_output=True,
            text=True
        )
        if result.returncode == 0:
            return True
        else:
            print(f"  ⚠️ WebP dönüştürme hatası: {result.stderr}")
            return False
    except Exception as e:
        print(f"  ❌ WebP dönüştürme hatası: {e}")
        return False

def download_image(url, output_path):
    """Görseli indir"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30)
        if response.status_code == 200:
            with open(output_path, 'wb') as f:
                f.write(response.content)
            return True
        return False
    except Exception as e:
        print(f"  ❌ İndirme hatası: {e}")
        return False

def get_instagram_oembed(url):
    """Instagram oEmbed API ile içerik çek"""
    try:
        oembed_url = f"https://api.instagram.com/oembed?url={url}"
        response = requests.get(oembed_url, timeout=30)
        if response.status_code == 200:
            return response.json()
        return None
    except Exception as e:
        print(f"  ❌ Instagram oEmbed hatası: {e}")
        return None

def get_instagram_image_from_page(url, retry=3):
    """Instagram sayfasından görsel URL'ini çek"""
    for attempt in range(retry):
        try:
            # Post ID'yi çıkar
            post_id_match = re.search(r'/p/([^/?]+)', url)
            if not post_id_match:
                return None
            
            post_id = post_id_match.group(1)
            
            # Önce normal sayfayı dene (og:image meta tag'i için)
            headers = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'Referer': 'https://www.instagram.com/',
            }
            
            response = requests.get(url, headers=headers, timeout=30, allow_redirects=True)
            if response.status_code == 200:
                html = response.text
                
                # BeautifulSoup ile parse et
                try:
                    soup = BeautifulSoup(html, 'html.parser')
                    
                    # 1. og:image meta tag'ini bul (en güvenilir)
                    og_image = soup.find('meta', property='og:image')
                    if og_image and og_image.get('content'):
                        image_url = og_image['content']
                        # URL'deki &amp; karakterlerini düzelt
                        image_url = image_url.replace('&amp;', '&')
                        return image_url
                    
                    # 2. Alternatif og:image formatı
                    og_image = soup.find('meta', attrs={'property': 'og:image'})
                    if og_image and og_image.get('content'):
                        image_url = og_image['content']
                        image_url = image_url.replace('&amp;', '&')
                        return image_url
                    
                    # 3. JSON-LD'den çek
                    json_scripts = soup.find_all('script', type='application/ld+json')
                    for script in json_scripts:
                        try:
                            data = json.loads(script.string)
                            if 'image' in data:
                                if isinstance(data['image'], list) and len(data['image']) > 0:
                                    return data['image'][0]
                                elif isinstance(data['image'], str):
                                    return data['image']
                        except:
                            continue
                    
                    # 4. img tag'lerinden en büyük görseli bul
                    images = soup.find_all('img')
                    best_image = None
                    best_size = 0
                    for img in images:
                        src = img.get('src', '') or img.get('data-src', '')
                        if not src:
                            continue
                        # Instagram CDN URL'lerini kontrol et
                        if 'instagram' in src or 'fbcdn.net' in src or 'cdninstagram.com' in src:
                            # Profil resimlerini atla
                            if 's150x150' in src or 's320x320' in src or 's50x50' in src:
                                continue
                            # Boyut bilgisini çıkar
                            size_match = re.search(r's(\d+)x(\d+)', src)
                            if size_match:
                                size = int(size_match.group(1)) * int(size_match.group(2))
                                if size > best_size:
                                    best_size = size
                                    best_image = src
                            elif not best_image:  # Boyut belirtilmemişse ilkini al
                                best_image = src
                    
                    if best_image:
                        return best_image.replace('&amp;', '&')
                        
                except Exception as e:
                    if attempt < retry - 1:
                        time.sleep(2)  # Retry öncesi bekle
                        continue
                    print(f"  ⚠️ HTML parsing hatası: {e}")
            
            # Regex fallback
            og_image_match = re.search(r'property=["\']og:image["\']\s+content=["\']([^"\']+)["\']', html)
            if og_image_match:
                image_url = og_image_match.group(1)
                image_url = image_url.replace('&amp;', '&')
                return image_url
            
            return None
            
        except requests.exceptions.RequestException as e:
            if attempt < retry - 1:
                print(f"  ⚠️ İstek hatası (deneme {attempt + 1}/{retry}), tekrar deneniyor...")
                time.sleep(2)
                continue
            print(f"  ❌ Instagram sayfa scraping hatası: {e}")
            return None
        except Exception as e:
            print(f"  ⚠️ Instagram sayfa scraping hatası: {e}")
            return None
    
    return None

def extract_instagram_images(html):
    """Instagram HTML'den görsel URL'lerini çıkar"""
    images = []
    # Instagram embed HTML'den görsel URL'lerini bul
    # Genellikle og:image meta tag'inde veya JSON-LD'de bulunur
    og_image_match = re.search(r'property="og:image"\s+content="([^"]+)"', html)
    if og_image_match:
        images.append(og_image_match.group(1))
    
    # Alternatif olarak JSON-LD'den çek
    json_ld_match = re.search(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
    if json_ld_match:
        try:
            data = json.loads(json_ld_match.group(1))
            if 'image' in data:
                if isinstance(data['image'], list):
                    images.extend(data['image'])
                else:
                    images.append(data['image'])
        except:
            pass
    
    return images

def get_facebook_content(url):
    """Facebook içeriğini çek (Graph API veya scraping)"""
    # Facebook Graph API için access token gerekir
    # Alternatif: Facebook'un public embed API'sini kullan
    try:
        # Facebook embed API
        embed_url = f"https://www.facebook.com/plugins/post/oembed.json/?url={url}"
        response = requests.get(embed_url, timeout=30)
        if response.status_code == 200:
            return response.json()
        return None
    except Exception as e:
        print(f"  ❌ Facebook embed hatası: {e}")
        return None

def get_facebook_image_from_page(url, retry=3):
    """Facebook sayfasından görsel URL'ini çek"""
    for attempt in range(retry):
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'Referer': 'https://www.facebook.com/',
            }
            response = requests.get(url, headers=headers, timeout=30, allow_redirects=True)
            if response.status_code == 200:
                html = response.text
                
                # BeautifulSoup ile parse et
                try:
                    soup = BeautifulSoup(html, 'html.parser')
                    
                    # 1. og:image meta tag'ini bul (en güvenilir)
                    og_image = soup.find('meta', property='og:image')
                    if og_image and og_image.get('content'):
                        image_url = og_image['content']
                        image_url = image_url.replace('&amp;', '&')
                        return image_url
                    
                    # 2. Alternatif og:image formatı
                    og_image = soup.find('meta', attrs={'property': 'og:image'})
                    if og_image and og_image.get('content'):
                        image_url = og_image['content']
                        image_url = image_url.replace('&amp;', '&')
                        return image_url
                    
                    # 3. JSON-LD'den çek
                    json_scripts = soup.find_all('script', type='application/ld+json')
                    for script in json_scripts:
                        try:
                            data = json.loads(script.string)
                            if 'image' in data:
                                if isinstance(data['image'], list) and len(data['image']) > 0:
                                    return data['image'][0]
                                elif isinstance(data['image'], str):
                                    return data['image']
                        except:
                            continue
                    
                except Exception as e:
                    if attempt < retry - 1:
                        time.sleep(2)
                        continue
                    print(f"  ⚠️ HTML parsing hatası: {e}")
                
                # Regex fallback
                og_image_match = re.search(r'property=["\']og:image["\']\s+content=["\']([^"\']+)["\']', html)
                if og_image_match:
                    image_url = og_image_match.group(1)
                    image_url = image_url.replace('&amp;', '&')
                    return image_url
            
            return None
            
        except requests.exceptions.RequestException as e:
            if attempt < retry - 1:
                print(f"  ⚠️ İstek hatası (deneme {attempt + 1}/{retry}), tekrar deneniyor...")
                time.sleep(2)
                continue
            print(f"  ❌ Facebook sayfa scraping hatası: {e}")
            return None
        except Exception as e:
            print(f"  ⚠️ Facebook sayfa scraping hatası: {e}")
            return None
    
    return None

def process_instagram_post(url, index):
    """Instagram postunu işle"""
    print(f"📱 Instagram {index}: {url}")
    
    # Post ID'yi çıkar
    post_id_match = re.search(r'/p/([^/?]+)', url)
    if not post_id_match:
        print(f"  ❌ Post ID bulunamadı")
        return None
    
    post_id = post_id_match.group(1)
    
    # Önce sayfa scraping ile görsel URL'ini çek
    image_url = get_instagram_image_from_page(url)
    
    # Eğer sayfa scraping ile bulamazsak oEmbed'i dene
    if not image_url:
        oembed_data = get_instagram_oembed(url)
        if oembed_data:
            image_url = oembed_data.get('thumbnail_url', '')
    
    title = 'Instagram Duyurusu'
    author_name = ''
    
    # Görseli indir ve WebP'ye çevir
    image_path = None
    if image_url:
        # Geçici dosya
        temp_image = os.path.join(IMAGES_DIR, f"{post_id}_temp.jpg")
        webp_image = os.path.join(IMAGES_DIR, f"{post_id}.webp")
        
        print(f"  📥 Görsel indiriliyor: {image_url[:80]}...")
        if download_image(image_url, temp_image):
            print(f"  ✅ Görsel indirildi")
            if convert_to_webp(temp_image, webp_image):
                image_path = f"/etkinlikler/sosyal-medya/images/{post_id}.webp"
                print(f"  ✅ WebP'ye dönüştürüldü")
                # Geçici dosyayı sil
                if os.path.exists(temp_image):
                    os.remove(temp_image)
            else:
                # WebP dönüştüremezse JPG'yi kullan
                jpg_image = os.path.join(IMAGES_DIR, f"{post_id}.jpg")
                os.rename(temp_image, jpg_image)
                image_path = f"/etkinlikler/sosyal-medya/images/{post_id}.jpg"
                print(f"  ⚠️ WebP dönüştürülemedi, JPG kullanıldı")
        else:
            print(f"  ❌ Görsel indirilemedi")
    else:
        print(f"  ⚠️ Görsel URL'i bulunamadı")
    
    return {
        'type': 'instagram',
        'url': url,
        'post_id': post_id,
        'title': title or 'Instagram Duyurusu',
        'author': author_name,
        'image': image_path,
        'html': '',
        'text': ''
    }

def process_facebook_post(url, index):
    """Facebook postunu işle"""
    print(f"📘 Facebook {index}: {url}")
    
    # Post ID'yi çıkar
    fbid_match = re.search(r'fbid=(\d+)', url)
    photo_match = re.search(r'/photos/[^/]+/(\d+)', url)
    
    post_id = None
    if fbid_match:
        post_id = fbid_match.group(1)
    elif photo_match:
        post_id = photo_match.group(1)
    else:
        print(f"  ❌ Post ID bulunamadı")
        return None
    
    # Önce sayfa scraping ile görsel URL'ini çek
    image_url = get_facebook_image_from_page(url)
    
    # Eğer sayfa scraping ile bulamazsak embed API'yi dene
    if not image_url:
        embed_data = get_facebook_content(url)
        if embed_data:
            image_url = embed_data.get('thumbnail_url', '')
    
    title = 'Facebook Duyurusu'
    author_name = ''
    
    # Görseli indir ve WebP'ye çevir
    image_path = None
    if image_url:
        temp_image = os.path.join(IMAGES_DIR, f"{post_id}_temp.jpg")
        webp_image = os.path.join(IMAGES_DIR, f"{post_id}.webp")
        
        print(f"  📥 Görsel indiriliyor: {image_url[:80]}...")
        if download_image(image_url, temp_image):
            print(f"  ✅ Görsel indirildi")
            if convert_to_webp(temp_image, webp_image):
                image_path = f"/etkinlikler/sosyal-medya/images/{post_id}.webp"
                print(f"  ✅ WebP'ye dönüştürüldü")
                if os.path.exists(temp_image):
                    os.remove(temp_image)
            else:
                jpg_image = os.path.join(IMAGES_DIR, f"{post_id}.jpg")
                os.rename(temp_image, jpg_image)
                image_path = f"/etkinlikler/sosyal-medya/images/{post_id}.jpg"
                print(f"  ⚠️ WebP dönüştürülemedi, JPG kullanıldı")
        else:
            print(f"  ❌ Görsel indirilemedi")
    else:
        print(f"  ⚠️ Görsel URL'i bulunamadı")
    
    return {
        'type': 'facebook',
        'url': url,
        'post_id': post_id,
        'title': title or 'Facebook Duyurusu',
        'author': author_name,
        'image': image_path,
        'html': '',
        'text': ''
    }

def main():
    if not check_cwebp():
        return
    
    # Linkler (ters sırada - en eskiden en yeniye)
    instagram_links = [
        "https://www.instagram.com/p/CrBtHZsImjQ/?img_index=1",
        "https://www.instagram.com/p/CmObgnVIDKZ/",
        "https://www.instagram.com/p/ClbbKo7ITwG/",
        "https://www.instagram.com/p/CjC8_Y3gnuq/",
        "https://www.instagram.com/p/ChHkuyEsgrc/",
        "https://www.instagram.com/p/CgE_11FjNUv/?img_index=1",
        "https://www.instagram.com/p/Cfgx9NXN3xO/",
        "https://www.instagram.com/p/CdsXlOQo1ov/?img_index=1",
        "https://www.instagram.com/p/Cd2yXqcgUYl/",
        "https://www.instagram.com/p/Cd3BIghgWC_/?img_index=1",
        "https://www.instagram.com/p/CdyHHuVAkQM/",
        "https://www.instagram.com/p/CdyFEsaIgyk/",
        "https://www.instagram.com/p/CaffbzOgzRx/",
        "https://www.instagram.com/p/Cakx_b3ggkr/?img_index=6",
        "https://www.instagram.com/p/CWxlxZQgkuP/?img_index=1",
        "https://www.instagram.com/p/CUhGI1bgzRA/",
        "https://www.instagram.com/p/CUlEmbLg9dS/",
        "https://www.instagram.com/p/CUPbrrIgBC4/?img_index=1",
        "https://www.instagram.com/p/CPTN7NLAhzP/",
        "https://www.instagram.com/p/CPQCqOGgjKW/",
        "https://www.instagram.com/p/COUp5wVAyLm/",
        "https://www.instagram.com/p/CMosJxJAuS5/",
        "https://www.instagram.com/p/CMeVOxwgn__/",
        "https://www.instagram.com/p/CLoQxTmgcFq/",
        "https://www.instagram.com/p/CLXD3HlAkYx/",
        "https://www.instagram.com/p/CKrABIzAJn9/",
        "https://www.instagram.com/p/CJ1bnKugj2C/",
        "https://www.instagram.com/p/CIyXfsMg8b6/",
        "https://www.instagram.com/p/CCTlDeOg9n9/",
        "https://www.instagram.com/p/CBkvU81Ad6s/",
        "https://www.instagram.com/p/CBNSYe9gVMg/",
        "https://www.instagram.com/p/B_qLKiNAVVh/",
        "https://www.instagram.com/p/B9ELYUGAgfU/",
        "https://www.instagram.com/p/B4hSKvDA7aZ/",
        "https://www.instagram.com/p/B55W9VVg2z_/?img_index=1",
        "https://www.instagram.com/p/B5xHDOqAabc/?img_index=1",
        "https://www.instagram.com/p/B3CNfbGAADW/?img_index=1",
        "https://www.instagram.com/p/B3gxHnyAAVN/",
        "https://www.instagram.com/p/B4DfA69A8i7/",
        "https://www.instagram.com/p/B2y0FZ7A17c/",
        "https://www.instagram.com/p/B2mU0KFA2uU/",
        "https://www.instagram.com/p/B2WyHQ3ABwS/?img_index=1",
        "https://www.instagram.com/p/B1s3yEOgImz/",
        "https://www.instagram.com/p/B2EbWi4gb1y/?img_index=1",
        "https://www.instagram.com/p/B2Eo4f-gm5y/",
        "https://www.instagram.com/p/B2H3y3MACvn/?img_index=1",
        "https://www.instagram.com/p/B184AMTgEhg/?img_index=1",
        "https://www.instagram.com/p/B1wdY1Ig_i5/",
        "https://www.instagram.com/p/Bz-2OukAV_7/",
        "https://www.instagram.com/p/BzLs12SgaVC/",
        "https://www.instagram.com/p/Bx47PhfgR9v/",
        "https://www.instagram.com/p/Bx7EOgsgCnQ/?img_index=1",
        "https://www.instagram.com/p/BxsNgQ7BF9j/",
        "https://www.instagram.com/p/BxAXPAiAhYc/",
        "https://www.instagram.com/p/Bw7bSydAa-y/",
        "https://www.instagram.com/p/BuKDgKggXBL/",
        "https://www.instagram.com/p/BvCD6eGgMp2/?img_index=1",
        "https://www.instagram.com/p/Bs3WuQkhnlJ/",
        "https://www.instagram.com/p/Bs21QV1BWX9/",
        "https://www.instagram.com/p/Bsd05ZPhxl_/",
        "https://www.instagram.com/p/BsjUdHuhJP-/?img_index=1",
        "https://www.instagram.com/p/BsM9qPvhGjL/?img_index=1",
        "https://www.instagram.com/p/Br-e1DSBWjb/",
        "https://www.instagram.com/p/BrsepAwhl-x/?img_index=1",
        "https://www.instagram.com/p/Brhnq5SBTVL/",
        "https://www.instagram.com/p/BrpcXcfhEAS/?img_index=1",
        "https://www.instagram.com/p/BrcxxPehRRP/?img_index=1",
        "https://www.instagram.com/p/BrcfrUcBK26/?img_index=1",
        "https://www.instagram.com/p/Bq_0GNegJon/",
        "https://www.instagram.com/p/BrU6DVih_ul/?img_index=1",
        "https://www.instagram.com/p/BrSrhlDh5oz/",
        "https://www.instagram.com/p/BrLWyzKh6jB/",
        "https://www.instagram.com/p/BqnUk3zlkSB/",
        "https://www.instagram.com/p/BqMzVocBlE6/",
        "https://www.instagram.com/p/BqSCA-3hqQM/",
        "https://www.instagram.com/p/BqSCpEpBrsR/?img_index=1",
        "https://www.instagram.com/p/BpRbLfGhcnV/",
        "https://www.instagram.com/p/BpHHpkAhWMM/?img_index=1",
        "https://www.instagram.com/p/BpGtQOJBxCL/?img_index=1",
        "https://www.instagram.com/p/Boq3zpChd_L/?img_index=1",
        "https://www.instagram.com/p/BoTaCfIhuwn/",
        "https://www.instagram.com/p/Bn5wFZBBV_C/",
        "https://www.instagram.com/p/BnyyfMYBTKz/?img_index=1",
        "https://www.instagram.com/p/BnlggKchvfw/",
        "https://www.instagram.com/p/BnvkeiXhjTD/?img_index=1",
        "https://www.instagram.com/p/BnUFjkMhw5z/",
        "https://www.instagram.com/p/BnVX6E-BsyU/",
        "https://www.instagram.com/p/BnVw_s2Bkd6/?img_index=1",
        "https://www.instagram.com/p/Bna-p8nhIjx/",
        "https://www.instagram.com/p/BndTvXph_fs/?img_index=1",
        "https://www.instagram.com/p/Bnd9y_whx59/",
        "https://www.instagram.com/p/BlnLWM2hkeK/",
        "https://www.instagram.com/p/Blxi77rhhtu/",
        "https://www.instagram.com/p/Bjui9MABP5_/",
        "https://www.instagram.com/p/Bjhsf1mhRDs/",
        "https://www.instagram.com/p/BiZqmuJh8cu/",
        "https://www.instagram.com/p/BiweUYWhAhp/",
        "https://www.instagram.com/p/BimUmVRBG14/",
        "https://www.instagram.com/p/BiUPSr2hkl7/",
        "https://www.instagram.com/p/BiB6rA3hwgw/",
        "https://www.instagram.com/p/BgbMiI-AFOA/",
        "https://www.instagram.com/p/BfnlthhAeom/",
        "https://www.instagram.com/p/BfYS-3UgL6z/",
        "https://www.instagram.com/p/Bb69vLPAOkh/?img_index=1",
        "https://www.instagram.com/p/BceauqPljK1/",
        "https://www.instagram.com/p/Bcesd_El9An/",
        "https://www.instagram.com/p/BbFJFkxgf4G/?img_index=1",
        "https://www.instagram.com/p/BbRNtLfg3id/?img_index=1",
        "https://www.instagram.com/p/BbHDeuag9Gk/",
        "https://www.instagram.com/p/BbHJdvkAxJg/",
        "https://www.instagram.com/p/BbCnbdKgPVc/",
        "https://www.instagram.com/p/BbHACJ5gZ-U/",
        "https://www.instagram.com/p/BbHBZ-2Amtb/?img_index=1",
    ]
    
    facebook_links = [
        "https://www.facebook.com/photo/?fbid=828660202628416&set=pcb.828660225961747",
        "https://www.facebook.com/photo/?fbid=800151855479251&set=pcb.800151898812580",
        "https://www.facebook.com/photo/?fbid=800078695486567&set=pcb.800078732153230",
        "https://www.facebook.com/photo/?fbid=784979233663180&set=pcb.784979283663175",
        "https://www.facebook.com/photo/?fbid=668531715307933&set=pcb.668531765307928",
        "https://www.facebook.com/photo/?fbid=634352045392567&set=a.551917883635984",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/2341720615989469/?type=3",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/2298477860313745/?type=3",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/2263829583778573/?type=3",
        "https://www.facebook.com/photo/?fbid=2061953180632882&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/1902890536539148/?type=3",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/1665756756919195/?type=3",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/1433904750104398/?type=3",
        "https://www.facebook.com/photo/?fbid=1406344052860468&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/photo/?fbid=1406382036190003&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/photo/?fbid=1406382116189995&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/1344643882363819/?type=3",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/1191460007682208/?type=3",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/1191460067682202/?type=3",
        "https://www.facebook.com/photo/?fbid=1191460144348861&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/photo/?fbid=1084384898389720&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/photo/?fbid=1084384901723053&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/photo/?fbid=1084385011723042&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/965086120319599/?type=3",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/954780418016836/?type=3",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/783741218454091/?type=3",
        "https://www.facebook.com/photo/?fbid=759824510845762&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/759358317559048/?type=3",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/722763884551825/?type=3",
        "https://www.facebook.com/photo/?fbid=722770471217833&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/711096515718562/?type=3",
        "https://www.facebook.com/photo/?fbid=671735842987963&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/photo/?fbid=671735852987962&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/photo/?fbid=671735896321291&set=pb.100064533318835.-2207520000",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/624327367728811/?type=3",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/539950582833157/?type=3",
        "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/503253196502896/?type=3",
    ]
    
    # Tüm linkleri ters sırada birleştir (en eskiden en yeniye)
    all_posts = []
    
    # Instagram postlarını işle
    for idx, url in enumerate(instagram_links, 1):
        post_data = process_instagram_post(url, idx)
        if post_data:
            all_posts.append(post_data)
        # Rate limiting - Instagram'ın bot korumasını bypass etmek için
        time.sleep(2)
        print()
    
    # Facebook postlarını işle
    for idx, url in enumerate(facebook_links, 1):
        post_data = process_facebook_post(url, idx)
        if post_data:
            all_posts.append(post_data)
        # Rate limiting - Facebook'un bot korumasını bypass etmek için
        time.sleep(2)
        print()
    
    # JSON dosyasına kaydet
    json_path = os.path.join(PUBLIC_DIR, "posts.json")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(all_posts, f, ensure_ascii=False, indent=2)
    
    print(f"\n✅ Toplam {len(all_posts)} post işlendi ve {json_path} dosyasına kaydedildi.")

if __name__ == "__main__":
    main()

