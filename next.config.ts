import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n-minimal.ts');

const nextConfig: NextConfig = {
  // reactCompiler: true, // NOT enabled per constraints
  images: {
    unoptimized: true, // Allow static images to load without optimization
  },
};

export default withNextIntl(nextConfig);
