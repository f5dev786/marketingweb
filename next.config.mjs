/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL("https://f5dev786siteimages.s3.us-east-1.amazonaws.com/**")],
  },
};

export default nextConfig;
