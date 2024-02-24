/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        darkest: "#1B1D1E",
        dark: "#262729",
        "less-dark": "#393A3E",
        medium: "#6E6E6E",
        "light-medium": "#9E9E9E",
        sun: "#FFE24C",
        "light-sun": "#FFEDB3",
        almost: "#F5F5F5",
      },
      fontFamily: {
        plein: ['Plein', ...defaultTheme.fontFamily.sans],
        switzer: ['Switzer', ...defaultTheme.fontFamily.sans],
      },
      // sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
      // mono: ['Source Code Pro', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
}
