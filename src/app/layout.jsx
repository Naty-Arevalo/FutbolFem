import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata = {
  title: "FutbolFem - Fútbol Femenino en Zona Oeste",
  description:
    "Toda la actividad del fútbol femenino en Zona Oeste del Gran Buenos Aires. Sedes en Haedo, Ramos Mejía, Ituzaingó y El Palomar. Torneos, entrenamientos y más.",
  keywords: [
    "fútbol femenino",
    "zona oeste",
    "Haedo",
    "Ramos Mejía",
    "Ituzaingó",
    "El Palomar",
    "torneos de fútbol",
    "fútbol amateur femenino",
    "fútbol femenino Argentina",
  ],
  authors: [{ name: "FutbolFem", url: "https://futbolfem.vercel.app" }],
  creator: "FutbolFem",
  metadataBase: new URL("https://futbolfem.vercel.app"),
  openGraph: {
    title: "FutbolFem - Fútbol Femenino en Zona Oeste",
    description:
      "Conocé todo sobre el fútbol femenino en la zona oeste de Buenos Aires. Entrenamientos, torneos y novedades en Haedo, Ramos, Ituzaingó y El Palomar.",
    url: "https://futbolfem.vercel.app",
    siteName: "FutbolFem",
    images: [
      {
        url: "https://futbolfem.vercel.app/logo.png",
        width: 800,
        height: 800,
        alt: "Logo FutbolFem - Fútbol Femenino",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FutbolFem - Fútbol Femenino en Zona Oeste",
    description:
      "Toda la información sobre fútbol femenino en la zona oeste: Haedo, Ramos Mejía, Ituzaingó, El Palomar.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <meta name="google-site-verification" content="uNTm3TunnBmCEPKzM97wtLQgN_zrtOHDmh3v0jn7Xd4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FutbolFem",
              url: "https://futbolfem.vercel.app",
              logo: "https://futbolfem.vercel.app/logo.png",
              sameAs: [
                "https://www.instagram.com/futbolfem2025/"
              ],
            }),
          }}
        />
          <link rel="icon" href="/favicon-96x96.png" type="image/png" />
      </head>
      <body>
        <div className="grid grid-rows-[auto_auto_1fr_auto] min-h-dvh bg-black/90">
          
            <Navbar />
            <Banner />
          <main>
            {children}
          </main>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
    
  );
}
