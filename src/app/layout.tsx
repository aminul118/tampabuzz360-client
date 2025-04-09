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
    "TampaBuzz360 is the ultimate digital news destination for everything happening in Tampa, Florida. We bring you breaking news, in-depth stories, and real-time updates covering a wide range of topics including local government, politics, business, sports, weather, health, entertainment, education, traffic, and community events. Whether you're a lifelong Tampa resident or a newcomer to the area, TampaBuzz360 keeps you informed with accurate, engaging, and relevant content curated specifically for the Tampa Bay area.Our team of experienced journalists and contributors work around the clock to provide trustworthy and timely information that matters to you. From city council decisions and neighborhood developments to Tampa Bay Lightning games and cultural festivals, TampaBuzz360 ensures you're always in the loop. We also offer exclusive interviews, editorial insights, and community spotlight features to give voice to the people and issues shaping our vibrant city.With mobile-friendly design, push notification alerts, and active engagement on social media, TampaBuzz360 makes it easy for you to stay connected to Tampa wherever you are. Discover the stories that define Tampa — only on TampaBuzz360, your trusted source for local news.",
  keywords:
    "Tampa news, Tampa Florida news, Tampa Bay news, local news Tampa, Tampa weather updates, Tampa sports news, Tampa politics, Tampa community events, Tampa entertainment, breaking news Tampa, Tampa traffic updates, Tampa headlines, Tampa local journalism, Tampa business news, Tampa health news, Tampa education updates, Tampa live news, news in Tampa Bay, Tampa lifestyle, Tampa news portal",
  url: "https://www.tampabuzz360.com",
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
