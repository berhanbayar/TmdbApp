/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        backgroundLight: '#fafafa',
        backgroundDark: '#262626',
        textLight: '#000', // Light mode text color
        textDark: '#eab308',  // Dark mode text color
        iconLight: '#000', // Light mode icon color (black)
        iconDark: '#fff',  // Dark mode icon color (white)
      },
    },
  },
  darkMode: 'media', // Automatically switch based on system preference
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.text-colors': {
          color: theme('colors.textLight'), // Default text color for light mode
          '@media (prefers-color-scheme: dark)': {
            color: theme('colors.textDark'), // Apply dark mode text color when dark mode is active
          },
        },
        '.bg-colors': {
          backgroundColor: theme('colors.backgroundLight'), // Default text color for light mode
          '@media (prefers-color-scheme: dark)': {
            backgroundColor: theme('colors.backgroundDark'), // Apply dark mode text color when dark mode is active
          },
        },
        '.icon-colors': {
          color: theme('colors.iconLight'), // Light mode icon color
          '@media (prefers-color-scheme: dark)': {
            color: theme('colors.iconDark'), // Dark mode icon color
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
}
