
import ClubPage from "@/components/ClubPage";
import { getClubMetadata } from "@/app/Utilities/clubSeo";
import Image from "next/image";
// import { useState } from "react";

export const metadata = getClubMetadata("Futbol Fem Ituzaingó");

export default function Ituzaingo() {
  // const [showMap, setShowMap] = useState(false);

  return (
    <ClubPage clubName="Futbol Fem Ituzaingó" />
  );
}


  