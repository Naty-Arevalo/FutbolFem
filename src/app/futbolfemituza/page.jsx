"use client";
import Image from "next/image";
import { useState } from "react";

export default function Ituzaingo() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="flex flex-col gap-4 items-center p-2">
      <div >
        <Image
          src="/Escudo_Ituza_transparencia.png"
          alt="escudo palomar"
          width={200}
          height={200}
          className="shadow-custom m-3"
        />
      </div>
      <div>
        <h1 className="text-green-700 text-3xl">Futbol Fem Ituzaingó</h1>
        <p className="text-white ">Estamos en: Ventura Alegre 1097 </p>
        <button
          onClick={() => setShowMap(!showMap)}
          className="bg-green-400 p-2 rounded-md text-xs"
        >
          {showMap ? "Ocultar Mapa" : "Ver Mapa"}
        </button>
        <p className="text-white  my-3">
          Días: <br /> Lunes y Miercoles de 20 a 21hs{" "}
        </p>
        {showMap && (
          <div className="w-full max-w-lg h-64 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.349410237606!2d-58.664207854749!3d-34.67112989931032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc1443be0a139%3A0xce2b5054d1cb9a07!2sCnel.%20Ventura%20Alegre%201097%2C%20B1714PKU%20Ituzaing%C3%B3%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1741128479445!5m2!1ses-419!2sar"
              width="300"
              height="250"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
