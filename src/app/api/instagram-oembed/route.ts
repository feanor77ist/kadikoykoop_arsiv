import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL gerekli" }, { status: 400 });
  }

  try {
    // Instagram oEmbed API
    const oembedUrl = `https://api.instagram.com/oembed?url=${encodeURIComponent(url)}`;
    const response = await fetch(oembedUrl);
    
    if (!response.ok) {
      return NextResponse.json({ error: "Instagram içeriği alınamadı" }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Instagram oEmbed hatası:", error);
    return NextResponse.json({ error: "İçerik alınamadı" }, { status: 500 });
  }
}

