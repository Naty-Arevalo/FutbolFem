

const clubStyles = ( clubName) => {
    switch (clubName) {
        case "Futbol Fem Haedo":
            return {
            tituloColor: "text-red-400",
            iconColor: "text-red-500",
            shadow: "drop-shadow(-10px 4px 10px rgb(203, 49, 49))",
            };
        case "Futbol Fem Palomar":
            return{
            tituloColor: "text-orange-400",
            iconColor: "text-orange-500",
            shadow: "drop-shadow(-10px 4px 10px rgb(217, 159, 104))",
            };
        case "Futbol Fem Ramos Mejía":
            return {
                tituloColor: "text-purple-700",
                iconColor: "text-purple-500",
                shadow: "drop-shadow(-10px 4px 10px rgb(147, 112, 219))",
            };
            case "Futbol Fem Ituzaingó":
                return {
                    tituloColor: "text-green-700",
                    iconColor: "text-green-500",
                    shadow: "drop-shadow(-10px 4px 10px rgb(34, 197, 94))",
                };
        default:
            return "bg-gradient-to-r from-gray-500 to-gray-300"
    }
  return (
    <div></div>
  )
}

export default clubStyles