import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const sedes = [
  { href: "/futbolfemhaedo", label: "Haedo" },
  { href: "/futbolfemituza", label: "Ituzaingó" },
  { href: "/futbolfempalomar", label: "Palomar" },
  { href: "/futbolfemramos", label: "Ramos Mejía" },
  { href: "/futbol7", label: "Fútbol 7" },
  { href: "/futsal", label: "Futsal" },
];

const redes = [
  {
    href: "https://www.instagram.com/futbolfem2025/",
    label: "@futbolFem",
  },
  {
    href: "https://www.instagram.com/futbolfemhaedo/",
    label: "@futbolFemHaedo",
  },
  {
    href: "https://www.instagram.com/futbolfemituzaingo/",
    label: "@futbolFemItuzaingó",
  },
  {
    href: "https://www.instagram.com/futbolfemramosmejia/",
    label: "@futbolFemRamos",
  },
  {
    href: "https://www.instagram.com/futbolfempalomar/",
    label: "@futbolFemPalomar",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={44}
              height={44}
              className="rounded-xl"
            />
            <span className="text-lg font-black tracking-tight text-white">
              FutbolFem
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-400">
            Fútbol femenino en la zona oeste del Gran Buenos Aires.
            Entrenamientos, torneos y comunidad.
          </p>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-300">
            Sedes y disciplinas
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {sedes.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-neutral-400 transition hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-300">
            Redes sociales
          </h2>
          <ul className="mt-4 space-y-2">
            {redes.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white"
                >
                  <InstagramIcon fontSize="small" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Volver arriba
            <ArrowUpwardIcon fontSize="small" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} FutbolFem. Todos los derechos
            reservados.
          </p>
          <p>Desarrollado por Narev</p>
        </div>
      </div>
    </footer>
  );
}
