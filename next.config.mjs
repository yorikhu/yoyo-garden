/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/garden/home',
        permanent: true,
      },
      {
        source: '/garden',
        destination: '/garden/home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
