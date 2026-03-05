import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--foreground)',
        accent: 'var(--lavender)',
        pink: 'var(--pink)',
        lavender: 'var(--lavender)',
        aqua: 'var(--aqua)',
        pearl: 'var(--pearl)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'holo-shift': 'holo-shift 6s ease infinite',
        'orb-morph': 'orb-morph 8s ease-in-out infinite',
        'sparkle': 'sparkle-pulse 3s ease-in-out infinite',
        'float-in': 'float-in 0.7s cubic-bezier(0.23, 1, 0.32, 1) both',
      },
      keyframes: {
        'holo-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'sparkle-pulse': {
          '0%, 100%': { opacity: '0.1', transform: 'scale(0.8)' },
          '50%': { opacity: '0.7', transform: 'scale(1.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
