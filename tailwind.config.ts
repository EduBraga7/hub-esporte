import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0F1419',
        surface: '#161B22',
        surface2: '#1F2630',
        line: '#2D3542',
        text: {
          DEFAULT: '#F0F4F8',
          muted: '#8B9AAF',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          soft: 'rgb(var(--accent-rgb) / 0.15)',
          secondary: 'rgb(var(--accent-secondary) / <alpha-value>)',
        },
        objetivo: {
          peso: '#FB923C',
          massa: '#A3E635',
          saude: '#2DD4BF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--accent-rgb) / 0.4), 0 8px 30px -10px rgb(var(--accent-rgb) / 0.35)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config
