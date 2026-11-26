import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Banner() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-gradient-to-br from-sky-500/20 via-neutral-950 to-neutral-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute -right-24 -top-32 size-80 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 size-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-20 lg:gap-24">
        <div className="flex items-center justify-center gap-4 sm:gap-5 md:order-2">
          <Image
            src="/favicon.png"
            alt="Escudo de Futbol Fem"
            width={144}
            height={144}
            priority
            className="size-20 shrink-0 object-contain drop-shadow-lg sm:size-28 lg:size-36"
          />
          <span className="text-2xl font-black uppercase leading-none tracking-[0.2em] text-white sm:text-4xl lg:text-5xl">
            Futbol Fem
          </span>
        </div>

        <div className="md:order-1">
          <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
            Escuelas deportivas · Zona oeste
          </span>
          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Futbol <span className="text-sky-300">para todas</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
            Un espacio para aprender, jugar y crecer en equipo. Elegí tu sede y
            sumate a la comunidad de fútbol femenino.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://wa.me/5491155618465?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20FutbolFem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              <WhatsAppIcon fontSize="small" />
              Escribinos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
