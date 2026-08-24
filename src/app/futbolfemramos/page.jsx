import ClubPage from '@/components/ClubPage'
import { getClubMetadata } from '@/app/Utilities/clubSeo'
import Image from 'next/image'
import React from 'react'

export const metadata = getClubMetadata('Futbol Fem Ramos Mejía')

const futbolFemRamos = () => {
  return (
    <ClubPage clubName="Futbol Fem Ramos Mejía" />
  )
}

export default futbolFemRamos