import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const galleryId = resolvedParams.id;
    const thumbPath = join(process.cwd(), 'public', 'hafiza', galleryId, 'thumb');
    
    console.log('Galeri ID:', galleryId);
    console.log('Thumb path:', thumbPath);
    
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

