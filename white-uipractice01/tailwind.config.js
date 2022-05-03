module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/Images/heroImage.jpg')",
      }
    },
    screens: {
      sm: "300px",
      md: "760px",
      lg:"1024px"
    },
    container: {
      center: true,
    },
    fontFamily: {
    sans: ["Lato, sans-serif"],
    raleway: ["Raleway, sans-serif"],
    openSans: ["font-family: 'Raleway', sans-serif"]
    }
  },
  plugins: [],
}