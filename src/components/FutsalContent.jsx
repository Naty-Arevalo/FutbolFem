"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ScheduleIcon from "@mui/icons-material/Schedule";

export default function FutsalContent() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-white/[0.04] to-transparent p-6 shadow-2xl shadow-violet-900/20 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-violet-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:gap-10">
          <div className="flex shrink-0 justify-center md:justify-start">
            <div className="rounded-full border border-white/10 bg-black/30 p-3">
              <Image
                src="/futsal-transparente.png"
                alt="Escudo de Futsal"
                width={150}
                height={150}
                priority
                className="size-28 object-contain sm:size-36 lg:size-40"
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-200 ring-1 ring-violet-400/30"
            >
              <ScheduleIcon fontSize="small" />
              Próximamente
            </motion.span>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-violet-300 sm:text-5xl lg:text-6xl">
              Futsal
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
              Fútbol rápido en cancha reducida: más contacto con la pelota,
              pases cortos y decisiones en segundos. Estamos preparando esta
              disciplina para sumarla a la escuela.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 sm:text-sm">
                5 jugadoras por equipo
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 sm:text-sm">
                Categorías a definir
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Qué vas a encontrar
          </h2>
          <ul className="mt-5 space-y-3">
            {[
              "Partidos dinámicos y mucha participación",
              "Trabajo de técnica y pases en espacios reducidos",
              "Un grupo nuevo dentro de la comunidad FutbolFem",
            ].map((texto) => (
              <li
                key={texto}
                className="rounded-2xl border border-white/5 bg-black/25 px-4 py-3 text-neutral-200"
              >
                {texto}
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5491155618465?text=Quiero%20informaci%C3%B3n%20sobre%20Futsal"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
          >
            <WhatsAppIcon fontSize="small" />
            Te avisamos cuando arranque
          </a>
        </article>

        <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="relative aspect-square w-full">
            <Image
              src="/Futsal.jpg"
              alt="Futsal femenino"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </article>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Mientras tanto
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-neutral-300">
          Ya podés sumarte a nuestras sedes de fútbol y fútbol 7. Mirá dónde
          entrenamos y elegí la que esté más cerca tuya.
        </p>
        <Link
          href="/#sedes"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Ver las sedes
        </Link>
      </section>
    </div>
  );
}
