import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://classicelevators.com.pk"),
  title: "Classic Elevators Pakistan | Premium Elevator Solutions in Lahore",
  description:
    "Classic Elevators Pakistan - Passenger and cargo elevator installation, maintenance, and modernization in Lahore.",
  openGraph: {
    title: "Classic Elevators Pakistan | Premium Elevator Solutions in Lahore",
    description:
      "Classic Elevators Pakistan - Passenger and cargo elevator installation, maintenance, and modernization in Lahore.",
    url: "https://classicelevators.com.pk",
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
      </head>
      <body className="font-sans leading-relaxed antialiased">{children}</body>
    </html>
  );
}
