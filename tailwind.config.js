/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // Eğer pages klasörü varsa
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}