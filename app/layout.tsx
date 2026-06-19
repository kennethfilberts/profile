import type { Metadata } from "next";
import { Bodoni_Moda, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import LenisProvider from "@/components/lenis-provider";
import BackToTop from "@/components/back-to-top";
import "./globals.css";
import { CursorFollower } from "@/components/cursor-follower";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const praiseSans = Bodoni_Moda({
  variable: "--font-bodoni-sans",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kenneth Filbert",
  description: "A portfolio website for Kenneth Filbert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${poppinsSans.variable} ${praiseSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <LenisProvider>
            <CursorFollower />
            <BackToTop />
            <div id="scroll-progress" />
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
