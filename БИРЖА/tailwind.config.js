/** @type {import('tailwindcss').Config} */
export default {
 content: [
  './components/**/*.{vue,js}',
  './layouts/**/*.{vue,js}',
  './pages/**/*.{vue,js}',
  './app.vue'
],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // синий
        secondary: '#1e40af', // темно-синий
      },
    },
  },
  plugins: [],
}
