/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Incluye todos los archivos JavaScript y TypeScript dentro de src
    "./public/index.html", // Incluye el archivo HTML principal si estás usando uno
  ],
  theme: {
    extend: {
      maxWidth:{
        200: "78rem"
      },
      width:{
        20: "6rem"
      }

    },
  },
  plugins: [],
}

