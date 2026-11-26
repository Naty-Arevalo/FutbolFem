"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";

const instagramLinks = [
  { url: "https://www.instagram.com/futbolfem2025/", label: "@futbolFem" },
  {
    url: "https://www.instagram.com/futbolfemhaedo/",
    label: "@futbolFemHaedo",
  },
  {
    url: "https://www.instagram.com/futbolfemituzaingo/",
    label: "@futbolFemItuzaingó",
  },
  {
    url: "https://www.instagram.com/futbolfemramosmejia/",
    label: "@futbolFemRamos",
  },
  {
    url: "https://www.instagram.com/futbolfempalomar/",
    label: "@futbolFemPalomar",
  },
];

const mensajeWhatsApp = encodeURIComponent(
  "Hola, quiero información sobre fútbol femenino"
);

const Contacto = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
          Contacto
        </span>
        <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
          Podés ser parte del equipo
        </h2>
        <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">
          Cada jugadora tiene su propio ritmo, y todas tienen la oportunidad de
          sumarse a un equipo para competiciones futuras. Solo hace falta
          compromiso, ganas de aprender y disfrutar del fútbol.
        </p>
        <p className="mt-3 text-base leading-7 text-neutral-400">
          Para más información sobre clases, horarios y ubicaciones, escribinos.
          También podés seguirnos en nuestras redes para estar al tanto de
          todas las novedades y eventos.
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white">Instagram</h3>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {instagramLinks.map(({ url, label }) => (
              <li key={url}>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 transition hover:border-sky-400/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <InstagramIcon
                    fontSize="small"
                    className="shrink-0 text-pink-400"
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col justify-between gap-6 rounded-3xl border border-green-500/25 bg-green-500/5 p-6 sm:p-8">
          <div>
            <h3 className="text-xl font-bold text-white">¿Querés sumarte?</h3>
            <p className="mt-2 leading-7 text-neutral-300">
              Escribinos por WhatsApp y te contamos sobre las categorías, los
              horarios y la sede más cerca tuya.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/5491155618465?text=${mensajeWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              <WhatsAppIcon fontSize="small" />
              Escribinos
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ArrowUpwardIcon fontSize="small" />
              Volver arriba
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacto;
