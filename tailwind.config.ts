import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", 
        secondary: "#4B5563", 
        success: "#16A34A", 
        danger: "#DC2626", 
        warning: "#CA8A04", 
      },
    },
  },
  plugins: [],
};
export default config;
