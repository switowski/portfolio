module.exports = {
  content: ['./src/**/*.{js,md,njk,svg,pcss}'],
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
  // darkMode: 'class',  Probably not needed anymore since I use data-theme
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {
      colors: {
        'dark-indigo': '#10101d',
        // TODO: is this even used?
        'color-bg': 'var(--color-bg)',
        'color-text': 'var(--color-text)',
      },
    },
  },
};
