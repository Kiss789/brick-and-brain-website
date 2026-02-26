'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/navigation';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageSwitch = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { href: '/comment-ca-marche', key: 'how' },
    { href: '/le-kit', key: 'kit' },
    { href: '/pour-les-ecoles', key: 'schools' },
    { href: '/a-propos', key: 'about' },
    { href: '/contact', key: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Brick & Brain"
                height={48}
                width={48}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {t(link.key)}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={handleLanguageSwitch}
              className="flex items-center space-x-1 px-3 py-1 rounded-full border border-gray-300 hover:border-primary transition-colors duration-200"
            >
              <span className={`text-sm ${locale === 'fr' ? 'font-bold underline' : ''}`}>
                FR
              </span>
              <span className="text-gray-400">|</span>
              <span className={`text-sm ${locale === 'en' ? 'font-bold underline' : ''}`}>
                EN
              </span>
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors duration-200"
            >
              {t('cta')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="px-3 py-2">
              <button
                onClick={handleLanguageSwitch}
                className="flex items-center space-x-1 px-3 py-1 rounded-full border border-gray-300 hover:border-primary transition-colors duration-200"
              >
                <span className={`text-sm ${locale === 'fr' ? 'font-bold underline' : ''}`}>
                  FR
                </span>
                <span className="text-gray-400">|</span>
                <span className={`text-sm ${locale === 'en' ? 'font-bold underline' : ''}`}>
                  EN
                </span>
              </button>
            </div>

            {/* Mobile CTA Button */}
            <div className="px-3 py-2">
              <Link
                href="/contact"
                className="block w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors duration-200 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('cta')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
