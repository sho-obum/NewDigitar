/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media-public.canva.com"], // 👈 Add this
  },
}

module.exports = nextConfig

