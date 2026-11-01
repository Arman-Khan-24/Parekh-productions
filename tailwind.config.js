/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        amoled: "#000000",
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Outfit', 'sans-serif'],
      },
    },
  },
  future: {
    // hover: variants only fire on real hover-capable devices (no sticky :hover after touch taps)
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}
