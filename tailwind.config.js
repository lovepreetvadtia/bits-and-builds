/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#ffe17c",
          50: "#fffdf0",
          100: "#fffbc7",
          200: "#fff69b",
          300: "#ffeea2",
          400: "#ffe17c",
          500: "#ffd550",
          600: "#e6b825",
          700: "#b88c14",
          800: "#8a650c",
          900: "#5c4106",
        },
        charcoal: {
          DEFAULT: "#171e19",
          50: "#f4f6f4",
          100: "#e3e7e3",
          200: "#c4cdc4",
          300: "#9eaba0",
          400: "#748377",
          500: "#4f5e52",
          600: "#364239",
          700: "#273029",
          800: "#1d241f",
          900: "#171e19",
          card: "#1f2722",
          elevated: "#28332c",
        },
        darkgray: {
          DEFAULT: "#272727",
          card: "#2c2c2c",
          elevated: "#383838",
        },
        sage: {
          DEFAULT: "#b7c6c2",
          light: "#d5dfdc",
          muted: "rgba(183, 198, 194, 0.65)",
          border: "rgba(183, 198, 194, 0.15)",
        },
        paper: {
          DEFAULT: "#ffffff",
          muted: "#f8f9fa",
          subtle: "#e9ecef",
        },
        // legacy compat
        ink: {
          DEFAULT: "#171e19",
          card: "#272727",
          elevated: "#2f3832",
          border: "rgba(183, 198, 194, 0.15)",
        },
        teal: {
          DEFAULT: "#ffe17c",
          bright: "#fff0a3",
          dim: "#d4b340",
          glow: "rgba(255, 225, 124, 0.3)",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "var(--font-display)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-satoshi)", "var(--font-body)", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "8xl": ["6rem", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "9xl": ["7.5rem", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        clampHero: "clamp(3rem, 8.5vw, 7.75rem)",
        clamp1: "clamp(2.5rem, 6.5vw, 5.25rem)",
        clamp2: "clamp(1.85rem, 4.5vw, 3.75rem)",
        clamp3: "clamp(1.25rem, 2.75vw, 2.25rem)",
      },
      letterSpacing: {
        tightest2: "-0.045em",
        tighter2: "-0.03em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.4, 0, 0.2, 1)",
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        300: "300ms",
      },
      boxShadow: {
        brutalist: "4px 4px 0px #171e19",
        "brutalist-yellow": "4px 4px 0px #ffe17c",
        "brutalist-lg": "8px 8px 0px #171e19",
        "brutalist-yellow-lg": "8px 8px 0px #ffe17c",
        editorial: "0 20px 40px -15px rgba(23, 30, 25, 0.07)",
        "editorial-dark": "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "marquee-slow": "marquee 35s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
