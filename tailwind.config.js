/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0d2545',
        navy: '#1e3a5f',
        'navy-light': '#2a4a6f',
        gold: '#c8960c',
        'gold-light': '#e0aa14',
        offwhite: '#f4f7fb',
        paper: '#eaf0f8',
        white: '#ffffff',
        'text-dark': '#0d1f35',
        'text-mid': '#3a5270',
        'text-muted': '#6a7f96',
        rule: 'rgba(30,58,95,0.12)',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        epilogue: ['Epilogue', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
