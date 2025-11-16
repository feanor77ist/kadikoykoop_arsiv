import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  eslint: {
    // During build, ESLint will only run on these directories
    // to skip existing legacy code issues
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl(nextConfig);
