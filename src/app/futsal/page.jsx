import FutsalContent from "@/components/FutsalContent";

const titulo = "Futsal | FutbolFem";
const descripcion =
  "Futsal femenino en FutbolFem: muy pronto en la zona oeste. Enterate de las novedades y sumate a la comunidad.";

export const metadata = {
  title: titulo,
  description: descripcion,
  alternates: { canonical: "/futsal" },
  openGraph: {
    title: titulo,
    description: descripcion,
    url: "/futsal",
    siteName: "FutbolFem",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/Futsal.jpg", alt: "Futsal" }],
  },
  twitter: {
    card: "summary",
    title: titulo,
    description: descripcion,
    images: ["/Futsal.jpg"],
  },
};

export default function FutsalPage() {
  return <FutsalContent />;
}
