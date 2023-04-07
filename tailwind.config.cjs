module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      borderRadius: {
        "4xl": "1.5rem",
      },
      screens: {
        "2xl": { max: "1620px" },
        "xl": { max: "1486px" },
        "lg": { max: "1073px" },
        "sm": { max: "514px" },
      },
      backgroundImage: {
        me: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0)), url(/images/bg/me.webp)",
        skills:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0)), url(/images/bg/skills.webp)",
        dark: "url(/images/bg/dark-mode.webp), linear-gradient(rgba(233, 213, 255, 1), rgba(233, 213, 255, 1))",
        light:
          "url(/images/bg/light-mode.webp), linear-gradient(rgba(254, 240, 138, 1), rgba(254, 240, 138, 1))",
        system:
          "url(/images/bg/system.webp), linear-gradient(rgba(191, 219, 254, 1), rgba(191, 219, 254, 1))",
        darkHover:
          "url(/images/bg/dark-mode.webp), linear-gradient(rgba(213, 174, 255, 1), rgba(213, 174, 255, 1))",
        lightHover:
          "url(/images/bg/light-mode.webp), linear-gradient(rgba(255, 234, 77, 1), rgba(255, 234, 77, 1))",
        systemHover:
          "url(/images/bg/system.webp), linear-gradient(rgba(134, 189, 255, 1), rgba(134, 189, 255, 1))",
        morning: "url(/images/bg/morning.webp)",
        afternoon: "url(/images/bg/afternoon.webp)",
        night: "url(/images/bg/night.webp)",
      },
      backgroundSize: {
        contain: "110%",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
      backdropBlur: {
        "4xl": "19rem",
      },
    },
  },
  plugins: [],
};
