import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        serif: ["Fraunces", "Iowan Old Style", "Georgia", "serif"],
      },
      colors: {
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e1",
          300: "#b0b7c5",
          400: "#8591a5",
          500: "#66738a",
          600: "#515c71",
          700: "#424b5c",
          800: "#39404e",
          900: "#0f1320",
          950: "#090b13",
        },
        brass: {
          300: "#f2d7a1",
          400: "#e6bd6c",
          500: "#d4a24c",
          600: "#b8853a",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,19,32,0.04), 0 8px 24px -12px rgba(15,19,32,0.18)",
        "card-dark": "0 1px 0 rgba(255,255,255,0.03), 0 12px 32px -16px rgba(0,0,0,0.6)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22,1,0.36,1) both",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
