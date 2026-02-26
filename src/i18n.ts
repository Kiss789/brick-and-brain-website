import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {readFileSync} from 'fs';
import {join} from 'path';
import { locales, defaultLocale, type Locale } from '@/config';

export { locales, defaultLocale, type Locale };

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  const localePath = locale as Locale;

  // Load messages using fs - resolve from project root
  const messagesPath = join(process.cwd(), 'messages', `${localePath}.json`);
  
  let messages;
  try {
    const messagesContent = readFileSync(messagesPath, 'utf-8');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messages = JSON.parse(messagesContent);
  } catch (error) {
    console.error(`Failed to load messages for locale ${localePath}:`, error);
    // Fallback to default locale if current locale fails
    if (localePath !== defaultLocale) {
      const fallbackPath = join(process.cwd(), 'messages', `${defaultLocale}.json`);
      const fallbackContent = readFileSync(fallbackPath, 'utf-8');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      messages = JSON.parse(fallbackContent);
    } else {
      throw error;
    }
  }

  return {
    locale: localePath,
    messages
  };
});
