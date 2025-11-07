import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  try {
    // JSON dosyasını oku
    const jsonPath = join(process.cwd(), "public", "etkinlikler", "etkinlikler.json");
    const jsonData = await readFile(jsonPath, "utf-8");
    const etkinliklerData = JSON.parse(jsonData);
    
    // Slug'dan etkinliği bul
    const etkinlik = etkinliklerData.find((e: any) => e.slug === slug);
    
    if (!etkinlik || !etkinlik.content || etkinlik.content_type !== "text") {
      return NextResponse.json({ error: "İçerik bulunamadı" }, { status: 404 });
    }
    
    // İçerik yolunu al (public klasöründen)
    const contentPath = join(process.cwd(), "public", etkinlik.content);
    const content = await readFile(contentPath, "utf-8");
    
    return NextResponse.json({ content });
  } catch (error) {
    console.error("İçerik okuma hatası:", error);
    return NextResponse.json({ error: "İçerik okunamadı" }, { status: 500 });
  }
}

