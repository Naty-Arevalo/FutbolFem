
import data from '../app/Data/data.json'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image';
import clubStyles from "@/app/Utilities/clubStyles"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const ClubPage = ( { clubName }) => {
    const club = data.find(c => c.club === clubName)
   
    if (!club) {
        return <div>Club no encontrado!</div>
    }
    const styles = clubStyles (clubName);
    const {tituloColor, iconColor, shadow} = styles

  return (
//   <>
    <div className='flex justify-center items-center flex-col'>
        <div className='w-3/4 bg-gray-600/50  flex items-center justify-center flex-col my-5 p-4 rounded-xl md:flex-row md:justify-between md:w-11/12 md:p-8'>
            {/*Imagen */}
            <div>
                <Image 
                    src={club.imagen} 
                    alt={clubName} 
                    width={150} 
                    height={150}
                    style={{filter: shadow }} 
                    />
            </div>
            {/*Dirección */}
            <div className='mt-4'>
                <h1 className={`${tituloColor} text-3xl md:text-4xl lg:text-5xl font-bold transition-colors duration-300`}>{club.club}</h1>
                    <p className='text-neutral-400 text-2xl md:text-xl lg:text-3xl mt-4 font-semibold'> Estamos En: {club.ubicacion.nombre} <br/>
                        <span className=' inline-block transform hover:rotate-12 transition-transform duration-300'>
                            <ArrowOutwardIcon className={`${iconColor} size-8 mr-2`}/>
                        </span>
                        {club.ubicacion.direccion}
                    </p>
            </div>
            {/*Horarios */}
            <div className='text-neutral-400 mt-4 '>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold '>
                    <span className='inline-block'>
                        <CalendarMonthIcon className={`${iconColor} size-8 mr-2` }/>
                    </span>
                    Dias y Horarios 
                </h2>
                <ul className='space-y-2 mt-2'>
                {club.dias_y_horarios.map(({ dia, horario, horario_juveniles, horario_adultas} , index) =>{
                return(
                    <li key={index} className='text-lg md:text-xl lg:text-2xl italic'>
                        {dia} :{""}
                        {horario_juveniles && horario_adultas ? (
                        <>
                            {horario_juveniles} (Juveniles) <br/> 
                            {horario_adultas} (Adultas)
                        </>
                        ):(
                            `${horario} hs`
                        )}   
                     </li>
                    )
                })}
                </ul>
            </div>
            {/*Categorías */}
            <div className='text-neutral-400 mt-4'>
                <h2 className='text-2xl font-semibold ml-4'>Categorías:</h2>
                    <ul className='space-y-2 mt-2 list-disc list-outside pl-6'>
                        {club.categorias.map((categoria, index) => (
                        <li key={index} className='text-lg md:text-xl lg:text-2xl '>{categoria.nombre}: <span className='italic'>{categoria.edades}</span> </li>
                        ))}
                    </ul>
            </div>
            
        </div>
        {/*Whatsapp */}
        <div className='bg-gray-600/80 flex gap-4 p-4 rounded-lg mb-4'>
            <a 
                href={`https://wa.me/542262559339?text=Hola%20quiero%20consultar%20por%20${club.club}`}
                target='_blank'
                rel="noopener noreferrer"
                className='cursor-pointer text-white text-xl'
                >
                < WhatsAppIcon fontSize='large'/> No dudes en contactarme
            </a>
            
        </div>
    </div>


  








)







   {/* <div className='flex flex-col md:flex md:flex-row md:justify-around  gap-6 md:gap-10 items-center p-4 md:p-8 '>
    <div className='relative z-10 hover:scale-105 transition-transform duration-300 ease-in-out'>
        <Image src={club.imagen} alt={clubName} width={200} height={200}
        style={{filter: shadow }} />
    </div>
    <div className='text-center md:text-left w-full md:w-1/3 space-y-4'>
        <h1 className={`${tituloColor} text-3xl md:text-4xl lg:text-5xl font-bold transition-colors duration-300`}>{club.club}</h1>
        <p className='text-white text-xl md:text-xl lg:text-3xl'> Estamos En: {club.ubicacion.nombre} <br/>
            <span className=' inline-block transform hover:rotate-12 transition-transform duration-300'>
                <ArrowOutwardIcon className={`${iconColor} size-8 mr-2`}/>
            </span>
        {club.ubicacion.direccion}
        </p>
        <h2 className='text-white text-2xl md:text-3xl lg:text-4xl font-semibold '>
            <span className='inline-block transform hover:scale-110 transition-transform duration-300'>
            <CalendarMonthIcon className={`${iconColor} size-8 mr-2` }/>
            </span>
        Dias y Horarios 
        </h2>
        <ul className='space-y-2'>
            {club.dias_y_horarios.map(({ dia, horario, horario_juveniles, horario_adultas} , index) =>{
            return(
                <li key={index} className='text-white text-lg md:text-xl lg:text-2xl '>
                {dia} :{""}
                {horario_juveniles && horario_adultas ? (
                    <>
                    {horario_juveniles} (Juveniles) <br/> 
                    {horario_adultas} (Adultas)
                    </>
                    ):(
                        `${horario} hs`
                    )}   
            </li>
            )
             
            })}
        </ul>
    </div>
    <div className='text-white w-full md:w-1/3'>
        <h2 className='text-2xl font-semibold text-center'>Categorias:</h2>
        <ul className='space-y-2 '>
            {club.categorias.map((categoria, index) => (
                <li key={index} className='text-white hover:text-gray-300 transition-colors duration-300 text-lg md:text-xl lg:text-2xl '>✔️{categoria.nombre}: {categoria.edades}</li>
            ))}
        </ul>
    </div>
   </div> 
  </>) */}
  
}

export default ClubPage