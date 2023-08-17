/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('/home-bg.svg')",
      },
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
        bgSignupPage: "#005dbf",
        bgSignInPage: "#7d6f20",
        menu: "#140527",
        emailInput: "#ffffff33",
        lightOrange: "#fff1e5",
        lightGreen: "#D9FFE9",
        magloOrange: "#F2994A",
        black3: "#797979",
        pageBgGrey: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
