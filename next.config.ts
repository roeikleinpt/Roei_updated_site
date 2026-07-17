import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // מסתיר את אינדיקטור הפיתוח של Next (לוגו ה-"N" בפינה) במצב dev.
  devIndicators: false,
};

export default nextConfig;
