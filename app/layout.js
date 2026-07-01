import "./globals.css";
import { BASE_URL, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Classic Elevators",
  description:
    "Classic Elevators Pakistan - Passenger and cargo elevator installation, maintenance, and modernization in Lahore.",
  areaServed: "Lahore, Pakistan",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  telephone: site.phoneHref,
  email: site.email,
  url: BASE_URL,
  sameAs: [],
};

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Classic Elevators Pakistan | Premium Elevator Solutions in Lahore",
  description:
    "Classic Elevators Pakistan - Passenger and cargo elevator installation, maintenance, and modernization in Lahore.",
  openGraph: {
    title: "Classic Elevators Pakistan | Premium Elevator Solutions in Lahore",
    description:
      "Classic Elevators Pakistan - Passenger and cargo elevator installation, maintenance, and modernization in Lahore.",
    url: BASE_URL,
    siteName: "Classic Elevators",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans leading-relaxed antialiased">{children}</body>
    </html>
  );
}
