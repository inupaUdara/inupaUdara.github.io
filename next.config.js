const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
      unoptimized: true,
    },
    output: 'export'
  };

  
// module.exports = {
//     output: 'export',
//   assetPrefix: assetPrefix,
//   basePath: basePath,
//   images: {
//     unoptimized: true,
//   },
// };
module.exports = nextConfig