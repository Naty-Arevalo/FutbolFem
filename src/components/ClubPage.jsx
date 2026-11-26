import data from "@/app/Data/data.json";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import clubStyles from "@/app/Utilities/clubStyles";
import { buildClubJsonLd, rutaDeSede } from "@/app/Utilities/clubSeo";
import ClubGallery from "@/components/ClubGallery";
import ClubMap from "@/components/ClubMap";

const ClubPage = ({ clubName }) => {
  const club = data.find((item) => item.club === clubName);

  if (!club) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center text-neutral-300">
        No encontramos la sede solicitada.
      </div>
    );
  }

  const styles = clubStyles(clubName);
  const jsonLd = buildClubJsonLd(club, rutaDeSede(clubName));
  const localidad = clubName.replace("Futbol Fem ", "");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <section
          className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.04] to-transparent p-6 shadow-2xl sm:p-8 lg:p-10 ${styles.glow}`}
        >
          <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:gap-10">
            <div className="flex shrink-0 justify-center md:justify-start">
              <div className="rounded-full border border-white/10 bg-black/30 p-3">
                <Image
                  src={club.imagen}
                  alt={`Escudo de ${club.club}`}
                  width={150}
                  height={150}
                  priority
                  style={{ filter: styles.shadow }}
                  className="size-28 object-contain sm:size-36 lg:size-40"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${styles.chip}`}
              >
                Sede {localidad}
              </span>
              <h1
                className={`mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${styles.tituloColor}`}
              >
                {club.club}
              </h1>
              <p className="mt-4 flex items-start gap-2 text-lg text-neutral-200 sm:text-xl">
                <LocationOnIcon
                  className={`mt-1 shrink-0 ${styles.iconColor}`}
                />
                <span>
                  <strong className="font-semibold text-white">
                    {club.ubicacion.nombre}
                  </strong>
                  <span className="block text-base text-neutral-400 sm:text-lg">
                    {club.ubicacion.direccion}, {localidad}
                  </span>
                </span>
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {club.categorias.map((categoria) => (
                  <span
                    key={categoria.nombre}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 sm:text-sm"
                  >
                    {categoria.nombre} · {categoria.edades}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="mt-6 grid gap-6 lg:grid-cols-2"
          aria-label="Información de la sede"
        >
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
              <CalendarMonthIcon className={styles.iconColor} />
              Días y horarios
            </h2>
            <ul className="mt-5 space-y-3">
              {club.dias_y_horarios.map((horario, index) => (
                <li
                  key={`${horario.dia}-${index}`}
                  className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-black/25 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span
                    className={`text-sm font-bold uppercase tracking-wider sm:text-base ${styles.accent}`}
                  >
                    {horario.dia}
                  </span>
                  <span className="text-sm text-neutral-300 sm:text-right sm:text-base">
                    {horario.horario_juveniles && horario.horario_adultas ? (
                      <>
                        <span className="block">
                          {horario.horario_juveniles}{" "}
                          <span className="text-neutral-500">
                            Infanto-Juvenil
                          </span>
                        </span>
                        <span className="block">
                          {horario.horario_adultas}{" "}
                          <span className="text-neutral-500">Adultas</span>
                        </span>
                      </>
                    ) : (
                      <span className="block">{horario.horario} hs</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
              <ContentPasteIcon className={styles.iconColor} />
              Categorías
            </h2>
            <ul className="mt-5 space-y-3">
              {club.categorias.map((categoria) => (
                <li
                  key={categoria.nombre}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-black/25 px-4 py-3"
                >
                  <span className="text-base font-medium text-neutral-100 sm:text-lg">
                    {categoria.nombre}
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold sm:text-sm ${styles.chip}`}
                  >
                    {categoria.edades}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {club.ver_mapa && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Cómo llegar
            </h2>
            <p className="mt-2 text-neutral-400">
              Encontranos en {club.ubicacion.nombre},{" "}
              {club.ubicacion.direccion}, {localidad}.
            </p>
            <div className="mt-5">
              <ClubMap club={club} localidad={localidad} />
            </div>
          </section>
        )}

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Galería de fotos
          </h2>
          <p className="mt-2 text-neutral-400">
            Un vistazo a los entrenamientos y partidos de {localidad}.
          </p>
          <div className="mt-5">
            <ClubGallery
              images={club.galeriaImagenes}
              clubName={clubName}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ClubPage;
