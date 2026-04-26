import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0a0a',
        'bg-card': '#111111',
        'bg-elevated': '#161616',
        gold: '#c49b5b',
        'gold-light': '#d4b47a',
        'gold-muted': '#8b6d3f',
        white: '#fefffc',
        'off-white': '#f0ece4',
        gray: '#a1a1a1',
        'gray-dark': '#4a4a4a',
        'border-gold': 'rgba(196,155,91,0.25)',
        'border-dark': 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      maxWidth: {
        '225': '14.0625rem', // 225px
        '330': '20.625rem', // 330px
        '130': '8.125rem', // 130px
        '200': '12.5rem', // 200px
      },
      spacing: {
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      // Adding CSS variables for use with arbitrary values
      backgroundColor: {
        'custom-gold': 'var(--gold)',
        'custom-gold-light': 'var(--gold-light)',
        'custom-bg-dark': 'var(--bg-dark)',
        'custom-bg-card': 'var(--bg-card)',
        'custom-bg-elevated': 'var(--bg-elevated)',
      },
      textColor: {
        'custom-gold': 'var(--gold)',
        'custom-white': 'var(--white)',
        'custom-gray': 'var(--gray)',
      },
      borderColor: {
        'custom-gold': 'var(--border-gold)',
        'custom-dark': 'var(--border-dark)',
      }
    },
  },
  plugins: [],
};

export default config;