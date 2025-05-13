/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./Pages/**/*.html", "./Assets/scripts/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8052a3",
        accent: "#10b981",
        danger: "#ef4444",
        warning: "#f59e0b",
        info: "#3b82f6",
        background: "#ffffff",
        foreground: "#111827",
        muted: "#6b7280",
      },
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.75rem",
        lg: "1rem",
        full: "9999px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
