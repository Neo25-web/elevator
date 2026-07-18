import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BASE_URL, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Classic Elevators",
  description:
    "Classic Elevators - Passenger, panoramic and freight elevator installation, maintenance and control panels. Based in Daska, serving Sialkot, Lahore, Gujrat, Wazirabad, Jhelum, Islamabad and across Punjab.",
  areaServed: site.serviceAreas.map((city) => ({ "@type": "City", name: city })),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pasrur Road, Islampura",
    addressLocality: "Daska",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  telephone: site.phoneHref,
  email: site.email,
  url: BASE_URL,
  sameAs: [site.youtube],
};

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Classic Elevators | Elevator Company in Daska, Sialkot, Pakistan",
  description:
    "Classic Elevators - Passenger, panoramic and freight elevator installation, maintenance and control panels in Daska, Sialkot, Lahore, Gujrat, Wazirabad, Jhelum and Islamabad.",
  openGraph: {
    title: "Classic Elevators | Elevator Company in Daska, Sialkot, Pakistan",
    description:
      "Classic Elevators - Passenger, panoramic and freight elevator installation, maintenance and control panels in Daska, Sialkot, Lahore, Gujrat, Wazirabad, Jhelum and Islamabad.",
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
      <body className="font-sans leading-relaxed antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
