import { Instagram } from '@mui/icons-material'
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Link from 'next/link'
import React from 'react'

const Contacto = () => {
  return (<>
    <h1 className="font-bold text-3xl">Contactanos</h1>
        <p >
          Para más información sobre nuestras clases, horarios y ubicaciones, no
          dudes en contactarnos. <br />
          Seguinos en nuestras redes sociales para estar al tanto de todas las
          novedades y eventos
        </p>
        <div className="flex flex-row justify-around items-end gap-4">
          <div className="flex flex-column gap-2 ">
            <Link
              href={"https://www.instagram.com/futbolfem2025/"}
              target="blank"
              className="no-underline flex gap-2 p-2 text-gray-400"
              
            >
              {" "}
              <span>
                <Instagram />
              </span>{" "}
              @FutbolFem
            </Link>
            <Link
              href={"https://www.instagram.com/futbolfemhaedo/"}
              target="blank"
              className="no-underline  flex gap-2 p-2 text-gray-400"
            >
              {" "}
              <span>
                <Instagram />
              </span>{" "}
              FutbolFem-Haedo
            </Link>
            <Link
              href={"https://www.instagram.com/futbolfemituzaingo/"}
              target="blank"
              className="no-underline  flex gap-2 p-2 text-gray-400"
            >
              <span>
                <Instagram />
              </span>{" "}
              FutbolFem-Ituzaingo
            </Link>
            <Link
              href={"https://www.instagram.com/futbolfemramosmejia/"}
              target="blank"
              className="no-underline  flex gap-2 p-2 text-gray-400"
            >
              {" "}
              <span>
                <Instagram />
              </span>
              FutbolFem- Ramos
            </Link>
            <Link
              href={"https://www.instagram.com/futbolfempalomar/"}
              target="blank"
              className="no-underline  flex gap-2 p-2 text-gray-400"
            >
              {" "}
              <span>
                <Instagram />
              </span>{" "}
              FutbolFem-Palomar
            </Link>
          </div>
          <div>
            <ArrowCircleUpIcon
              className="text-5xl"
              // OnClick={()=> window.scrollTo({top:0, behavior:"smooth"})}
              //ACTIVARLO CUANDO LO PASE A UN COMPONENTE. DENTRO DEL APP NO SE PUEDE PASAR A CLIENT COMPONENT
            />
            <p>subir</p>
          </div>
        </div>
        </>)
}

export default Contacto