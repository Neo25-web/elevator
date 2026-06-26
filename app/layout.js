import "./globals.css";

export const metadata = {
  title: "Classic Elevators Pakistan | Premium Elevator Solutions in Lahore",
  description:
    "Classic Elevators Pakistan - Passenger and cargo elevator installation, maintenance, and modernization in Lahore.",
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
