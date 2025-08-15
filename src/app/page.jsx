import "./page.css";
import Presentacion from "@/components/Home/ContainerHome/Presentacion";
import Escudos from "@/components/Home/Escudos/Escudos";
import Contacto from "@/components/Home/Contacto/Contacto";

export default function Home() {
  return (
    <>
      <section className="items-center p-2 my-5">
        <p className="text-white text-3xl lg:text-4xl xl:text-5xl text-center">
          Entrenar, Aprender y Divertirse.
          <br />
          Esa es la Propuesta
        </p>
      </section>

      <section>
        <Escudos/>
      </section>

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
