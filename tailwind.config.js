/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6358DC",
        fields: "#F5F5F5",
        outline: "#E2E2E2"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        'intense': "0px 0px 16px rgba(17,17,26,0.1)"
      }
    },
  },
  plugins: [],
}

