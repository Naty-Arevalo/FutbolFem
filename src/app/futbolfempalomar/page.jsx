import ClubPage from '@/components/ClubPage'
import { getClubMetadata } from '@/app/Utilities/clubSeo'
import React from 'react'

export const metadata = getClubMetadata('Futbol Fem Palomar')

const futbolFemPalomar = () => {
  return (
   <ClubPage clubName= "Futbol Fem Palomar"/>
  )
}

export default futbolFemPalomar

