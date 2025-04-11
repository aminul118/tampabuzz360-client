// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval'
      https://tagmanager.google.com
      https://www.googletagmanager.com
      https://analytics.google.com
      https://connect.facebook.net;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: blob:
      https://i.ibb.co
      https://analytics.google.com
      https://tagmanager.google.com
      https://www.facebook.com;
    connect-src 'self'
      https://analytics.google.com
      https://tagmanager.google.com
      https://www.google-analytics.com
      https://region1.google-analytics.com
      https://connect.facebook.net
      https://graph.facebook.com;
    frame-src 'self' https://www.youtube.com https://www.facebook.com;
    object-src 'none';
    base-uri 'self';
    frame-ancestors 'none';
  `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer-when-downgrade",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
