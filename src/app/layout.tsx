import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dotbey.com"),
  title: {
    default: "Dotbey | Digital Marketing Agency | We don't build brands, we build growth.",
    template: "%s | Dotbey Digital Marketing",
  },
  description: "At Dotbey we create powerful digital strategies that help ambitious brands stand out, connect with the right audience, and grow with confidence. Specializing in Web Development, Video Production, Photo & Editing, Graphic Design, SEO, Meta Ads, and Brand Strategy.",
  keywords: [
    "Digital Marketing Agency",
    "Web Development",
    "Video Production",
    "Photography",
    "Video Editing",
    "Graphic Design",
    "SEO Optimization",
    "Meta Ads Management",
    "Posters & Branding",
    "Dotbey Agency"
  ],
  authors: [{ name: "Dotbey Agency", url: "https://dotbey.com" }],
  creator: "Dotbey Agency",
  publisher: "Dotbey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dotbey.com",
    siteName: "Dotbey Agency",
    title: "Dotbey | We don't build brands, we build growth.",
    description: "High-performance digital marketing, web engineering, video production & SEO services tailored for modern brands.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dotbey Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dotbey | Digital Marketing & Growth Agency",
    description: "We create powerful digital strategies, websites, video campaigns, and high-converting meta ads.",
    creator: "@dotbey",
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for LocalBusiness / MarketingAgency
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Dotbey",
    "image": "https://dotbey.com/og-image.jpg",
    "@id": "https://dotbey.com",
    "url": "https://dotbey.com",
    "telephone": "+91-9876543210",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "description": "Full-service digital marketing agency specializing in Web Development, Video Production, Photo Editing, SEO, and Meta Advertising.",
    "sameAs": [
      "https://instagram.com/dotbey",
      "https://facebook.com/dotbey",
      "https://behance.net/dotbey"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Digital Package",
        "price": "9999",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "name": "Growth Digital Package",
        "price": "24999",
        "priceCurrency": "INR"
      }
    ]
  };

  return (
    <html lang="en" className={`${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 font-sans text-slate-900 selection:bg-blue-600 selection:text-white antialiased">
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID || "G-DOTBEY2026"} />
        {children}
      </body>
    </html>
  );
}
