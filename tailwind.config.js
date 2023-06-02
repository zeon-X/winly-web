/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mr: ["Manrope"],
        sora: ["Sora"],
      },
      colors: {
        "primary-red": "#FF3624",
        gray: "#F8F8F8",
        dark: "#2E2C34",
        "sec-dark": "#504F54",
      },
      screens: {
        "8xl": "1440px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff3624",

          secondary: "#fda4af",

          accent: "#d6d3d1",

          neutral: "#f8f8f8",

          "base-100": "#f3f4f6",

          info: "#2e2c34",

          success: "#65a30d",

          warning: "#AE5904",

          error: "#F5324C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
/** @type {import('tailwindcss').Config} */
