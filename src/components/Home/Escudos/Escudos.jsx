import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Escudos = () => {

  const shields = [
    {link: "./futbolfemhaedo", img:"/Escudo_Haedo_transparencia.png", alt: "escudo haedo" },
    {link: "./futbolfemituza", img:"/Escudo_Ituza_transparencia.png", alt: "escudo ituza" },
    {link: "./futbolfempalomar", img:"/Escudo_Palomar_transparencia.png", alt: "escudo palomar" },
    {link: "./futbolfemramos", img:"/Escudo_Ramos_transparencia.png", alt: "escudo ramos" },
  ]
  return (<>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-4 place-items-center mx-4 md:my-6'>
      {shields.map((shield, i)=>(
        
          <Link 
          key={i}
          href={shield.link}  
          className='relative w-full max-w-[300px] aspect-square  rounded-3xl overflow-hidden' 
          >
            <Image
              src={shield.img}
              fill
              alt={shield.alt}
              sizes='(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw'
              className="object-contain p-1 transition delay-200 duration-300 ease-in hover:-translate-y-1 hover:scale-110"
            style={{filter: "drop-shadow(0px 4px 12px rgba(255, 255, 255, 0.85"}}
            />
          </Link>
        
      ))}
    </div>
  </>)
}

export default Escudos