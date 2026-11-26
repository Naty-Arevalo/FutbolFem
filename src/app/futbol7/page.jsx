import Image from "next/image";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ClubMap from "@/components/ClubMap";

const titulo = "Fútbol 7 | FutbolFem";
const descripcion =
  "Fútbol 7 en la zona oeste: juego rápido, técnico y participativo en Arena Sport, Villa Luzuriaga. Sábados a las 11 hs.";
const mensaje = encodeURIComponent("Hola, quiero información sobre Fútbol 7");

export const metadata = {
  title: titulo,
  description: descripcion,
  alternates: { canonical: "/futbol7" },
  openGraph: {
    title: titulo,
    description: descripcion,
    url: "/futbol7",
    siteName: "FutbolFem",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/futbol7page.jpeg", alt: "Fútbol 7" }],
  },
  twitter: {
    card: "summary",
    title: titulo,
    description: descripcion,
    images: ["/futbol7page.jpeg"],
  },
};

const Futbol7Page = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-500/15 via-white/[0.04] to-transparent p-6 shadow-2xl shadow-sky-900/20 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:gap-10">
          <div className="flex shrink-0 justify-center md:justify-start">
            <div className="rounded-full border border-white/10 bg-black/30 p-3">
              <Image
                src="/Escudo_f7_transparencia.png"
                alt="Escudo de Fútbol 7"
                width={150}
                height={150}
                priority
                className="size-28 object-contain sm:size-36 lg:size-40"
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center rounded-full bg-sky-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-sky-200 ring-1 ring-sky-400/30">
              Disciplina
            </span>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-sky-300 sm:text-5xl lg:text-6xl">
              Fútbol 7
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
              Se caracteriza por ser un juego rápido, dinámico y participativo,
              donde la técnica, el ritmo y el trabajo en equipo son
              fundamentales. Es ideal tanto para entrenamiento como para
              competencia, con mucho contacto con la pelota y partidos intensos.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 sm:text-sm">
                Arena Sport
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 sm:text-sm">
                Sábados 11 hs
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Dónde y cuándo
          </h2>
          <ul className="mt-5 space-y-3">
            <li className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/25 px-4 py-3">
              <LocationOnIcon className="shrink-0 text-sky-400" />
              <span className="text-neutral-200">
                <strong className="font-semibold text-white">Arena Sport</strong>
                <span className="block text-sm text-neutral-400">
                  Villa Luzuriaga, Buenos Aires
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/25 px-4 py-3">
              <CalendarMonthIcon className="shrink-0 text-sky-400" />
              <span className="text-neutral-200">
                <strong className="font-semibold text-white">Sábados</strong>
                <span className="block text-sm text-neutral-400">
                  11:00 hs
                </span>
              </span>
            </li>
          </ul>
          <a
            href={`https://wa.me/5491155618465?text=${mensaje}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
          >
            <WhatsAppIcon fontSize="small" />
            Consultar por el equipo
          </a>
        </article>

        <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/futbol7page.jpeg"
              alt="Jugadoras entrenando fútbol 7"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </article>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Cómo llegar
        </h2>
        <p className="mt-2 text-neutral-400">
          Encontranos en Arena Sport, Villa Luzuriaga.
        </p>
        <div className="mt-5">
          <ClubMap
            club={{
              ubicacion: { nombre: "Arena Sport", direccion: "Villa Luzuriaga" },
            }}
            localidad="Zona Oeste"
          />
        </div>
      </section>
    </div>
  );
};

export default Futbol7Page;
