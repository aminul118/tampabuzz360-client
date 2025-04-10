import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  images?: string[];
  author?: string;
  type?: "website" | "article";
  publishedAt?: string;
  updatedAt?: string;
};

const generateSEO = ({
  title,
  description,
  keywords = "Tampabuzz, tampabuzz360, tampa, tampa360, usa, florida",
  url = "https://www.tampabuzz360.com",
  images = [],
  author = "Md Aminul Islam",
  type = "website",
  publishedAt = "",
  updatedAt = "",
}: SEOProps): Metadata => {
  const defaultImage = "https://www.aminul.tech/assets/banner/aminul.png";

  const imageSet =
    images.length > 0 ? Array.from(new Set(images)) : [defaultImage];

  let metadataBase: URL;
  try {
    metadataBase = new URL(url);
  } catch {
    metadataBase = new URL("https://www.tampabuzz360.com");
  }

  const commonMeta: Metadata = {
    title,
    description,
    keywords,
    metadataBase,
    authors: [{ name: author, url: metadataBase.href }],
    alternates: {
      canonical: metadataBase.href,
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

  const openGraphImages = imageSet.map((img) => ({
    url: img,
    width: 1200,
    height: 630,
    alt: title,
  }));

  const twitterImages = imageSet[0] ? [imageSet[0]] : [];

  const openGraph = {
    type,
    locale: "en_US",
    url: metadataBase.href,
    title,
    description,
    siteName: "Tampabuzz360",
    images: openGraphImages,
    ...(type === "article" && {
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
    }),
  };

  const twitter = {
    card: "summary_large_image",
    site: "@tampabuzz360",
    creator: "@aminul_dev",
    title,
    description,
    images: twitterImages,
  };

  return {
    ...commonMeta,
    openGraph,
    twitter,
  };
};

export default generateSEO;
