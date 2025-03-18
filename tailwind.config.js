/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "9px 10px 116px 5px rgba(245, 245, 245, 0.67)",
      },
      dropShadow: {
        custom:'10px 10px 90px 23px rgba(213, 183, 183, 0.75)',
       },
    },
    corePlugins: {
      preflight: true,
    },
  },
  extend:{
    
  },
  plugins: [],
}

