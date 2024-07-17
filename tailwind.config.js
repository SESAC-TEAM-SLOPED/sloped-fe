/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        google: "#4285F4",
        kakao: "#FEE500",
        email: "#2196F3",
        login: "#D2D2D2",
        signiture: "#3F51B5",
      },
    },
  },
  plugins: [],
};
