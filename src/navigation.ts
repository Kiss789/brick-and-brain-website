import { createNavigation } from 'next-intl/navigation';

export const { Link, redirect, usePathname, useRouter } =
  createNavigation({
    locales: ['fr', 'en'],
    localePrefix: 'always'
  });
