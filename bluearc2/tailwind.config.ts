import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        "navy-800": "#0E1E3A",
        steel: "#1E4A8C",
        "steel-light": "#2A6BC7",
        teal: "#00B4A0",
        "teal-light": "#00D4BC",
        "teal-pale": "#E8F7F5",
        offwhite: "#F8FAFB",
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
