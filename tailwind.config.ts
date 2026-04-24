import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ff7a00",
          navy: "#0a0f1f"
        }
      },
      boxShadow: {
        orange: "0 0 30px rgba(255,122,0,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
