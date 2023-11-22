/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: [
        //   'media-public.canva.com',
        //   'media-private.canva.com',
        //   'media.canva.com'
        // ],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media-public.canva.com',
            port: '',
            pathname: '/**'
          },
          {
            protocol: 'https',
            hostname: 'media-private.canva.com',
            port: '',
            pathname: '/**'
          },
          {
            protocol: 'https',
            hostname: 'media.canva.com',
            port: '',
            pathname: '/**'
          },
          // 'https://media-public.canva.com/**',
          // 'https://media-private.canva.com/**',
          // 'https://media.canva.com/**',
        ],
      },
}

module.exports = nextConfig
