import "./page.css";
import Banner from "@/components/Banner";
import Presentacion from "@/components/Home/ContainerHome/Presentacion";
import Escudos from "@/components/Home/Escudos/Escudos";
import Contacto from "@/components/Home/Contacto/Contacto";

export default function Home() {
  return (
    <>
      <Banner />
      <section id="sedes" className="scroll-mt-24" aria-label="Sedes">
        <Escudos />
      </section>
      <section id="quienes-somos">
        <Presentacion/>
      </section>
      <div id="contacto" className="scroll-mt-24">
        <Contacto />
      </div>
    </>
  );
}
