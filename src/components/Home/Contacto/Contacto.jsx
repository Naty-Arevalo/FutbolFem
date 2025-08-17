'use client'
import { Instagram } from '@mui/icons-material'
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Link from 'next/link'
import React from 'react'

const Contacto = () => {

  const instagramLinks = [
    {url:"https://www.instagram.com/futbolfem2025/", label: "@futbolFem"},
    {url:"https://www.instagram.com/futbolfemhaedo/", label: "@futbolFem-Haedo"},
    {url:"https://www.instagram.com/futbolfemituzaingo/", label: "@futbolFem-Ituzaingo"},
    {url:"https://www.instagram.com/futbolfemramosmejia/", label: "@futbolFem-Ramos"},
    {url:"https://www.instagram.com/futbolfempalomar/", label: "@futbolFem-Palomar"}
  ]


  return (<>
    <h1 className="font-bold text-3xl text-white mb-6 mt-3">Contactanos</h1>
        <p className="text-gray-200/60 text-xl mb-4">
          Para más información sobre nuestras clases, horarios y ubicaciones, no
          dudes en contactarnos. <br />
          Seguinos en nuestras redes sociales para estar al tanto de todas las
          novedades y eventos.
        </p>
        <div className="flex flex-row justify-around items-end gap-4">
          <div className="flex flex-col gap-2 ">
            {instagramLinks.map((link, index)=>(
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="no-underline flex gap-2 p-2 text-gray-400"
              >
                <Instagram />
                {link.label}
              </Link>
           
            ))}
            
          </div>
          <div className='flex flex-col gap-2 hover:scale-110 transition-all duration-300 ease-in-out '>
            <ArrowCircleUpIcon
              className="text-5xl cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            <p>Subir</p>
          </div>
        </div>
        </>)
}

export default Contacto