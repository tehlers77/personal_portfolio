/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
  dangerouslyAllowSVG: true,
  domains: ["tailwindui.com", "images.unsplash.com", "eincode.com", "thrangra.sirv.com", "avatars.githubusercontent.com", "lh3.googleusercontent.com"]
  }
}

module.exports = nextConfig

