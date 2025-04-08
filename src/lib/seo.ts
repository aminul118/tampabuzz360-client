import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  images?: string[];
  author?: string;
  type?: "website" | "article"; // For handling blog posts
  publishedAt?: string; // For article posts
  updatedAt?: string; // For article posts
};

const generateSEO = ({
  title,
  description,
  keywords = "Tampabuzz, tampabuzz360, tampa, tampa360, usa, florida",
  url = "https://www.tampabuzz360.com",
  images = [],
  author = "Md Aminul Islam",
  type = "website",  // Default to 'website', but can be 'article' for blog posts
  publishedAt = "", // Date for blog posts
  updatedAt = "", // Date for blog posts
}: SEOProps): Metadata => {
  const defaultImage = "https://aminul.tech/assets/banner/aminul.png";
  const uniqueImages = Array.from(new Set([defaultImage, ...images]));

  const commonMeta = {
    title,
    description,
    keywords,
    metadataBase: new URL(url),
    authors: [{ name: author, url }],
    alternates: {
      canonical: url,
    },
    icons: {
      icon: "/logo.svg",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "application-name": "Tampabuzz360",
      "apple-mobile-web-app-title": "Tampabuzz360",
      "theme-color": "#ffffff",
      "color-scheme": "light dark",
      "msapplication-TileColor": "#ffffff",
    },
  };

  if (type === "article") {
    return {
      ...commonMeta,
      openGraph: {
        type: "article",
        locale: "en_US",
        url,
        title,
        description,
        siteName: "Tampabuzz360",
        publishedTime: publishedAt,
        modifiedTime: updatedAt,
        images: uniqueImages.map((img) => ({
          url: img,
          width: 1200,
          height: 630,
          alt: title,
        })),
      },
      twitter: {
        card: "summary_large_image",
        site: "@tampabuzz360", // optional: Website's Twitter handle
        creator: "@aminul_dev", //  Content creator's (author's) Twitter handle
        title,
        description,
        images: [uniqueImages[0]],
      },
    };
  }

  return {
    ...commonMeta,
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: "Tampabuzz360",
      images: uniqueImages.map((img) => ({
        url: img,
        width: 1200,
        height: 630,
        alt: title,
      })),
    },
    twitter: {
      card: "summary_large_image",
      site: "@tampabuzz360", // optional: Website's Twitter handle
      creator: "@aminul_dev", //  Content creator's (author's) Twitter handle
      title,
      description,
      images: [uniqueImages[0]],
    },
  };
};

export default generateSEO;
