import Link from "next/link";
import "./page.css";
import Image from "next/image";
import { Instagram } from "@mui/icons-material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-between items-center p-2 m-4">
        {/* <h1 className='text-white text-4xl'>Bienvenidos a Futbol Fem</h1> */}
        <p className="text-white text-3xl text-center">
          Entrenar, Aprender y Divertirse.
          <br />
          Esa es la Propuesta
        </p>
      </section>

      <section className="escudos flex justify-center items-center gap-2 p-2 border-y-2 w-1/2 mx-auto border-white">
        <div>
          <Link href="./futbolfemhaedo">
            <Image
              src="/Escudo_Haedo_transparencia.png"
              width={150}
              height={150}
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
              width={150}
              height={150}
              alt="escudo ituza"
              className="shadow-custom rounded-3xl"
            />
          </Link>
        </div>
        <div>
          <Link href="./futbolfempalomar">
            <Image
              src="/Escudo_Palomar_transparencia.png"
              width={150}
              height={150}
              alt="escudo palomar"
              className="escudo-haedo shadow-custom rounded-3xl"
            />
          </Link>
        </div>
        <div>
          <Link href="./futbolfemramos">
            <Image
              src="/Escudo_Ramos_transparencia.png"
              width={150}
              height={150}
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
      </section>
      <section className="text-center p-4">
        <h2 className="text-white text-3xl p-3">
          Bienvenidas a Nuestra Comunidad de Futbol Femenino!
        </h2>
        <p className="text-white">
          En nuestra escuela de fútbol femenino, ofrecemos un espacio de
          aprendizaje, crecimiento y disfrute para todas aquellas que deseen
          mejorar su juego y formar parte de una comunidad apasionada por el
          deporte. Creemos en el potencial de cada jugadora y en la importancia
          del trabajo en equipo para alcanzar nuevas metas.
        </p>
        <h3 className="text-white">Que Aprenderás?</h3>
        <p className="text-white">
          Táctica: Posicionamiento en la cancha, estrategias de juego y toma de
          decisiones en equipo. <br />
          Técnica Individual: Pases, recepción, conducción, remates y control
          del balón. <br />
          Conceptos Ofensivos y Defensivos: Pases, recepción, conducción,
          remates y control del balón. <br />
          Preparación Física y Mental: Ejercicios para mejorar la resistencia,
          velocidad y concentración en el partido.{" "}
        </p>
        <h3 className="text-white">Como Te Ayuda?</h3>
        <p className="text-white">
          Nuestro entrenamiento te permitirá desarrollar habilidades que van más
          allá del campo de juego. No solo mejorarás tu desempeño físico y
          técnico, sino también la confianza en ti misma, el trabajo en equipo y
          la disciplina.
        </p>
        <p className="text-white">¡Tú Puedes Ser Parte del Equipo!</p>
        <p className="text-white">
          Sabemos que cada jugadora tiene su propio ritmo de aprendizaje, por
          eso todas tienen la oportunidad de formar parte de un equipo para
          competiciones futuras. Para lograrlo, solo hace falta compromiso en
          los entrenamientos, ganas de aprender y disfrutar del fútbol. Si te
          apasiona este deporte y quieres llevar tu juego al siguiente nivel,
          ¡te esperamos con los brazos abiertos! ¡Ven a entrenar con nosotras y
          forma parte de esta gran familia futbolera!
        </p>
      </section>

      <section
        className="text-center text-white p-4 border-t-2 w-1/2 mx-auto border-white "
        id="contacto"
      >
        <h1>Contactanos</h1>
        <p >
          Para más información sobre nuestras clases, horarios y ubicaciones, no
          dudes en contactarnos. <br />
          Seguinos en nuestras redes sociales para estar al tanto de todas las
          novedades y eventos
        </p>
        <div className="flex flex-row justify-around items-end gap-4">
          <div className="flex flex-column gap-2">
            <Link
              href={"https://www.instagram.com/futbolfem2025/"}
              target="blank"
              className="no-underline"
            >
              {" "}
              <span>
                <Instagram />
              </span>{" "}
              @FutbolFem
            </Link>
            <Link
              href={"https://www.instagram.com/futbolfemhaedo/"}
              target="blank"
              className="no-underline"
            >
              {" "}
              <span>
                <Instagram />
              </span>{" "}
              FutbolFem-Haedo
            </Link>
            <Link
              href={"https://www.instagram.com/futbolfemituzaingo/"}
              target="blank"
              className="no-underline"
            >
              <span>
                <Instagram />
              </span>{" "}
              FutbolFem-Ituzaingo
            </Link>
            <Link
              href={"https://www.instagram.com/futbolfemramosmejia/"}
              target="blank"
              className="no-underline"
            >
              {" "}
              <span>
                <Instagram />
              </span>
              FutbolFem- Ramos
            </Link>
            <Link
              href={"https://www.instagram.com/futbolfempalomar/"}
              target="blank"
              className="no-underline"
            >
              {" "}
              <span>
                <Instagram />
              </span>{" "}
              FutbolFem-Palomar
            </Link>
          </div>
          <div>
            <ArrowCircleUpIcon
              className="text-5xl"
              // OnClick={()=> window.scrollTo({top:0, behavior:"smooth"})}
              //ACTIVARLO CUANDO LO PASE A UN COMPONENTE. DENTRO DEL APP NO SE PUEDE PASAR A CLIENT COMPONENT
            />
            <p>subir</p>
          </div>
        </div>
      </section>
    </>
  );
}
