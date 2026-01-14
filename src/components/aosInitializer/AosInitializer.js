"use client";

import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

const AosInitializer = () => {

    useEffect(()=>{
        AOS.init({
            duration:500, 
            once:true,
            // disable:false  //fuerza activacion en mobile
        })
    },[])
  return null
}

export default AosInitializer