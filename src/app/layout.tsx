import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import generateSEO from "@/lib/seo";

import { Poppins } from "next/font/google";
import { TChildren } from "@/lib/types/types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", // Prevent render-blocking
});

export const metadata = generateSEO({
  title: "TampaBuzz",
  description:
    "Welcome to my portfolio website showcasing my web development work.",
  keywords: "Web Developer, MERN Stack, Next.js, SEO",
  url: "https://www.tampabuzz360.com",
  images: [
    "https://aminul.tech/images/banner/aminul.png",
    "https://aminul.tech/images/projects/project1.png",
    "https://aminul.tech/images/projects/project2.png",
  ],
});

const RootLayout = ({ children }: TChildren) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={poppins.className} // ✅ Apply the font here
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
