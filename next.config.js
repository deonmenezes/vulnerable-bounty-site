/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  poweredByHeader: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
          { key: "Access-Control-Allow-Origin", value: "*" }
        ]
      }
    ];
  }
};
