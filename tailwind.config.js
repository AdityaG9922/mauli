/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        steel: {
          50: '#eef1f5',
          100: '#d6dce6',
          200: '#b0bccf',
          300: '#7d90ab',
          400: '#5a6f8a',
          500: '#3d5268',
          600: '#2a3d52',
          700: '#1a2a3a',
        },
        gold: {
          light: '#c8a96e',
          DEFAULT: '#b8935a',
        },
      },
      boxShadow: {
        soft: '0 2px 12px rgba(30,40,55,0.07), 0 1px 3px rgba(30,40,55,0.04)',
        card: '0 4px 24px rgba(30,40,55,0.09), 0 1px 4px rgba(30,40,55,0.05)',
        float: '0 8px 40px rgba(30,40,55,0.14), 0 2px 8px rgba(30,40,55,0.08)',
      },
      borderRadius: {
        xl: '22px',
        '2xl': '32px',
      },
    },
  },
  plugins: [],
}
