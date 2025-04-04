import "./page.css";
import Presentacion from "@/components/Home/ContainerHome/Presentacion";
import Escudos from "@/components/Home/Escudos/Escudos";
import Contacto from "@/components/Home/Contacto/Contacto";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-between items-center p-2 m-4">
        <p className="text-white text-3xl text-center">
          Entrenar, Aprender y Divertirse.
          <br />
          Esa es la Propuesta
        </p>
      </section>

      <section className="escudos flex justify-center items-center gap-2 p-2 border-y-2 w-1/2 mx-auto border-white">
        <Escudos/>
      </section>

      <section className="text-center p-4">
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
