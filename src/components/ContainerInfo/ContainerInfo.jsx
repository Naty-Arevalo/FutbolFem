'use client'

import { useState } from "react"
import InfoModal from "../InfoModal/InfoModal"
import InfoCategorias from "../infoCategorias/InfoCategorias"
import { informacion } from "@/app/futbolfemhaedo/data"

const ContainerInfo = () =>{
    const [selectedInfo, setSelectedInfo] = useState(null)

    const handleInfoClick = (info) =>{
        setSelectedInfo(info)
    }
    const handleCloseModal = () =>{
        setSelectedInfo(null)
    }

    return(
        <div >
        {informacion.map(info =>(
            <InfoCategorias key={info.id} info={info} onClick={handleInfoClick}/>
        ))}
        <InfoModal info={selectedInfo} onClose={handleCloseModal}/>
        </div>
    )
}

export default ContainerInfo