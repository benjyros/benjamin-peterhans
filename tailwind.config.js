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
          "primary": "#ffffff",

          "secondary": "#f5f3f2",

          "accent": "#73737375",

          "neutral": "#846855",

          "base-100": "#dbd8d6",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
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

