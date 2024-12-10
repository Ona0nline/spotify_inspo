/** @type {import('tailwindcss').Config} */
export default {
  // Customisation 
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "twitter-blue": "#1DA1F2"
    },
    extend: {

    }
  },
  plugins: [],
}
// To add truly custom css components, add to stylesheet
