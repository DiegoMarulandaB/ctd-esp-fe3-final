// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['dh-frontend.cdn.prismic.io'],
//   },
//   reactStrictMode: true,
//   swcMinify: true,
//   //
//   // Note: configuring pageExtensions also affects _document.js, _app.js,
//   // middleware.js as well as files under pages/api/.
//   // For example, setting pageExtensions: ['page.tsx', 'page.ts']
//   // means the following files: _document.tsx, _app.tsx, middleware.ts, pages/users.tsx and pages/api/users.ts
//   // will have to be renamed to _document.page.tsx, _app.page.tsx, middleware.route.ts, pages/users.page.tsx
//   // and pages/api/users.page.ts respectively.
//   pageExtensions: ['page.tsx', 'page.ts', 'route.tsx', 'route.ts', 'tsx'],
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.externals = config.externals || []
//       config.externals.push('jest')
//     }
//     return config
//   },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://example.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https://example.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://api.example.com;
  frame-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`

const nextConfig = {
  images: {
    domains: ['dh-frontend.cdn.prismic.io'],
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts', 'route.tsx', 'route.ts', 'tsx'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = config.externals || []
      config.externals.push('jest')
    }
    return config
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\n/g, ''),
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), camera=(), microphone=(), payment=()',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
