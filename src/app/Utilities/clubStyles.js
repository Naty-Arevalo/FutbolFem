const clubStyles = (clubName) => {
  switch (clubName) {
    case "Futbol Fem Haedo":
      return {
        tituloColor: "text-red-300",
        iconColor: "text-red-400",
        accent: "text-red-300",
        chip: "bg-red-500/15 text-red-200 ring-1 ring-red-400/30",
        shadow: "drop-shadow(-10px 4px 10px rgb(203, 49, 49))",
        glow: "shadow-[0_25px_80px_-35px_rgba(248,113,113,0.55)]",
      };
    case "Futbol Fem Palomar":
      return {
        tituloColor: "text-orange-300",
        iconColor: "text-orange-400",
        accent: "text-orange-300",
        chip: "bg-orange-500/15 text-orange-200 ring-1 ring-orange-400/30",
        shadow: "drop-shadow(-10px 4px 10px rgb(217, 159, 104))",
        glow: "shadow-[0_25px_80px_-35px_rgba(251,146,60,0.5)]",
      };
    case "Futbol Fem Ramos Mejía":
      return {
        tituloColor: "text-purple-300",
        iconColor: "text-purple-400",
        accent: "text-purple-300",
        chip: "bg-purple-500/15 text-purple-200 ring-1 ring-purple-400/30",
        shadow: "drop-shadow(-10px 4px 10px rgb(147, 112, 219))",
        glow: "shadow-[0_25px_80px_-35px_rgba(192,132,252,0.5)]",
      };
    case "Futbol Fem Ituzaingó":
      return {
        tituloColor: "text-green-300",
        iconColor: "text-green-400",
        accent: "text-green-300",
        chip: "bg-green-500/15 text-green-200 ring-1 ring-green-400/30",
        shadow: "drop-shadow(-10px 4px 10px rgb(34, 197, 94))",
        glow: "shadow-[0_25px_80px_-35px_rgba(74,222,128,0.5)]",
      };
    default:
      return {
        tituloColor: "text-sky-300",
        iconColor: "text-sky-400",
        accent: "text-sky-300",
        chip: "bg-sky-500/15 text-sky-200 ring-1 ring-sky-400/30",
        shadow: "drop-shadow(-10px 4px 10px rgb(56, 189, 248))",
        glow: "shadow-[0_25px_80px_-35px_rgba(56,189,248,0.5)]",
      };
  }
};

export default clubStyles;
