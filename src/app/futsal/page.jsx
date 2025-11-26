"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const page =()=> {
  const texto = "Próximamente";

  // Variants para animación secuencial
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // delay entre letras
      },
    },
  };

  const letra = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="flex flex-col items-center mt-6 space-y-8">
      {/* Texto animado */}
      <motion.h1
        className="text-slate-500 text-4xl md:text-7xl font-extrabold flex space-x-1"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {texto.split("").map((char, index) => (
          <motion.span key={index} variants={letra}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Escudo que aparece después */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: texto.length * 0.1 + 0.5, duration: 0.6 }}
      >
        <Image
          src="/futsal-transparente.png" 
          alt="Escudo"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />

      </motion.div>
    </section>

  );
}
export default page