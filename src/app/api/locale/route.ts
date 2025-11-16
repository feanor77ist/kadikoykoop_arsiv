import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  const { locale } = await request.json();
  
  if (locale !== 'tr' && locale !== 'en') {
    return NextResponse.json({ error: 'Invalid locale' }, { status: 400 });
  }

  const cookieStore = await cookies();
  cookieStore.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  });

  return NextResponse.json({ success: true, locale });
}

