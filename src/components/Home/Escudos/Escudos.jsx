import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Escudos = () => {
  return (<>
    <div>
          <Link href="./futbolfemhaedo">
            <Image
              src="/Escudo_Haedo_transparencia.png"
              width={200}
              height={200}
              alt="escudo haedo"
              className="shadow-custom rounded-3xl"
              // style={{filter: "drop-shadow(36px 7px 100px rgba(43, 199, 105, 0.75)"}}
            />
          </Link>
        </div>
        <div>
          <Link href="./futbolfemituza">
            <Image
              src="/Escudo_Ituza_transparencia.png"
              width={200}
              height={200}
              alt="escudo ituza"
              className="shadow-custom rounded-3xl"
            />
          </Link>
        </div>
        <div>
          <Link href="./futbolfempalomar">
            <Image
              src="/Escudo_Palomar_transparencia.png"
              width={200}
              height={200}
              alt="escudo palomar"
              className="escudo-haedo shadow-custom rounded-3xl"
            />
          </Link>
        </div>
        <div>
          <Link href="./futbolfemramos">
            <Image
              src="/Escudo_Ramos_transparencia.png"
              width={200}
              height={200}
              alt="escudo ramos"
              className="escudo-haedo shadow-custom rounded-3xl"
            />
          </Link>
        </div>
        {/* <div>
          <Link href="./futbol7">
            <Image
              src="/Escudo_F7_transparencia.png"
              width={150}
              height={150}
              alt="escudo 7"
              className="escudo-haedo shadow-custom rounded-3xl"
            />
          </Link>
        </div> */}
  </>)
}

export default Escudos