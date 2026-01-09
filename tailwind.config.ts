import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                sage: {
                    50: '#F4F7F5',
                    100: '#E3EBE6',
                    200: '#C5D6CC',
                    300: '#A3C2B0',
                    400: '#87AB96',
                    500: '#6B9078',
                    600: '#4F705D',
                    700: '#3E5649',
                    800: '#2D4438',
                    900: '#1F3027',
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'pulse-soft': 'pulseSoft 3s infinite',
                'blob': 'blob 7s infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shake': 'shake 2s cubic-bezier(.36,.07,.19,.97) infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
                'message-flow': 'messageFlow 4s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
                shake: {
                    '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                    '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
                    '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                    '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(107, 144, 120, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(107, 144, 120, 0.6)' }
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                messageFlow: {
                    '0%': { transform: 'translateX(0) scale(1)', opacity: '1' },
                    '45%': { transform: 'translateX(120%) scale(0.5)', opacity: '0.5' },
                    '55%': { transform: 'translateX(120%) scale(0.5)', opacity: '0' },
                    '100%': { transform: 'translateX(240%) scale(1)', opacity: '0' }
                }
            },
        },
    },
    plugins: [],
}

export default config
