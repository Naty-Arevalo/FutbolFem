
import data from '../app/Data/data.json'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image';
import clubStyles from "@/app/Utilities/clubStyles"


const ClubPage = ( { clubName }) => {
    const club = data.find(c => c.club === clubName)
   
    if (!club) {
        return <div>Club no encontrado!</div>
    }
    const styles = clubStyles (clubName);
    const {tituloColor, iconColor, shadow} = styles

  return (<>
   <div className='flex flex-col md:flex md:flex-row md:justify-around  gap-4 items-center p-3'>
    <div className='relative z-10'>
        <Image src={club.imagen} alt={clubName} width={200} height={200}
        style={{filter: shadow }} />
    </div>
    <div>
        <h1 className={`${tituloColor} text-3xl`}>{club.club}</h1>
        <p className='text-white '> Estamos En: {club.ubicacion.nombre} <br/>
            <span >
                <ArrowOutwardIcon className={`${iconColor}`}/>
            </span>
        {club.ubicacion.direccion}
        </p>
        <h2 className='text-white '>
            <span>
            <CalendarMonthIcon className={`${iconColor}`}/>
            </span>
        Dias y Horarios 
        </h2>
        <ul>
            {club.dias_y_horarios.map((dia, index) => (
                <li key={index} className='text-white'>{dia.dia}: {dia.horario}</li>
            ))}
        </ul>
    </div>
    <div className='text-white mb-4'>
        <h2>Categorias</h2>
        <ul>
            {club.categorias.map((categoria, index) => (
                <li key={index} className='text-white'>✔️{categoria.nombre}: {categoria.edades}</li>
            ))}
        </ul>
    </div>
   </div>
  </>)
}

export default ClubPage