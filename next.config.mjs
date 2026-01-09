const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/portfolio_web" : "",
  assetPrefix: isProd ? "/portfolio_web/" : "",
  reactCompiler: true,
};

export default nextConfig;
