/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This enables static export mode
  reactStrictMode: true,
  images: {
    unoptimized: true, // Ensures images work with static export
  },
};

export default nextConfig;
