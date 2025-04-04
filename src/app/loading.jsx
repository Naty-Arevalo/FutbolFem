export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <div className="loader"></div>
      <p className="text-white text-2xl mt-4">Cargando...</p>
    </div>
  );
}