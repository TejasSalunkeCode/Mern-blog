/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js", // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    import("flowbite/plugin"),
  ],
};