/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        primary: "#0FA47F",
        secondary: "#5536DA",
        background: "#343541",
        sideBg: "#202123",
        bright: "#444654"
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'spin-reverse': 'spin-reverse 1s linear infinite',
      },
    },
  },
  plugins: [],
};
