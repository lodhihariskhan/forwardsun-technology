import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { services, site } from "@/lib/site";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const inter = Inter({ subsets: ["latin"], display: "swap" });
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: site.callDisplay,
  areaServed: {
    "@type": "City",
    name: "Lahore, Pakistan",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  description:
    "ForwardSun Technology provides residential, commercial, and hybrid solar solutions with installation and after-sales support in Lahore, Pakistan.",
  knowsAbout: services.map((service) => service.title),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: site.callDisplay,
    areaServed: "PK",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ForwardSun Technology | Solar Solutions in Lahore",
    template: "%s | ForwardSun Technology",
  },
  description:
    "ForwardSun Technology provides residential, commercial, and hybrid solar solutions with professional installation, maintenance, warranty support, and after-sales care in Lahore.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "ForwardSun Technology",
    description:
      "Reliable solar solutions for homes and businesses in Lahore with professional assessment and support.",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/images/hero-solar-system.webp",
        width: 1200,
        height: 900,
        alt: "ForwardSun solar energy system with panels, inverter, battery backup, and EV charging",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForwardSun Technology",
    description:
      "Reliable solar solutions for homes and businesses in Lahore with professional assessment and support.",
    images: ["/images/hero-solar-system.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-black focus:text-white focus:shadow-premium"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
      {gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
    </html>
  );
}
