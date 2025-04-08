import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  images?: string[]; // Accept multiple images
  author?: string;
};

const generateSEO = ({
  title,
  description,
  keywords = "Tampabuzz, tampabuzz360, tampa, tampa360, usa, florida",
  url = "https://yourwebsite.com/current-page",
  images = ["https://aminul.tech/assets/banner/aminul.png"], // Default image
  author = "Md Aminul Islam",
}: SEOProps): Metadata => {
  return {
    title,
    description,
    keywords,
    icons: {
      icon: "/logo.svg",
    },
    authors: [{ name: author, url }],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Tampabuzz360",
      images: images.map((img) => ({
        url: img,
        width: 1200,
        height: 630,
        alt: title,
      })), // Map multiple images
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images, // Twitter also supports multiple images
    },
    robots: "index, follow",
    other: {
      "application-name": "Tampabuzz360",
      "apple-mobile-web-app-title": "Tampabuzz360",
    },
  };
};

export default generateSEO;
