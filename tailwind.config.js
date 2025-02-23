/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [],
  };

  module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#F97316",
          secondary: "#7F1D1D",
          neutral: "#1F2937",
          alert: "#DC2626",
        },
      },
    },
    plugins: [],
  };
  