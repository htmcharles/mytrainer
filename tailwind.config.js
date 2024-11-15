/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          'primary': '#FF6347',   // Example: Tomato red for primary actions
          'secondary': '#222222', // Example: Sea Green for secondary elements
          'accent': '#FFD700',    // Example: Gold for accents like buttons or links
          'background': '#121212', // Example: Dark background for screen
          'text-primary': '#FFFFFF', // White text color
          'text-secondary': '#A9A9A9', // Grey text for secondary info
              'border': '#555555',    // Border color for inputs

            },
        borderRadius: {
                '12': '12px',
                '8': '8px',
            },
        boxShadow: {
                'white': '1px 1px 1px 1px rgba(255, 229, 59, 0.2)',
            },
        spacing: {
                '128': '8rem', // Custom margin value
              }
      },
    },
    plugins: [],
  }
