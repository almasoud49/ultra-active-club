/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#36d89a",
        
"secondary": "#216b02",
        
"accent": "#0cb2cc",
        
"neutral": "#221D25",
        
"base-100": "#F9F4FA",
        
"info": "#86BDE4",
        
"success": "#166948",
        
"warning": "#FBAA09",
        
"error": "#EB2828",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
