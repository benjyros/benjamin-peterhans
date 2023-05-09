/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {

          "primary": "#0dff00",

          "secondary": "#f418b6",

          "accent": "#7bf2b8",

          "neutral": "#312541",

          "base-100": "#53395B",

          "info": "#A9CBEA",

          "success": "#1FA88D",

          "warning": "#FCB827",

          "error": "#F3729D",
        },
        light: {
          "primary": "#ff6600",

          "secondary": "#f418b6",

          "accent": "#7bf2b8",

          "neutral": "#312541",

          "base-100": "#53395B",

          "info": "#A9CBEA",

          "success": "#1FA88D",

          "warning": "#FCB827",

          "error": "#F3729D",
        },
        cupcake: {
          "primary": "#694229",
        },
        hello: {
          "primary": "#1e00ff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

