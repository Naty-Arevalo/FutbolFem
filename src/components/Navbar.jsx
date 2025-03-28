'use client';

import Link from "next/link";
import Image from "next/image";
import './navbar.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
              <Link href="./about" onClick={()=>setOpen(false)}>Quienes Somos</Link>
            </li>
            <li className="navbar-enlaces">
              <Link href="./futbolfemhaedo" onClick={()=>setOpen(false)}>FUTBOL FEM Haedo</Link>
            </li>
            <li className="navbar-enlaces"> 
              <Link href="./futbolfemituza" onClick={()=>setOpen(false)}>FUTBOL FEM Ituzaingo</Link>
            </li>
            <li className="navbar-enlaces">
              <Link href="./futbolfempalomar" onClick={()=>setOpen(false)}>FUTBOL FEM Palomar</Link>
            </li>
            <li className="navbar-enlaces">
              <Link href="./futbolfemramos" onClick={()=>setOpen(false)}>FUTBOL FEM Ramos</Link>
            </li>
            <li className="navbar-enlaces">
              <Link href="./futbol7" onClick={()=>setOpen(false)}>FUTBOL 7
              </Link>
            </li>
            <li className="navbar-enlaces"> 
              <Link href="/#contacto" onClick={()=>setOpen(false)}>Contacto </Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
//el # en contacto es para que scrolee hacia esa seccion y no que tenga un componente nuevo