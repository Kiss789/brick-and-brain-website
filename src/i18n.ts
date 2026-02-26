import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {readFileSync} from 'fs';
import {join} from 'path';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  const locales = ['fr', 'en'];
  if (!locales.includes(locale)) notFound();

  // Load messages using fs - resolve from project root
  const messagesPath = join(process.cwd(), 'messages', `${locale}.json`);
  
  let messages;
  try {
    const messagesContent = readFileSync(messagesPath, 'utf-8');
    messages = JSON.parse(messagesContent);
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    // Fallback to French if current locale fails
    if (locale !== 'fr') {
      const fallbackPath = join(process.cwd(), 'messages', 'fr.json');
      const fallbackContent = readFileSync(fallbackPath, 'utf-8');
      messages = JSON.parse(fallbackContent);
    } else {
      throw error;
    }
  }

  return {
    locale,
    messages
  };
});
