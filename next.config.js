/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only use static export for production builds
  // Remove this line when you want to test API routes locally
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  images: {
    unoptimized: true,
    domains: [],
  },
}

module.exports = nextConfig

