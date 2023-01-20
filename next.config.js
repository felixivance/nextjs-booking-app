/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: "mongodb://0.0.0.0:27017/bookit",
  }
}

module.exports = nextConfig
