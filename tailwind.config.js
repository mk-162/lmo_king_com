/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("./src/tailwind-plugin/tw-theme.js"),
    require("./src/tailwind-plugin/tw-bs-grid.js"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
