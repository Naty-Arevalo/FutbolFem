import { Montserrat} from 'next/font/google'
//si esta vacio las llaves, ctrol + espacio y nos muestra todas las fuentes
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})



//en una etiqueta se pondra: className={`${montserrat.className} antialised}`

//si es global se carga en el layout si hay varias cargar en cada componente