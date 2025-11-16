import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Get locale from cookie, default to 'tr'
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value || 'tr';

  // Ensure that a valid locale is used
  const validLocales = ['tr', 'en'];
  const finalLocale = validLocales.includes(locale) ? locale : 'tr';

  return {
    locale: finalLocale,
    messages: (await import(`../../messages/${finalLocale}.json`)).default
  };
});

