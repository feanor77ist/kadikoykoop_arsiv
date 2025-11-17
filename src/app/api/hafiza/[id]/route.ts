import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const galleryId = resolvedParams.id;
    
    // Debug için tüm dizinleri kontrol et
    const cwd = process.cwd();
    const { existsSync } = await import('fs');
    const { readdirSync } = await import('fs');
    
    console.log('=== DEBUG INFO ===');
    console.log('CWD:', cwd);
    console.log('Gallery ID:', galleryId);
    console.log('Public exists?', existsSync(join(cwd, 'public')));
    
    if (existsSync(cwd)) {
      console.log('Root contents:', readdirSync(cwd));
    }
    
    const thumbPath = join(cwd, 'public', 'hafiza', galleryId, 'thumb');
    console.log('Thumb path:', thumbPath);
    console.log('Thumb exists?', existsSync(thumbPath));
    
    // Thumbnail klasöründeki görselleri listele
    const files = await readdir(thumbPath);
    console.log('Bulunan dosyalar:', files.length);
    
    const images = files
      .filter(file => file.endsWith('.webp'))
      .sort();
    
    console.log('WebP görseller:', images.length);
    
    return NextResponse.json({ images });
  } catch (error) {
    console.error('Görseller yüklenirken hata:', error);
    return NextResponse.json({ images: [] }, { status: 404 });
  }
}

