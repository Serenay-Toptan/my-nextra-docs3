/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  // ✨ dark mode'u class ile kontrol et
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#800080', // markanın mor rengi
      },
    },
  },
  plugins: [],
}
