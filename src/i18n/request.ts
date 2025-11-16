import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  let locale = 'tr'; // Default locale
  
  try {
    // Try to get locale from cookie (runtime)
    const cookieStore = await cookies();
    locale = cookieStore.get('locale')?.value || 'tr';
  } catch (error) {
    // During build time, cookies might not be available
    // Use default locale 'tr'
    locale = 'tr';
  }

  // Ensure that a valid locale is used
  const validLocales = ['tr', 'en'];
  const finalLocale = validLocales.includes(locale) ? locale : 'tr';

  return {
    locale: finalLocale,
    messages: (await import(`../../messages/${finalLocale}.json`)).default
  };
});

