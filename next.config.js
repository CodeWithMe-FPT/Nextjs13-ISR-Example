/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["binhminhcooking.s3.ap-southeast-1.amazonaws.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
