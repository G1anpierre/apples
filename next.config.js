module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'scontent.cdninstagram.com'],
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
