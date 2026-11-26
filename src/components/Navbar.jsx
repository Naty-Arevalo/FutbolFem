"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import "./navbar.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const enlaces = [
  { etiqueta: "Inicio", href: "/" },
  { etiqueta: "Quiénes somos", href: "/#quienes-somos" },
  {
    etiqueta: "Sedes",
    items: [
      { etiqueta: "Haedo", href: "/futbolfemhaedo" },
      { etiqueta: "Ituzaingó", href: "/futbolfemituza" },
      { etiqueta: "Palomar", href: "/futbolfempalomar" },
      { etiqueta: "Ramos Mejía", href: "/futbolfemramos" },
    ],
  },
  {
    etiqueta: "Disciplinas",
    items: [
      { etiqueta: "Fútbol 7", href: "/futbol7" },
      { etiqueta: "Futsal", href: "/futsal" },
    ],
  },
  { etiqueta: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [grupoAbierto, setGrupoAbierto] = useState(null);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setMenuAbierto(false);
        setGrupoAbierto(null);
      }
    };

    const cerrarAlClickearFuera = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuAbierto(false);
        setGrupoAbierto(null);
      }
    };

    document.addEventListener("keydown", cerrarConEscape);
    document.addEventListener("mousedown", cerrarAlClickearFuera);
    return () => {
      document.removeEventListener("keydown", cerrarConEscape);
      document.removeEventListener("mousedown", cerrarAlClickearFuera);
    };
  }, []);

  const esActivo = (href) =>
    !href.includes("#") &&
    (pathname === href || pathname.startsWith(`${href}/`));

  const grupoActivo = (items) => items.some(({ href }) => esActivo(href));

  const claseEnlace = (activo) =>
    `rounded-lg px-3 py-2 text-lg transition md:text-base lg:text-lg ${
      activo
        ? "bg-white/10 font-bold text-white"
        : "text-neutral-400 hover:text-white"
    }`;

  const cerrarTodo = () => {
    setMenuAbierto(false);
    setGrupoAbierto(null);
  };

  const alternarGrupo = (etiqueta) =>
    setGrupoAbierto((actual) => (actual === etiqueta ? null : etiqueta));

  const idGrupo = (etiqueta, zona) =>
    `grupo-${etiqueta.toLowerCase()}-${zona}`;

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-neutral-950 p-2 text-white shadow-lg shadow-black/40"
    >
      <div className="relative flex w-full items-center justify-between px-2 md:px-4">
        <Link href="/" onClick={cerrarTodo} aria-label="Ir al inicio">
          <Image
            src="/favicon.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Logo"
            className="h-auto w-14 transition-transform duration-300 hover:scale-110 md:w-16 lg:w-20"
          />
        </Link>

        <button
          type="button"
          className="flex items-center justify-center rounded-md border-2 border-white px-2 py-1 md:hidden"
          onClick={() => setMenuAbierto((actual) => !actual)}
          aria-expanded={menuAbierto}
          aria-controls="menu-navegacion"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        >
          {menuAbierto ? (
            <CloseIcon fontSize="large" />
          ) : (
            <DehazeIcon fontSize="large" />
          )}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {enlaces.map((enlace) =>
            enlace.items ? (
              <li key={enlace.etiqueta} className="relative">
                <button
                  type="button"
                  onClick={() => alternarGrupo(enlace.etiqueta)}
                  aria-expanded={grupoAbierto === enlace.etiqueta}
                  aria-haspopup="true"
                  aria-controls={idGrupo(enlace.etiqueta, "desktop")}
                  className={`${claseEnlace(
                    grupoActivo(enlace.items) || grupoAbierto === enlace.etiqueta
                  )} inline-flex items-center gap-1`}
                >
                  {enlace.etiqueta}
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className={`transition-transform ${
                      grupoAbierto === enlace.etiqueta ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {grupoAbierto === enlace.etiqueta && (
                  <ul
                    id={idGrupo(enlace.etiqueta, "desktop")}
                    className="absolute left-0 top-full z-50 mt-2 w-56 rounded-2xl border border-white/10 bg-neutral-900/95 p-2 shadow-2xl backdrop-blur"
                  >
                    {enlace.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={cerrarTodo}
                          className={`block rounded-xl px-4 py-2 text-sm transition ${
                            esActivo(item.href)
                              ? "bg-white/10 font-bold text-white"
                              : "text-neutral-400 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {item.etiqueta}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={enlace.etiqueta}>
                <Link
                  href={enlace.href}
                  onClick={cerrarTodo}
                  className={claseEnlace(esActivo(enlace.href))}
                >
                  {enlace.etiqueta}
                </Link>
              </li>
            )
          )}
        </ul>

        <div
          id="menu-navegacion"
          className={`${
            menuAbierto ? "block" : "hidden"
          } absolute left-0 top-full max-h-[calc(100dvh-5rem)] w-full overflow-y-auto border-t border-white/10 bg-neutral-950 p-4 shadow-2xl md:hidden`}
        >
          <ul className="space-y-1">
            {enlaces.map((enlace) =>
              enlace.items ? (
                <li key={enlace.etiqueta}>
                  <button
                    type="button"
                    onClick={() => alternarGrupo(enlace.etiqueta)}
                    aria-expanded={grupoAbierto === enlace.etiqueta}
                    aria-controls={idGrupo(enlace.etiqueta, "movil")}
                    className={`${claseEnlace(
                      grupoActivo(enlace.items) || grupoAbierto === enlace.etiqueta
                    )} flex w-full items-center justify-between text-left`}
                  >
                    {enlace.etiqueta}
                    <KeyboardArrowDownIcon
                      fontSize="small"
                      className={`transition-transform ${
                        grupoAbierto === enlace.etiqueta ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {grupoAbierto === enlace.etiqueta && (
                    <ul
                      id={idGrupo(enlace.etiqueta, "movil")}
                      className="ml-4 mt-1 space-y-1 rounded-xl border-l border-white/10 bg-white/5 p-2 pl-3"
                    >
                      {enlace.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={cerrarTodo}
                            className={`block rounded-lg px-3 py-2 text-base transition ${
                              esActivo(item.href)
                                ? "bg-white/10 font-bold text-white"
                                : "text-neutral-400 hover:text-white"
                            }`}
                          >
                            {item.etiqueta}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={enlace.etiqueta}>
                  <Link
                    href={enlace.href}
                    onClick={cerrarTodo}
                    className={`${claseEnlace(
                      esActivo(enlace.href)
                    )} block`}
                  >
                    {enlace.etiqueta}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
