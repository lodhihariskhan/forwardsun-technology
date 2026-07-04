import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#102018",
        deep: "#064E2F",
        forest: "#064E2F",
        leaf: "#168A3A",
        lime: "#74C000",
        solar: "#F5B400",
        sunsoft: "#FFF5D6",
        mist: "#F6FBF4",
        pearl: "#FFFFFF",
        line: "#DDEAD8",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(6, 78, 47, 0.1)",
        premium: "0 26px 75px rgba(6, 78, 47, 0.14)",
        card: "0 14px 34px rgba(16, 32, 24, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
