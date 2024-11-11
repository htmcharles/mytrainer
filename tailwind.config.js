/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          'primary': '#FF6347',   // Example: Tomato red for primary actions
          'secondary': '#2E8B57', // Example: Sea Green for secondary elements
          'accent': '#FFD700',    // Example: Gold for accents like buttons or links
          'background': '#333333', // Example: Dark background for screen
          'text-primary': '#FFFFFF', // White text color
          'text-secondary': '#A9A9A9', // Grey text for secondary info
          'border': '#555555',    // Border color for inputs
        },
      },
    },
    plugins: [],
  }
