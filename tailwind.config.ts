import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0a0a0f',
          alt: '#12121a',
          card: '#1a1a24',
          cardHover: '#20202c',
        },
        line: '#2a2a38',
        ink: {
          DEFAULT: '#e5e7eb',
          muted: '#94a3b8',
          faint: '#64748b',
        },
        accent: {
          DEFAULT: '#6366f1',
          soft: 'rgba(99,102,241,0.14)',
          strong: '#4f46e5',
          ring: 'rgba(99,102,241,0.35)',
        },
        success: {
          DEFAULT: '#22c55e',
          soft: 'rgba(34,197,94,0.12)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-unbounded)', 'var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        card: '0 1px 0 rgba(255,255,255,0.02) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
        accent: '0 8px 24px -8px rgba(99,102,241,0.5)',
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.7)' },
          '50%': { boxShadow: '0 0 0 6px rgba(34,197,94,0)' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
