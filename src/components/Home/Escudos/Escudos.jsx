import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const destinos = [
  {
    href: "/futbolfemhaedo",
    imagen: "/Escudo_Haedo_transparencia.png",
    nombre: "Haedo",
    tipo: "Sede",
  },
  {
    href: "/futbolfemituza",
    imagen: "/Escudo_Ituza_transparencia.png",
    nombre: "Ituzaingó",
    tipo: "Sede",
  },
  {
    href: "/futbolfempalomar",
    imagen: "/Escudo_Palomar_transparencia.png",
    nombre: "Palomar",
    tipo: "Sede",
  },
  {
    href: "/futbolfemramos",
    imagen: "/Escudo_Ramos_transparencia.png",
    nombre: "Ramos",
    tipo: "Sede",
  },
  {
    href: "/futbol7",
    imagen: "/Escudo_f7_transparencia.png",
    nombre: "Fútbol 7",
    tipo: "Disciplina",
  },
  {
    href: "/futsal",
    imagen: "/futsal-transparente.png",
    nombre: "Futsal",
    tipo: "Disciplina",
  },
];

export default function Escudos() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
          Nuestros espacios
        </span>
        <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
          Elegí tu sede
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-neutral-400">
          Cuatro sedes y dos disciplinas para encontrar tu lugar en el fútbol
          femenino.
        </p>
      </header>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-6">
        {destinos.map(({ href, imagen, nombre, tipo }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:p-6"
          >
            <span className="flex size-24 items-center justify-center sm:size-32 lg:size-40">
              <Image
                src={imagen}
                alt={`Escudo de ${nombre}`}
                width={120}
                height={120}
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 160px"
                className="size-full object-contain transition-transform duration-300 group-hover:scale-110"
                style={{
                  filter: "drop-shadow(0px 6px 14px rgba(255,255,255,0.25))",
                }}
              />
            </span>
            <span className="mt-3 text-base font-bold text-white sm:text-lg lg:text-xl">
              {nombre}
            </span>
            <span className="mt-1 text-sm text-neutral-400">{tipo}</span>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sky-400">
              Ver más
              <ArrowForwardIcon fontSize="inherit" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
