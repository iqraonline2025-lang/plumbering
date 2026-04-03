/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static sites on Render/GitHub Pages
  },
};

export default nextConfig;
