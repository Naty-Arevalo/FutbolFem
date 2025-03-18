import Link from "next/link";
import Image from "next/image";
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-bloque">
        <Link href="/">
          <Image src="/logobyn.webp" width={100} height={100} alt="Logo" />
        </Link>
        <div className="bloque-links">
          <ul className="bloque-links-ul">
            <li className="navbar-enlaces">
              <Link href="./about">Quienes Somos</Link>
            </li>
            <li className="navbar-enlaces">
              <Link href="./futbolfemhaedo">FUTBOL FEM Haedo</Link>
            </li>
            <li className="navbar-enlaces"> 
              <Link href="./futbolfemituza">FUTBOL FEM Ituzaingo</Link>
            </li>
            <li className="navbar-enlaces">
              <Link href="./futbolfempalomar">FUTBOL FEM Palomar</Link>
            </li>
            <li className="navbar-enlaces">
              <Link href="./futbolfemramos">FUTBOL FEM Ramos</Link>
            </li>
            <li className="navbar-enlaces">
              <Link href="./futbol7">FUTBOL 7
              </Link>
            </li>
            <li className="navbar-enlaces"> 
              <Link href="/#contacto">Contacto</Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
//el # en contacto es para que scrolee hacia esa seccion y no que tenga un componente nuevo