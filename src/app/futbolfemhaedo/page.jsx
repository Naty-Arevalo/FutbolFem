import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-row justify-around gap-10 items-center p-4 '>
          <div>
            <Image src="/Escudo_Haedo_transparencia.png" alt="escudo Haedo" width={200} height={200}
            style={{filter: "drop-shadow(-10px 4px 10px  rgb(203, 49, 49)"}} />
          </div>
          <div>
            <h1 className='text-red-400 '>Futbol Fem Haedo</h1>           
            <p className='text-white text-3xl'>Estamos en: La Roma <br />
            <span >
              <ArrowOutwardIcon className='text-red-400 text-6xl'/>
            </span> 
            Av.Rivadavia 16936</p>
            <p className='text-white text-3xl'> 
              <span>
              <CalendarMonthIcon className='text-red-500 text-5xl '/>
              </span>
            Días: <br /> Miercoles de 18 a 19hs <br />Viernes de 19 a 20hs
            </p>
          </div>
          <div className='text-white'>
            <h2>✔️Infantil-Juveniles</h2>
            <ul>
                <li>Iniciacion al deporte: 3 a 6 años</li>
                <li>futbol infantil: 7 a 12 años</li>
                <li>futbol Juveniles:13 a 17 años</li>
            </ul>
            <h2>✔️ +17 / Adultas</h2>
          </div>
        </div>
  )
}

export default page

{/* <h2 className='text-red-200'>✔️ +17- Adultas</h2> */}