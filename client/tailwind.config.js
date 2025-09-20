/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: 'rgb(16, 23, 42)', // Match your dark theme color
        },
      },
    },
  },
  plugins: [
    import('flowbite/plugin'),
  ],
};