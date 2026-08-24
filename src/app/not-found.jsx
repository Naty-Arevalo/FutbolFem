import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 text-center my-16 px-4 min-h-[50vh]">
      <Image
        src="/favicon.png"
        alt="Logo de FutbolFem"
        width={128}
        height={128}
        className="w-24 md:w-32 h-auto"
        priority
      />
      <h1 className="text-white text-6xl md:text-7xl font-bold tracking-widest">
        404
      </h1>
      <p className="text-gray-200 text-xl md:text-2xl max-w-md">
        Ups... la pelota se fue afuera. No encontramos la página que buscás.
      </p>
      <Link
        href="/"
        className="bg-pink-500 hover:bg-pink-400 transition-colors duration-300 text-black font-bold text-lg px-8 py-3 rounded-full"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
