module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
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
