/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                display: ['Outfit', 'sans-serif'],
                body: ['Manrope', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
                popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
                primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
                secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
                muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
                accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
                destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                lime: {
                    50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264',
                    400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f',
                    800: '#3f6212', 900: '#365314',
                },
                
                
                whatsapp: {
                    DEFAULT: '#25D366',
                    hover: '#1ebe57'
                },
                surface: {
                    DEFAULT: '#141414',
                    elevated: '#1F1F1F',
                    dark: '#0F0F0F',
                    darker: '#080808',
                    darkest: '#070707'
                },

            },
            keyframes: {
                'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
                'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
                'fade-up': { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
                'marquee': { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
                'pulse-lime': { '0%,100%': { boxShadow: '0 0 0 0 rgba(132,204,22,0.5)' }, '50%': { boxShadow: '0 0 0 12px rgba(132,204,22,0)' } },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.6s ease-out forwards',
                'marquee': 'marquee 40s linear infinite',
                'pulse-lime': 'pulse-lime 2s infinite',
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(rgba(132,204,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(132,204,22,0.05) 1px, transparent 1px)",
            },
            backgroundSize: { 'grid': '40px 40px' },
        }
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
