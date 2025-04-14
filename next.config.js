/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/NotionNext/:path*',
        destination: 'http://localhost:3000/:path*'
      }
    ];
  }
};

module.exports = nextConfig; 