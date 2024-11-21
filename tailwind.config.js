/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },

      backgroundImage: {
        banner:
          "linear-gradient(0deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,1) 100%) , url(/banner.jpg)",
      },

      boxShadow: {
        customOne: "0px 0px 101px 0px rgba(255,255,255,0.56)",
      },
    },
  },
  plugins: [],
};
