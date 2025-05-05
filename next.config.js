/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/The-Technical-Book-Club',
  assetPrefix: '/The-Technical-Book-Club/',
  distDir: 'dist',
  trailingSlash: true,
}

module.exports = nextConfig
