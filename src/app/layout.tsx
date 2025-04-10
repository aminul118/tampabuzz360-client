import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import generateSEO from "@/lib/seo";

import { Poppins } from "next/font/google";
import { TChildren } from "@/lib/types/types";

// Load Poppins font with optimal settings
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", // Prevent render-blocking
});

export const metadata = generateSEO({
  title: "TampaBuzz360",
  description:
    "TampaBuzz360 delivers real-time news, Tampa politics, business, weather, sports, traffic, and community updates — your go-to local news source.",
  keywords:
    "Tampa news, Tampa Florida news, Tampa Bay news, local news Tampa, Tampa weather updates, Tampa sports news, Tampa politics, Tampa community events, Tampa entertainment, breaking news Tampa, Tampa traffic updates, Tampa headlines, Tampa local journalism, Tampa business news, Tampa health news, Tampa education updates, Tampa live news, news in Tampa Bay, Tampa lifestyle, Tampa news portal",
  url: "https://www.tampabuzz360.com",
});

const RootLayout = ({ children }: TChildren) => {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <head>
        {/* Manually added to support Open Graph properly */}
        <meta property="fb:app_id" content="1615679795750113" />
        <link
          rel="icon"
          href="/icons/favicon.ico"
          type="image/x-icon"
          sizes="any"
        />
      </head>
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
