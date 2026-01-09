// GitHub Pages 部署設定
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = '/portfolio_web'; // 已經確認是這個 repo 名稱

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  distDir: "out", // 這是默認的，可以保留

  // 子路徑設定 (部署到 username.github.io/repo-name)
  basePath: isGitHubPages ? repoName : "",
  assetPrefix: isGitHubPages ? repoName : "",

  // 確保每個路由都有 index.html (避免 404)
  trailingSlash: true,

  // 圖片優化 (靜態導出不支援，需關閉)
  images: {
    unoptimized: true,
  },

  reactCompiler: true,
};

export default nextConfig;
