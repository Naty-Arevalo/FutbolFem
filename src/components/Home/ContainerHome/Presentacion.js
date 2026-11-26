import Image from "next/image";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ExtensionIcon from "@mui/icons-material/Extension";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const aprendizajes = [
  {
    title: "Táctica",
    description:
      "Posicionamiento en la cancha, estrategias de juego y toma de decisiones en equipo.",
    Icon: ExtensionIcon,
  },
  {
    title: "Técnica individual",
    description:
      "Pases, recepción, conducción, remates y control del balón.",
    Icon: SportsSoccerIcon,
  },
  {
    title: "Conceptos ofensivos y defensivos",
    description:
      "Ataque, defensa, desmarque, toma de decisiones y finalización de jugada.",
    Icon: SwapHorizIcon,
  },
  {
    title: "Preparación física y mental",
    description:
      "Ejercicios para mejorar la resistencia, la velocidad y la concentración.",
    Icon: FitnessCenterIcon,
  },
];

const beneficios = [
  "Confianza en una misma",
  "Trabajo en equipo",
  "Disciplina y compromiso",
];

const Presentacion = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
          Quiénes somos
        </span>
        <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
          Bienvenidas a nuestra comunidad de fútbol femenino
        </h2>
        <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">
          En nuestra escuela ofrecemos un espacio de aprendizaje, crecimiento y
          disfrute para todas las que quieran mejorar su juego y formar parte
          de una comunidad apasionada por el deporte. Creemos en el potencial
          de cada jugadora y en la importancia del trabajo en equipo.
        </p>
      </header>

      <figure className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
        <div className="relative aspect-video w-full">
          <Image
            src="/presentacion-de-4-sedes.jpeg"
            alt="Integrantes de las cuatro sedes de FutbolFem"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
            className="object-cover"
          />
        </div>
        <figcaption className="border-t border-white/10 px-5 py-3 text-sm text-neutral-400">
          Las cuatro sedes de FutbolFem en la zona oeste.
        </figcaption>
      </figure>

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Qué aprenderás
        </h2>
        <p className="mt-2 text-neutral-400">
          Cada entrenamiento combina juego, técnica y desarrollo personal.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {aprendizajes.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-400/40 hover:bg-white/[0.07] sm:p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-sky-400/20 bg-sky-500/5 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Cómo te ayuda
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-300">
          Nuestros entrenamientos te permiten desarrollar habilidades que van
          más allá del campo de juego: mejorás tu desempeño físico y técnico,
          ganás confianza, aprendés a trabajar en equipo y a sostener una
          disciplina que se traslada a todos los aspectos de tu vida.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {beneficios.map((beneficio) => (
            <li
              key={beneficio}
              className="rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200"
            >
              {beneficio}
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default Presentacion;
