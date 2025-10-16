import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { LoadingProvider } from "@/lib/loading-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snowman - Premium Quality Products",
  description: "Your trusted partner for excellence and innovation. Premium quality products with exceptional service.",
  keywords: ["premium products", "quality", "innovation", "snowman", "catalog"],
  authors: [{ name: "Snowman Company" }],
  openGraph: {
    title: "Snowman - Premium Quality Products",
    description: "Your trusted partner for excellence and innovation. Premium quality products with exceptional service.",
    type: "website",
    locale: "en_US",
    alternateLocale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snowman - Premium Quality Products",
    description: "Your trusted partner for excellence and innovation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
