import type { Metadata } from "next";
import { Bodoni_Moda, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: "400",
});

const praiseSans = Bodoni_Moda({
  variable: "--font-bodoni-sans",
  subsets: ["latin"],
  weight: "400",
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
      <body
        className={`${poppinsSans.variable} ${praiseSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
