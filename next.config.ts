import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.onlineimagetools.xyz" }],
        destination: "https://onlineimagetools.xyz/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
