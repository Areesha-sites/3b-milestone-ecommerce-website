import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        ms: "390px",
        sm: "375px",
        xsm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        btnBackground: "var(--btnBackground)",
        hoverBtnBackground: "var(--hoverBtnBackground)",
      },
      fontFamily: {
        poppins: ["poppins", "sans"],
        roboto: ["roboto", "sans"],
        greatVibes: ["GreatVibes", "sans"],
      },
    },
  },
  plugins: [],
} satisfies Config;
