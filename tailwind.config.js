/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#1a202c",
          "secondary": "#2d3748",
          "accent": "#9ca3af",
          "neutral": "#e2e8f0",
          "base-100": "#4a5568",
          "info": "#64b5f6",
          "success": "#48bb78",
          "warning": "#f6ad55",
          "error": "#f56565",
        },
        light: {
          "primary": "#ffffff",
          "secondary": "#f5f3f2",
          "accent": "#73737375",
          "neutral": "#846855",
          "base-100": "#dbd8d6",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
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

