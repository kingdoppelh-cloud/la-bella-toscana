import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "La Bella Toscana | Authentische italienische Küche in Bad Sooden-Allendorf",
  description: "Erleben Sie den Geschmack der Toskana mit handgemachter Pasta, Steinofenpizza und erlesenen Weinen. Jetzt Tisch reservieren oder online bestellen.",
  openGraph: {
    title: "La Bella Toscana | Authentische italienische Küche",
    description: "Handgemachte Pasta & Steinofenpizza in Bad Sooden-Allendorf.",
    url: "https://la-bella-toscana.vercel.app",
    siteName: "La Bella Toscana",
    images: [
      {
        url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
        width: 1200,
        height: 630,
        alt: "La Bella Toscana Restaurant",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Bella Toscana | Authentische italienische Küche",
    description: "Handgemachte Pasta & Steinofenpizza in Bad Sooden-Allendorf.",
    images: ["https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* ... existing head content ... */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "La Bella Toscana",
              "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
              "@id": "https://la-bella-toscana.vercel.app",
              "url": "https://la-bella-toscana.vercel.app",
              "telephone": "056525280049",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Weinreihe 10",
                "addressLocality": "Bad Sooden-Allendorf",
                "postalCode": "37242",
                "addressCountry": "DE"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "11:30",
                "closes": "22:00"
              },
              "servesCuisine": "Italian",
              "priceRange": "€€"
            })
          }}
        />
      </head>
      <body className="antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}


