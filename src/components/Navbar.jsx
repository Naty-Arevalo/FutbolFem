'use client';

import Link from "next/link";
import Image from "next/image";
import './navbar.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  //el usePathename es para saber en que pagina estamos y cambiar el color del link activo
  //el pathname es la ruta de la pagina que estamos

  return (
    <nav className="navbar">
      <div className="navbar-bloque">
        <Link href="/">
          <Image src="/logobyn.webp" width={100} height={100} alt="Logo" />
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
            <li className="navbar-enlaces">
              <Link href="/about" onClick={()=>setOpen(false)}
              className={`${pathname === '/about' ? 'bg-gray-600 text-neutral-400 p-1' : 'text-white'}`}
              >Quienes Somos</Link>
            </li>
            <li className="navbar-enlaces">
              <Link href="/futbolfemhaedo" onClick={()=>setOpen(false)}
              className={`${pathname === '/futbolfemhaedo' ? ' bg-gray-600 text-neutral-400' : 'text-white'}`}
              >FUTBOL FEM Haedo</Link>
            </li>
            <li className="navbar-enlaces"> 
              <Link href="/futbolfemituza" onClick={()=>setOpen(false)}
              className={`${pathname === '/futbolfemituza' ? 'bg-gray-600 text-neutral-400' : 'text-white'}`}
              >FUTBOL FEM Ituzaingo</Link>
            </li>
            <li className="navbar-enlaces">
              <Link href="/futbolfempalomar" onClick={()=>setOpen(false)}
              className={`${pathname === '/futbolfempalomar' ? 'bg-gray-600 text-neutral-400' : 'text-white'}`}
              >FUTBOL FEM Palomar</Link>
            </li>
            <li className="navbar-enlaces">
              <Link href="/futbolfemramos" onClick={()=>setOpen(false)}
              className={`${pathname === '/futbolfemramos' ? 'bg-gray-600 text-neutral-400' : 'text-white'}`}
              >FUTBOL FEM Ramos</Link>
            </li>
            <li className="navbar-enlaces">
              <Link href="/futbol7" onClick={()=>setOpen(false)}
              className={`${pathname === '/futbol7' ? 'bg-gray-600 text-neutral-400' : 'text-white'}`}
              >FUTBOL 7
              </Link>
            </li>
            <li className="navbar-enlaces"> 
              <Link href="/#contacto" onClick={()=>setOpen(false)}
              className={`${pathname === '/#contacto' ? 'bg-gray-600 text-neutral-400' : 'text-white'}`}
              >Contacto </Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
//el # en contacto es para que scrolee hacia esa seccion y no que tenga un componente nuevo