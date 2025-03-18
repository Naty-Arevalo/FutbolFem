import AccordionImage from "./AccordionImage/AccordionImage"
import image1 from "./juego1.jpeg"
import image2 from "./juego2.jpeg"
import image3 from "./juego3.jpeg"
import image4 from "./juego4.jpeg"
import image5 from "./juego5.jpeg"

const Images = [
    {
        nombre: "Futbol Haedo",
        image: image1,
        texto: "Holaaa"
    },
    {
        nombre: "Futbol Haedo1",
        image: image2,
        texto: "Holaaa"
    },
    {
        nombre: "Futbol Haedo2",
        image: image3,
        texto: "Holaaa"
    },
    {
        nombre: "Futbol Haedo3",
        image: image4,
        texto: "Holaaa"
    },
    {
        nombre: "Futbol Haedo4",
        image: image5,
        texto: "Holaaa"
    }
]

const AccordionHome = () =>{
    return(
        
    <section>
    <AccordionImage items={Images}/>
</section>
    )
}

export default AccordionHome;