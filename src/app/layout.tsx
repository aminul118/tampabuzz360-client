import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import { poppins } from "./fonts";
import { TChildren } from "@/lib/types/types";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

const RootLayout = ({ children }: TChildren) => {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <head>
        <meta property="fb:app_id" content="1615679795750113" />
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        {/* Google */}
        <GoogleAnalytics />
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
