/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75',
      },
      animation: {
        fire: "fire 1.2s infinite alternate ease-in-out",
      },
      keyframes: {
        fire: {
          "0%": { transform: "scale(1)", color: "#FF4500", opacity: 0.8 },
          "50%": { transform: "scale(1.2)", color: "#FFA500", opacity: 1 },
          "100%": { transform: "scale(1)", color: "#FF4500", opacity: 0.8 },
        },
      },
    },
    
  },
  plugins: [],
}