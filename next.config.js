/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
        'lh3.googleusercontent.com',
        'profile.line-scdn.net',
        'platform-lookaside.fbsbx.com',
        'xxxxx.com'
    ],
  },
  async rewrites() {
    return [
      {
        source: '/htmlStatic',
        destination: '/htmlStatic/index.html',
      },
      {
        source: '/htmlStatic/lib/:path*.css',
        destination: '/htmlStatic/lib/:path*.css',
      },
      {
        source: '/htmlStatic/lib/:path*.js',
        destination: '/htmlStatic/lib/:path*.js',
      },
    ];
  },
}


module.exports = nextConfig
