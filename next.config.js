module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/apples/:path*',
        destination: '/products/:path*',
      },
    ]
  },
}
