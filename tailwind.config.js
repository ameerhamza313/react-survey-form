/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'bgImage': "url('https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg')",
      })
    },
  },
  plugins: [],
};
