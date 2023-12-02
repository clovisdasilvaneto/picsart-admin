/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENV_MODE: process.env.NODE_ENV,
  },
  webpack: (config) => {
    return config
  },
}

module.exports = nextConfig
