/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F9A109",
        secondary: "#FFF0DE",
        gray: {
          100: "#FAFAFE",
          200: "#F2F2F2",
          300: "#BDBDBD",
          400: "#C1C1C4",
          500: "#828282",
          600: "#34333A",
          700: "#454545",
        },
        "light-blue": "#56CCF2",
        tomato: "#EB5757",
        maroon: "#80485B",
      },
      fontFamily: {
        sans: ["var(--font-quicksand)"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-radix")],
};
