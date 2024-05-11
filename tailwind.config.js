/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    extend: {
      backgroundImage:{
        "Body-image":"url('/public/background.webp')",
        "left":"url('/public/left-photo-1107717.jpeg')"
      }

    }
  },
  plugins: [],
}

