/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFCFA',
          100: '#F8F6F1',
          200: '#F0EDE5',
          300: '#E5E0D5',
          400: '#D4CFC2',
          500: '#C2BBAB',
        },
        brand: {
          dark: '#2C2421',
          brown: '#5C4A3A',
          warm: '#8B7355',
          tan: '#A08B6E',
          gold: '#B09A7A',
          light: '#C8B89A',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#2C2421',
          foreground: '#F8F6F1',
        },
        secondary: {
          DEFAULT: '#F0EDE5',
          foreground: '#2C2421',
        },
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0,0,0,0.06)',
        'card': '0 4px 30px rgba(0,0,0,0.08)',
        'elegant': '0 10px 40px -10px rgba(44,36,33,0.15)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}


