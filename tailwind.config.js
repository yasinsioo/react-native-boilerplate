/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF",
        secondary: "#5AC8FA",
        danger: "#FF3B30",
        success: "#34C759",
        warning: "#FF9500",
      },
      spacing: {
        safe: "var(--safe-area-inset-bottom)",
      },
    },
  },
  plugins: [],
};
