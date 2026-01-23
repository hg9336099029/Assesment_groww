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
                    bg: 'var(--color-dark-bg)',
                    card: 'var(--color-dark-card)',
                    border: 'var(--color-dark-border)',
                    hover: 'var(--color-dark-hover)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
