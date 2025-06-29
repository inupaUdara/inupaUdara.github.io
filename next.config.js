const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Use custom domain settings directly
  assetPrefix = 'https://inupaudara.me/';
  basePath = '';
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix, // Ensure assets are served from your custom domain
  basePath: basePath,       // No need for basePath when using a custom domain
  images: {
    unoptimized: true,     // Disable image optimization for GitHub Pages
  },
  experimental: {
    serverComponentsExternalPackages: ['@ai-sdk/google'],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ]
  },
};

module.exports = nextConfig;