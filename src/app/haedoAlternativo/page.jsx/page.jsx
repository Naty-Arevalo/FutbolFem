
import Image from 'next/image'
import './page.css'
import AccordionHome from '@/components/Accordion/AccordionHome'
import ContainerFotos from '@/components/ContainerFotos/ContainerFotos'
import ContainerInfo from '@/components/ContainerInfo/ContainerInfo'

import AcordionBoostp from '@/components/AcordionBoostp/AcordionBoostp'

export default function Haedo(){

    
    

    return(<>
    <section>
       <div className='size-full bg-red-500 flex '>
        <div className='basis-1/2 grid grid-cols-3  gap-2  p-4 '>
            <div>
                <Image src='/haedo1.jpg' width={800} height={800} alt='foto' className=' bg-purple-400 objet-cover w-full h-full'/>
            </div>
            <div>
                <Image src='/haedo2.jpg' width={800} height={800} alt='foto' className=' bg-purple-400 objet-cover w-full h-full'/>
            </div>
            <div>
                <Image src='/haedo3.jpg' width={800} height={800} alt='foto' className=' bg-purple-400 objet-cover w-full h-full'/>
            </div>
            <div>
            <Image src='/haedo4.jpg' width={800} height={800} alt='foto' className=' bg-purple-400 objet-cover w-full h-full'/>
            </div>
            <div>
            <Image src='/haedo5.jpg' width={800} height={800} alt='foto' className=' bg-purple-400 objet-cover w-full h-full'/>
            </div>
            <div >
            <Image src='/haedo11.jpg' width={800} height={800} alt='foto' className=' bg-purple-400 objet-cover w-full h-full'/>
            </div>
            <div>
            <Image src='/haedo7.jpg' width={800} height={800} alt='foto' className=' bg-purple-400 objet-cover w-full h-full'/>
            </div>
            <div>
            <Image src='/haedo9.jpg' width={800} height={800} alt='foto' className='row-span-2 bg-purple-400 objet-cover w-full h-full'/>
            </div>
            
            <div>
            <Image src='/haedo10.jpg' width={800} height={800} alt='foto' className=' bg-purple-400 objet-cover w-full h-full'/>
            </div>
            <div className='row-span-2'>
            <Image src='/haedo6.jpg' width={800} height={800} alt='foto' className=' bg-purple-400 objet-cover w-full h-full'/>
            </div>
             <div>
            <Image src='/haedo8.jpg' width={800} height={800} alt='foto' className=' bg-purple-400 objet-cover w-full h-full'/>
            </div>
        </div> 
        <div className='basis-1/2 flex flex-col items-center'>
            <h1 className='text-3xl m-5 p-3 items-center'>Futbol Haedo Tiene un monton de opciones para vos!</h1>
            <div className='gap-4'>
            {/* <ContainerInfo/> */}
            <AcordionBoostp/>
            
            </div>
            
        </div>              
       </div>
    </section>

        {/* <section> */}
            {/* <AccordionHome/>
        </section>
        // <section className="haedo">
        //     <div className='container'>
        //         <div className='texto'>
        //             <h1>FutbolFem Haedo Tiene un montón de opciones para vos!</h1>
        //             <ul>
        //                 <li className='tip'>Futbol Infantil</li>
        //                 <li className='tip'>Futbol Juveniles</li>
        //                 <li className='tip'>Inicial Adultas</li>
        //                 <li className='tip'>Experiencia Adultas</li>
        //                 <li className='tip'>Futbol Para Todas!</li>
        //             </ul>
        //         </div>
        //         <div className='img'>
        //             <Image src='/camiseta-haedo.jpeg' width={300} height={300} alt='camiseta' className='camiseta'/>
        //         </div>
        //     </div>
        //     <h1 className="text-3xl font-bold underline">Esta es la parte de Haedo</h1>
        // </section> */}
        <section>
            <div>
               <p> 🚩Estamos en: Av Rvadavia 16936, Haedo </p>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.2901569801925!2d-58.60493862514408!3d-34.6473744598036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc778e5d89c55%3A0x24dc7c0f2079cdf8!2sAv.%20Rivadavia%2016936%2C%20B1706%20Haedo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1710982898958!5m2!1ses-419!2sar" width={300} height={200} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             </div>
         </section>
         <section>
            
         </section>
         
        </>)       
}
