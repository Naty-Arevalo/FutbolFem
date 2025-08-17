import "./page.css";
import Presentacion from "@/components/Home/ContainerHome/Presentacion";
import Escudos from "@/components/Home/Escudos/Escudos";
import Contacto from "@/components/Home/Contacto/Contacto";
import Slogan from "./Utilities/Slogan";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center p-2 my-10">
        {/* <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl text-center tracking-wide font-extrabold">
          Entrenar. Aprender. Divertirse.
        </h2>
          <p className="text-gray-300 text-lg md:text-xl text-center mt-2 italic">Esa es la Propuesta</p> */}
          <Slogan/>
        
      </section>

        <Escudos/>


      <section id="quienes-somos">
        <Presentacion/>
      </section>

      <section
        className=" text-white py-4  border-t-2 w-3/4 mx-auto border-white md:text-center "
        id="contacto"
      >
        <Contacto/>
      </section>
    </>
  );
}
