// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],

  fontFamily: {
    Nunito: ["Nunito Sans", "sans-serif"],
    Kumbh: ["Kumbh Sans", "sans-serif"],
    Outfit: ["Outfit", "sans-serif"],
    Poppins: ["Poppins", "sans-serif"],
    Lato: ["Lato", "sans-serif"],
  },
});
