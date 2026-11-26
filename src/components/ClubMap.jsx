import Link from "next/link";
import PlaceIcon from "@mui/icons-material/Place";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function ClubMap({ club, localidad }) {
  const destino = `${club.ubicacion.nombre}, ${club.ubicacion.direccion}, ${localidad}, Buenos Aires, Argentina`;
  const query = encodeURIComponent(destino);

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
      <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
        <iframe
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          title={`Mapa de ${club.ubicacion.nombre}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <div className="flex flex-col gap-3 border-t border-white/10 bg-black/30 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm text-neutral-300">
          <PlaceIcon fontSize="small" className="shrink-0 text-sky-400" />
          <span>
            <strong className="font-semibold text-white">
              {club.ubicacion.nombre}
            </strong>{" "}
            · {club.ubicacion.direccion}, {localidad}
          </span>
        </p>
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Cómo llegar
          <OpenInNewIcon fontSize="small" />
        </Link>
      </div>
    </div>
  );
}
