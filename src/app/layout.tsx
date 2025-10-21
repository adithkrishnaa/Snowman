import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { LoadingProvider } from "@/lib/loading-context";
import Script from "next/script";

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

const siteUrl = "https://www.snowmanclimate.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Snowman Split AC & Inverter Air Conditioning Systems",
    template: "%s | Snowman Climate",
  },
  description: "Turkey's leading manufacturer of split air conditioners and inverter AC systems. Wall-mounted AC units, commercial HVAC systems, and energy-efficient air conditioning. Competitive prices with professional installation.",
  keywords: [
    // English keywords
    "split air conditioner",
    "wall mounted AC",
    "air conditioning prices",
    "inverter AC",
    "commercial HVAC systems",
    "AC installation",
    "energy efficient air conditioning",
    "snowman climate",
    // Turkish keywords for SEO
    "split klima",
    "duvar tipi klima",
    "klima fiyatları",
    "inverter klima",
    "ticari klima sistemleri",
  ],
  authors: [{ name: "Snowman Climate Systems" }],
  creator: "Snowman",
  publisher: "Snowman Climate Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    url: siteUrl,
    siteName: "Snowman Climate Systems",
    title: "Snowman Split AC & Inverter Air Conditioning Systems",
    description: "Turkey's leading manufacturer of split air conditioners and inverter AC systems. Wall-mounted AC, commercial HVAC, and energy-efficient solutions.",
    images: [
      {
        url: "/products/product1.jpg",
        width: 1200,
        height: 630,
        alt: "Snowman Split Klima Sistemleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snowman Split AC & Inverter Air Conditioning Systems",
    description: "Turkey's leading manufacturer of split AC and inverter air conditioning systems. Quality AC at competitive prices.",
    images: ["/products/product1.jpg"],
    creator: "@snowmanclimate",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "tr-TR": siteUrl,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Snowman Climate Systems",
    alternateName: "Snowman Klima",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "Turkey's leading manufacturer of split air conditioners and inverter AC systems",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
      addressLocality: "İstanbul",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Turkish", "English"],
    },
    sameAs: [
      "https://www.facebook.com/snowmanclimate",
      "https://www.instagram.com/snowmanclimate",
      "https://twitter.com/snowmanclimate",
      "https://www.linkedin.com/company/snowmanclimate",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteUrl,
    name: "Snowman Climate Systems",
    image: `${siteUrl}/products/product1.jpg`,
    description: "Split air conditioner, wall-mounted AC, and commercial HVAC systems sales and installation. Energy-efficient inverter AC solutions.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
      addressLocality: "İstanbul",
    },
    priceRange: "₺₺",
    telephone: "+90-XXX-XXX-XXXX",
    url: siteUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    currenciesAccepted: "TRY",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
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
