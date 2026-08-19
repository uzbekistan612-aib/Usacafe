import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFBF7",
          100: "#F8F4EC",
          200: "#EFE8DC",
          300: "#E3D8C8",
          400: "#D4C4AF",
          500: "#BEAA92",
          600: "#9F8B73",
        },
        espresso: {
          950: "#120E0C",
          900: "#1A1412",
          800: "#261E1B",
          700: "#3D312C",
          600: "#5C4B43",
          500: "#7A665C",
          400: "#A08A7F",
          300: "#C7B5AC",
          200: "#E2D8D2",
          100: "#F1EBE7",
        },
        caramel: {
          50: "#FAF5EE",
          100: "#F4E9DC",
          200: "#E5CCA9",
          300: "#D7B07A",
          400: "#C99653",
          500: "#B8864E",
          600: "#9C6D37",
          700: "#7E5427",
        },
        warm: {
          border: "#E7DECFC8",
          subtle: "#F4EDE3",
          card: "#FCFAF6",
          darkborder: "#382C27",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "serif"],
      },
      letterSpacing: {
        widest: "0.22em",
        tightest: "-0.035em",
      },
      boxShadow: {
        editorial: "0 10px 30px -10px rgba(26, 20, 18, 0.07)",
        card: "0 4px 20px -2px rgba(26, 20, 18, 0.05)",
        lift: "0 20px 40px -15px rgba(26, 20, 18, 0.12)",
        subtle: "0 1px 3px 0 rgba(26, 20, 18, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
