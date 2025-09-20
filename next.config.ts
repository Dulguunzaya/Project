/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "bitskins.com",
      "images.steamusercontent.com",
      "i.redd.it",
      "cs2.kinguin.net",
      "img-cdn.hltv.org",
      "i.pinimg.com",
    ],
  },
};

module.exports = nextConfig;
