import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Static export: `npm run build` writes plain files to out/ for Hostinger
// (no Node process). See docs/HOSTINGER_STATIC_EXPORT.md.
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Every page becomes folder/index.html, which LiteSpeed serves for clean URLs.
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    // No image server in a static export; images load straight from the source.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
  },
};

export default nextConfig;
