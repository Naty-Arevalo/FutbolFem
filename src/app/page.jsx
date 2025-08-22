import "./page.css";
import Presentacion from "@/components/Home/ContainerHome/Presentacion";
import Escudos from "@/components/Home/Escudos/Escudos";
import Contacto from "@/components/Home/Contacto/Contacto";
import Slogan from "./Utilities/Slogan";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center p-2 my-10">
          <Slogan/>
        
      </section>

        <Escudos/>


      <section id="quienes-somos">
        <Presentacion/>
      </section>

      <section
        className="py-4  border-t-2 w-3/4 mx-auto border-white md:text-center "
        id="contacto"
      >
        <Contacto/>
      </section>
    </>
  );
}
