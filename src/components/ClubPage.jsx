import data from '../app/Data/data.json'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import clubStyles from "@/app/Utilities/clubStyles"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';


const ClubPage = ( { clubName }) => {
    const club = data.find(c => c.club === clubName)
   
    if (!club) {
        return <div>Club no encontrado!</div>
    }
    const styles = clubStyles (clubName);
    const {tituloColor, iconColor, shadow} = styles

  return (
//   <>
    <div className='flex justify-center items-center flex-col '>
        <div className='w-4/5 bg-gray-600/50  flex justify-center flex-col my-5 py-4 px-2 rounded-xl md:flex-row md:justify-between md:w-11/12 md:py-8 md:gap-4 md:px-1'>
            {/*Imagen */}
            <div className="flex justify-center items-center">
                <Image 
                    src={club.imagen} 
                    alt={clubName} 
                    width={150} 
                    height={150}
                    style={{filter: shadow }} 
                    className='lg:w-48'
                    />
            </div>
            {/*Dirección */}
            <div className='mt-4'>
                <h1 className={`${tituloColor} text-3xl text-center lg:text-4xl font-bold transition-colors duration-300`}>{club.club}</h1>
                <div className='flex items-center gap-2 mt-3'>
                    <div>
                        <span><LocationOnIcon className={`${iconColor} size-12 md:size-14`}/></span>
                    </div>
                    <div>
                        <p className={`${tituloColor} text-2xl font-semibold md:text-3xl `}>{club.ubicacion.nombre}</p>
                        <p className={`${tituloColor} text-2xl italic md:text-3xl `}>{club.ubicacion.direccion}</p>
                    </div>
                </div>
                
            </div>

            {/*Horarios */}
            <div className='text-neutral-400 mt-4 '>  
                    <div className='flex gap-2  mt-4 '>
                        <span className='inline-block'>
                            <CalendarMonthIcon className={`${iconColor} size-7 mr-2 md:size-10` }/>
                        </span>
                        <p className='text-3xl  font-semibold md:mb-6'>Dias y Horarios</p>
                    </div>
                <ul className='space-y-2 mt-2'>
                {club.dias_y_horarios.map(({ dia, horario, horario_juveniles, horario_adultas} , index) =>{
                return(
                    <li key={index} className='text-lg italic'>
                        {dia} : <br/>{""}
                        {horario_juveniles && horario_adultas ? (
                        <>
                            {horario_juveniles} (Infanto-Juvenil) <br/> 
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
                <div className='flex gap-2  mt-4 '>
                    <span className='inline-block'>
                        <ContentPasteIcon className={`${iconColor} size-7 mr-2 md:size-10` }/>
                    </span>
                    <p className='text-3xl  font-semibold md:mb-6'>Categorías:</p>
                </div>
                    <ul className='space-y-2 mt-2 list-disc list-outside pl-6'>
                        {club.categorias.map((categoria, index) => (
                        <li key={index} className='text-lg md:text-xl md:ml-8 '>{categoria.nombre}: <span className='italic'>{categoria.edades}</span> </li>
                        ))}
                    </ul>
            </div>
            
        </div>
        {/*Galeria de Imagenes */}
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-3/4 mb-5 lg:w-full lg:px-10'>
           {club.galeriaImagenes.map((img,i) => (
            <div 
                key={i} 
                className='w-full overflow-hidden rounded-lg'
                data-aos= "fade-up"
                data-aos-delay={i * 100}
                >
                <Image
                src={img}
                alt={`foto ${i}`}
                width={500}
                height={500}
                className='w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105'
                />
            </div>
           ))}
            
        </div> */}

        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-3/4 mb-5 lg:w-full lg:px-10'>
            {club.galeriaImagenes.map((img,i) =>(
                <div
                    key={i}
                    data-aos='fade-up'
                    data-aos-delay={i * 100}
                    className='relative aspect-[4/3] overflow-hidden rounded-lg'
                >
                    <Image
                        src={img}
                        alt={`foto ${i}`}
                        fill
                        sizes='(max-width: 640px) 100vw,
                                (max-width: 768px) 50vw,
                                33vw'
                        className='object-cover transition-transform duration-300 hover:scale-105'
                    />
                </div>
            ))}
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