import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-around items-center bg-black'>
          <div>
            <Image src="/Escudo_Ramos_transparencia.png" alt="escudo palomar" width={200} height={200} className='shadow-custom m-3'/>
          </div>
          <div className='mb-5'>
            <h1 className='text-purple-700'>Futbol Fem Ramos Mejía</h1>
            <p className='text-white'>Estamos en: Container FC <br />Necochea 955</p>
            <p className='text-white'>Días: <br /> Martes y Viernes de 18 a 19hs </p>
          </div>
        </div>
  )
}

export default page