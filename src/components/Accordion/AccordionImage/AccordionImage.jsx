'use client'
import "./Accordion.css"
import Image from "next/image";
import { useState } from "react";

const AccordionImage = ( {items}) => {
    const [active, setActive] = useState(0)
    const handletoggle = (index) => setActive (index)
    
    
    return (
        <section className="image-accordion">
            {items.map ((item, index) =>{
                const isActive = active === index ? "active" : "";
                return(
                    <div
                        key={item.image}
                        className={`image-accordion-item ${isActive}`}
                        onClick={()=> handletoggle(index)}
                    >
                        <Image src={item.image} alt="futbolfem" width={1500} height={2000}/>
                        <div>
                            <span className="material-symbols-outlined">👌</span>
                            <div>
                                <h2>{item.nombre}</h2>
                                <p>{item.texto}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    );
}
 
export default AccordionImage ;