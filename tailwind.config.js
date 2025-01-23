/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html', // Asegúrate de incluir este si tienes un archivo raíz
    './src/**/*.{js,ts,jsx,tsx}', // Si estás trabajando con Vite + React
  ],
  theme: {
    extend: {
      fontFamily: {
        universal:['"Universal Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
};
