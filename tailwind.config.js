/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens : {
        xsm: "408px",
        sm : "579px",
        md : "768px",
        lg : "1024px",
        xlg : "1210px",
        sidebar : "625px",
      },
    },
  },
  plugins: [],
}

