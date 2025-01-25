const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/cart/:path*",
        destination: "/core/cart/:path*",
      },
      {
        source: "/product-info/:path*",
        destination: "/core/product-info/:path*",
      },
      {
        source: "/search/:path*",
        destination: "/core/search/:path*",
      },
      {
        source: "/favorites/:path*",
        destination: "/core/favorites/:path*",
      },
      {
        source: "/account/:path*",
        destination: "/core/account/:path*",
      },
      {
        source: "/:path*",
        destination: "/auth/:path*",
      },
    ];
  },
};

export default nextConfig;
