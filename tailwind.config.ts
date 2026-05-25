import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#08080A",
          900: "#0B0B0F",
          800: "#121218",
          700: "#1B1B23",
          600: "#272731",
          500: "#3A3A47",
          400: "#6B6B7B",
          300: "#9B9BAA",
          200: "#C7C7D1",
          100: "#E8E8EE",
          50: "#F4F4F7",
        },
        accent: {
          violet: "#8B5CF6",
          indigo: "#6366F1",
          cyan: "#22D3EE",
          amber: "#F59E0B",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-orb": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        "pulse-orb": "pulse-orb 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
