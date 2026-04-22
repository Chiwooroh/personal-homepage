/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Anton', 'sans-serif'],
        condiment: ['Condiment', 'cursive'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        background: '#010828',
        cream: '#EFF4FF',
        neon: '#6FFF00',
      },
      maxWidth: {
        content: '1831px',
      },
    },
  },
  plugins: [],
}
