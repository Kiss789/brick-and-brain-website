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
  const messagesContent = readFileSync(messagesPath, 'utf-8');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages: any = JSON.parse(messagesContent);

  return {
    locale: localePath,
    messages
  };
});
