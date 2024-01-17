import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "440px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      colors: {
        themeColor: "rgba(var(--themeColor))",
        background: "rgba(var(--background))",
        textColor: "rgba(var(--textColor))",
        color: "rgba(var(--color))",
        bgInput: "rgba(var(--bgInput))",
      },
    },
  },
  prefix: "tw-",
  plugins: [],
  darkMode: "class",
};
export default config;
