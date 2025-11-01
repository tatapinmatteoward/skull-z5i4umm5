/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        accent: '#9e0000',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
