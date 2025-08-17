'use client'

import { motion } from "framer-motion"
import {Bebas_Neue, Roboto} from 'next/font/google'

const bebas = Bebas_Neue ({ subsets: ['latin'], weight:'400'});
const roboto = Roboto ( { subsets: ['latin'], weight: ['400', '700'] } )

export default function Slogan(){
    const palabras = ["Entrenar", "Aprender", "Divertirse" ];

    return(
        <section className="flex flex-col items-center justify-center text-center my-3 md:my-8 space-y-4 px-5 py-3 bg-gradient-to-b from-gray-300/20 to-gray-400 rounded-2xl ">
            <div className={`${bebas.className} text-white text-3xl md:text-6xl flex gap-3 md:gap-8`}>
                {palabras.map((palabra,i) =>(
                    <motion.span
                    key={i}
                    initial= {{ opacity:0 , y:20 }}
                    animate= {{ opacity:1, y:0 }}
                    transition= {{ duration:0.6, delay:i *0.4}}
                    whileHover={{ scale:1.1,  color:'#f472b6'}}
                    className= 'inline-block'
                    >
                        {palabra}
                    </motion.span>
                ))}
            </div>
            <motion.p
            className= {`${roboto.className} text-pink-200/80 text-xl md:text-3xl leading-relaxed `}
            initial= {{ opacity:0 }}
            animate= {{ opacity:1 }}
            transition= {{ duration:1, delay: palabras.length * 0.4 }}
            >
                Esa es la propuesta
            </motion.p>
        </section>
    )
}