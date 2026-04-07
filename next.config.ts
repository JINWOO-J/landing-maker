import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages 배포 시 리포지토리 이름이 basePath가 됨
  // 예: https://username.github.io/repo-name/
  // username.github.io 루트 배포라면 basePath 제거
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
};

export default nextConfig;
