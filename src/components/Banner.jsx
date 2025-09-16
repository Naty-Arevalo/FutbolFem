// import "./banner.css"

export default function Banner() {
  return (
    <div
      className="w-full h-[150px] sm:h-[150px] md:h-[150px] lg:h-[200px] xl:h-[200px] bg-black bg-cover bg-center mt-2 border-gray-500 flex items-center px-4"
      style={{
        backgroundImage:
          "url(https://www.parqueygrama.com/wp-content/uploads/2017/05/mantenimiento-grama-futbol.png)",
      }}
    >
      <p className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium  ">
        Futbol Fem <br /> Escuelas deportivas <br />Futbol para todas
      </p>
    </div>
  );
}
