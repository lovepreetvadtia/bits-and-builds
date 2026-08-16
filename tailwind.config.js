/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#07090e",
          card: "#0d121c",
          elevated: "#131a27",
          border: "rgba(255, 255, 255, 0.08)",
        },
        paper: {
          DEFAULT: "#f8fafc",
          muted: "rgba(248, 250, 252, 0.65)",
          subtle: "rgba(248, 250, 252, 0.4)",
        },
        teal: {
          DEFAULT: "#00f2d5",
          bright: "#38ffd8",
          dim: "#0b8a7b",
          glow: "rgba(0, 242, 213, 0.25)",
        },
        electric: {
          cyan: "#00f2d5",
          blue: "#38bdf8",
          violet: "#a78bfa",
          amber: "#fbbf24",
        },
        line: "rgba(255, 255, 255, 0.08)",
        lineHover: "rgba(0, 242, 213, 0.3)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        clampHero: "clamp(2.75rem, 7.5vw, 6.75rem)",
        clamp1: "clamp(2.25rem, 5.5vw, 4.5rem)",
        clamp2: "clamp(1.75rem, 4vw, 3.25rem)",
        clamp3: "clamp(1.25rem, 2.5vw, 2rem)",
      },
      letterSpacing: {
        tightest2: "-0.045em",
        tighter2: "-0.03em",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "border-glow": "borderGlow 4s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(0, 242, 213, 0.2)" },
          "50%": { borderColor: "rgba(56, 189, 248, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};
