/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal':'#068B92',
        'dark-teal':'#085460',
      },
    },
  },
  plugins: [],
}

