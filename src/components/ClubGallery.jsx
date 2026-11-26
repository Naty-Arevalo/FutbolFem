"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ClubGallery({ images, clubName }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, showPrevious, showNext]);

  if (!images?.length) return null;

  const ultimaAncha = (images.length - 1) % 2 !== 0;

  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-2 auto-rows-[110px] gap-3 sm:auto-rows-[140px] md:grid-cols-4 lg:auto-rows-[170px]">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ver foto ${index + 1} de ${images.length} de ${clubName}`}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
              index === 0
                ? "col-span-2 row-span-2"
                : ultimaAncha && index === images.length - 1
                  ? "md:col-span-2"
                  : ""
            }`}
          >
            <Image
              src={image}
              alt={`Foto ${index + 1} de ${clubName}`}
              fill
              sizes={
                index === 0
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              }
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-900 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <ZoomInIcon fontSize="small" />
            </span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de fotos de ${clubName}`}
          onClick={close}
        >
          <div
            className="flex items-center justify-between px-4 py-4 sm:px-8"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-sm font-semibold tracking-widest text-neutral-300">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Cerrar galería"
              className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <CloseIcon />
            </button>
          </div>

          <div
            className="relative min-h-0 w-full flex-1"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`Foto ${activeIndex + 1} de ${clubName}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Foto anterior"
                  className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:size-14"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Foto siguiente"
                  className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:size-14"
                >
                  <ChevronRightIcon />
                </button>
              </>
            )}
          </div>

          <p
            className="px-4 py-4 text-center text-xs text-neutral-500"
            onClick={(event) => event.stopPropagation()}
          >
            Usá las flechas del teclado para navegar · Esc para cerrar
          </p>
        </div>
      )}
    </>
  );
}
