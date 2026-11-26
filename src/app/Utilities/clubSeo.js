import data from "../Data/data.json";

const SITE_URL = "https://futbol-fem.vercel.app";

const RUTA_POR_SEDE = {
  "Futbol Fem Haedo": "/futbolfemhaedo",
  "Futbol Fem Ituzaingó": "/futbolfemituza",
  "Futbol Fem Palomar": "/futbolfempalomar",
  "Futbol Fem Ramos Mejía": "/futbolfemramos",
};

const INSTAGRAM_POR_SEDE = {
  "Futbol Fem Haedo": "https://www.instagram.com/futbolfemhaedo/",
  "Futbol Fem Ituzaingó": "https://www.instagram.com/futbolfemituzaingo/",
  "Futbol Fem Palomar": "https://www.instagram.com/futbolfempalomar/",
  "Futbol Fem Ramos Mejía": "https://www.instagram.com/futbolfemramosmejia/",
};

const DIAS_SCHEMA = {
  lunes: "Monday",
  martes: "Tuesday",
  miercoles: "Wednesday",
  jueves: "Thursday",
  viernes: "Friday",
  sabado: "Saturday",
  domingo: "Sunday",
};

export const findClub = (clubName) =>
  data.find((club) => club.club === clubName);

export const rutaDeSede = (clubName) => RUTA_POR_SEDE[clubName] ?? "/";

const localidadDe = (club) => club.club.replace("Futbol Fem ", "");

const normalizarDia = (dia) =>
  dia
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const parsearHorario = (horario) => {
  const match =
    /(\d{1,2}:\d{2})\s*(?:hs|hrs|h)?\s*[-\u2013]\s*(\d{1,2}:\d{2})/i.exec(
      horario ?? ""
    );
  return match ? { opens: match[1], closes: match[2] } : null;
};

const horariosSchema = (club) =>
  club.dias_y_horarios.flatMap(
    ({ dia, horario, horario_juveniles, horario_adultas }) => {
      const dayOfWeek = DIAS_SCHEMA[normalizarDia(dia)];
      if (!dayOfWeek) return [];

      const turnos = [horario_juveniles, horario_adultas].filter(Boolean);
      const textos = turnos.length > 0 ? turnos : [horario];

      return textos
        .map(parsearHorario)
        .filter(Boolean)
        .map(({ opens, closes }) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek,
          opens,
          closes,
        }));
    }
  );

export const getClubMetadata = (clubName) => {
  const club = findClub(clubName);
  if (!club) return {};

  const localidad = localidadDe(club);
  const pathname = rutaDeSede(club.club);
  const title = `Escuela de Fútbol Femenino en ${localidad} | FutbolFem`;
  const description = `Entrenamientos de fútbol femenino en ${localidad}: ${club.ubicacion.nombre}, ${club.ubicacion.direccion}. Conocé categorías para todas las edades, días y horarios.`;
  const imagenUrl = `${SITE_URL}${club.imagen}`;

  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName: "FutbolFem",
      locale: "es_AR",
      type: "website",
      images: [
        { url: imagenUrl, alt: `Escudo de FutbolFem ${localidad}` },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [imagenUrl],
    },
  };
};

export const buildClubJsonLd = (club, pathname) => {
  if (!club) return null;

  const localidad = localidadDe(club);
  const instagram = INSTAGRAM_POR_SEDE[club.club];
  const openingHoursSpecification = horariosSchema(club);

  return {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: club.club,
    sport: "Fútbol",
    url: `${SITE_URL}${pathname}`,
    logo: `${SITE_URL}${club.imagen}`,
    image: `${SITE_URL}${club.imagen}`,
    parentOrganization: {
      "@type": "Organization",
      name: "FutbolFem",
      url: SITE_URL,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: club.ubicacion.direccion,
      addressLocality: localidad,
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    ...(openingHoursSpecification.length > 0
      ? { openingHoursSpecification }
      : {}),
    ...(instagram ? { sameAs: [instagram] } : {}),
  };
};
