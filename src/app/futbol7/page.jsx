// "use client";

import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const page =()=> {
//   const texto = "Próximamente";

//   // Variants para animación secuencial
//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1, // delay entre letras
//       },
//     },
//   };

//   const letra = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
//   };

//   return (
//     <section className="flex flex-col items-center mt-6 space-y-8">
//       {/* Texto animado */}
//       <motion.h1
//         className="text-blue-500 text-4xl md:text-7xl font-extrabold flex space-x-1"
//         variants={container}
//         initial="hidden"
//         animate="visible"
//       >
//         {texto.split("").map((char, index) => (
//           <motion.span key={index} variants={letra}>
//             {char}
//           </motion.span>
//         ))}
//       </motion.h1>

//       {/* Escudo que aparece después */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: texto.length * 0.1 + 0.5, duration: 0.6 }}
//       >
//         <Image
//           src="/Escudo_f7_transparencia.png"
//           alt="Escudo"
//           width={200}
//           height={200}
//           className="rounded-full shadow-lg"
//         />
//       </motion.div>
//     </section>

//   );
// }

// export default page

const page = () => {
  return (
    <div className="p-2">
      <div className="p-2 m-1">
        <h1 className="text-blue-700 text-3xl lg:text-4xl xl:text-blue-300 xl:text-5xl font-bold text-center p-2 mb-5">
          Fútbol 7
        </h1>
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mt-6 gap-8">
          <div className="xl:w1/2">
            <p className="text-gray-200/60 text-xl text-left mt-3 md:text-left md:px-5 xl:text-center xl:max-w-3xl xl:mx-auto">
              Se caracteriza por ser un juego rápido, dinámico y participativo,
              donde la técnica, el ritmo y el trabajo en equipo son
              fundamentales. Es ideal tanto para entrenamiento como para
              competencia, permitiendo un alto contacto con la pelota y partidos
              intensos y entretenidos.
            </p>
            <div className="flex justify-center mt-5 gap-4 p-2">
              <div>
                <Image
                  src="/Escudo_f7_transparencia.png"
                  alt="Escudo"
                  width={100}
                  height={100}
                  className="rounded-full shadow-lg md:w-48"
                />
              </div>

              <div className="flex flex-col justify-center gap-3 md:gap-5 ">
                <div className="flex gap-2 items-center">
                  <div>
                    <span className="text-blue-500">
                      <LocationOnIcon className="md:size-12" />
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-200 text-xl md:text-2xl">
                      Arena Sport - V.Luzuriaga
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <div>
                    <span className="text-blue-500">
                      <CalendarMonthIcon className="md:size-12" />
                    </span>
                  </div>

                  <div>
                    <p className="text-gray-100 text-xl md:text-2xl">
                      Sabados 11Hs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2 flex w-full relative h-[300px] md:h-[400px] xl:h-[500px]">
            <Image
              src="/futbol7page.jpeg"
              alt="futbol7page"
              fill
              sizes="(max-width:1280px) 100vw, 50vw"
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default page;
