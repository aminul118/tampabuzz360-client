import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";

import { Poppins } from "next/font/google";
import { TChildren } from "@/lib/types/types";

// Load Poppins font with optimal settings
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", // Prevent render-blocking
});

const RootLayout = ({ children }: TChildren) => {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <head>
        <meta property="fb:app_id" content="1615679795750113" />
        <meta name="robots" content="index, follow" />
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
