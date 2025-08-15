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
    {link: "/#contacto" ,name:"Contacto"},
  ]


  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  //el usePathename es para saber en que pagina estamos y cambiar el color del link activo
  //el pathname es la ruta de la pagina que estamos

  return (
    <nav className="navbar">
      <div className="navbar-bloque">
        <Link href="/">
          <Image src="/favicon.png" width={120} height={120} alt="Logo"
          className=" hover:scale-110 transition-all duration-300 ease-in-out ml-4" />
        </Link>

{/*Boton de menu Hambuerguesa*/}
        <button 
        className="menu-toggle" 
        onClick={()=> setOpen(!open)
        }         
          >
          {open ? <CloseIcon fontSize="large"/> : <DehazeIcon fontSize="large" />}
        </button>

{/*Menu*/}
        <div className= {`bloque-links ${open ? 'open' : ''} fixed top-10 left-0   z-50 isolation-isolate md:static md:w-auto`}>
          <ul className="bloque-links-ul">
            {linkNavbar.map ((link, index)=>(
              <li className="navbar-enlaces" key={index}>
                <Link   
                  href={link.link} 
                  onClick={()=>setOpen(false)}
                  className={`${pathname === link.link ? 'bg-gray-500/70 text-neutral-400 pr-6 py-2 pl-2 rounded-lg'  : 'text-white hover:font-bold hover:transition-all duration-300 ease-in'}`}
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