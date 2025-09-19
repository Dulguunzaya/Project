/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "bitskins.com",
      "images.steamusercontent.com",
      "i.redd.it",
      "cs2.kinguin.net", // added
      "img-cdn.hltv.org", // added
    ],
  },
};

module.exports = nextConfig;
