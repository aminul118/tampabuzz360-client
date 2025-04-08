import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import generateSEO from "@/lib/seo";

export const metadata = generateSEO({
  title: "TampaBuzz",
  description:
    "Welcome to my portfolio website showcasing my web development work.",
  keywords: "Web Developer, MERN Stack, Next.js, SEO",
  url: "https://www.tampabuzz360.com",
  images: [
    "https://aminul.tech/assets/banner/aminul.png",
    "https://aminul.tech/assets/projects/project1.png",
    "https://aminul.tech/assets/projects/project2.png",
  ],
});

export type ChildrenType = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: ChildrenType) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
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
