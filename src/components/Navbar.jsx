'use client';

import Link from "next/link";
import Image from "next/image";
import './navbar.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const linkNavbar = [
    {link: "/#quienes-somos" ,name:"Quienes Somos"},
    {link: "/futbolfemhaedo" ,name:"Haedo"},
    {link: "/futbolfemituza" ,name:"Ituzaingó"},
    {link: "/futbolfempalomar" ,name:"Palomar"},
    {link: "/futbolfemramos" ,name:"Ramos"},
    {link: "/futbol7" ,name:"Futbol 7"},
    {link: "/futsal" ,name:"Futsal"},
    {link: "/#contacto" ,name:"Contacto"},
  ]


  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  //el usePathename es para saber en que pagina estamos y cambiar el color del link activo
  //el pathname es la ruta de la pagina que estamos

  return (
    <nav className="bg-neutral-950 p-2 flex justify-between items-center text-white">
      <div className="flex items-center justify-between w-full relative px-2">
        <Link href="/">
          <Image src="/favicon.png" 
            width={0} 
            height={0} 
            sizes="100vw" 
            alt="Logo"
            className="w-20 md:w-28 lg:w-32 h-auto hover:scale-110 transition-all duration-300 ease-in-out ml-4" />
        </Link>

{/*Boton de menu Hambuerguesa*/}
        <button 
        className="block md:hidden  bg-neutral-950 text-white cursor-pointer border-2 border-solid border-white rounded-md px-2 py-1" 
        onClick={()=> setOpen(!open)
        }         
          >
          {open ? <CloseIcon fontSize="large"/> : <DehazeIcon fontSize="large" />}
        </button>

{/*Menu*/}
        <div className= {` ${open ? 'flex' : 'hidden'} flex-col absolute top-20 right-0 w-full bg-neutral-950 p-3 border border-pink-400 rounded-2xl z-50 md:static md:flex md:flex-row md:w-auto md:border-0 md:bg-transparent md:top-auto md:right-auto`}>
          <ul className="flex flex-col gap-4 md:flex-row md:gap-8 md:items-center ">
            {linkNavbar.map ((link, index)=>(
              <li className="navbar-enlaces" key={index}>
                <Link   
                  href={link.link} 
                  onClick={()=>setOpen(false)}
                  className={`${pathname === link.link ? 'text-white pr-6 py-2 pl-2 rounded-lg '  : 'text-neutral-500 hover:font-bold hover:transition-all duration-300 ease-in'} no-underline  text-xl md:text-2xl` }
              >
                {link.name}
              </Link>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
//el # en contacto es para que scrolee hacia esa seccion y no que tenga un componente nuevo