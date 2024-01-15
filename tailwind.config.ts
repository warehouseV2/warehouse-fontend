import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: "rgba(var(--themeColor))",
        background: "rgba(var(--background))",
        textColor: "rgba(var(--textColor))",
      },
    },
  },
  prefix: "tw-",
  plugins: [],
  darkMode: "class",
};
export default config;
