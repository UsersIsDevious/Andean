import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 静的ファイルとしてエクスポート
  distDir: "out", // ビルド後のフォルダ名
};

export default nextConfig;
