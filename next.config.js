/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ["pdf-parse"],
    },
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: "attachment",
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
  };
  
  module.exports = nextConfig;