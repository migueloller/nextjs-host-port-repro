/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path(.*)',
          has: [{ type: 'host', value: '(?<host>.+)' }],
          destination: '/:path?host=:host',
        },
      ],
    }
  },
}

module.exports = nextConfig
