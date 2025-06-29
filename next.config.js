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
};

module.exports = nextConfig;