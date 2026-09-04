/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fonts are loaded via a standard <link> in app/layout.tsx; skip build-time inlining
  // so the build never depends on network access.
  optimizeFonts: false,
};

module.exports = nextConfig;
