/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOne: "#5236FF",
        primaryOneLight: "#8B6CFF",
        primaryTwo: "#242331",
        primaryTwoLight: "#3C3B4B",
        secondaryOne: "#F9F9F9",
        secondaryTwo: "#EFECFF",
        secondaryThree: "#242331",
        secondaryFour: "#797979",
        secondaryFive: "#F4F4F4",
        testimonial: "#735DFD",
        border: "#D3D3D3",
        orange: "#FFEECC",
        orangeText: "#C68A15",
        purple: "#FAD5E9",
        purpleText: "#C1749E",
      },
    },
  },
  plugins: [],
};
