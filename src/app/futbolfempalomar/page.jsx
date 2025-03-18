import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-row justify-center gap-10 items-center bg-black'>
      <div>
        <Image src="/Escudo_Palomar_transparencia.png" alt="escudo palomar" width={200} height={200}
        style={{filter: "drop-shadow(-10px 4px 10px  rgb(217, 159, 104)"}} />
      </div>
      <div>
        <h1 className='text-orange-400 '>Futbol Fem Palomar</h1>
        <h2 className='text-orange-200'>✔️ +17- Adultas</h2>
        <p className='text-white text-3xl'>Estamos en: La Estación Futbol <br />Frente a la Estación de El Palomar</p>
        <p className='text-white'>Días: <br /> Miercoles de 18 a 19hs <br />Viernes de 19 a 20hs</p>
      </div>
    </div>
  )
}

export default page

// rgb(247, 141, 42)
