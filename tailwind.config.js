/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'hsl(160, 84%, 39%)',
                    hover: 'hsl(160, 84%, 45%)',
                    light: 'hsl(160, 84%, 50%)',
                },
                dark: {
                    bg: '#0f172a',      // Deep navy background
                    card: '#1e293b',    // Card background
                    border: '#334155',  // Border color
                    hover: '#334155',   // Hover state
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
