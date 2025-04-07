
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import "./globals.css"
import Footer from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
export const metadata = {
  title: "FutbolFem",
  description: "Pagina de futbol femenino, con sus sedes en Haedo, Ramos, Ituzaingo,Palomar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="grid grid-rows-[auto_auto_1fr_auto] min-h-dvh bg-black"> 
          <div><Navbar/></div>
          <div><Banner/></div>
          <main>{children}</main>
          <div><Footer/></div>
        
        </div>
      
      </body>
    </html>
  );
}
