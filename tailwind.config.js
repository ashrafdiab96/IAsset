/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontSize: {
      sm: '0.75rem',
      label: '0.815rem',
      base: '0.875rem',
      xl: [
        '0.875rem',
        {
          lineHeight: '21px',
          fontWeight: '700',
        },
      ],
      '2xl': '1rem',
      '3xl': '1.5rem',
    },
    extend: {
      colors: {
        black: 'var(--black)',
        'auth-bg': 'var(--auth-bg)',
        content: 'var(--content)',
        white: 'var(--white)',

        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
        },

        primary: 'var(--primary)',
        'primary-medium-100': 'var(--primary-medium-100)',
        'primary-light-50': 'var(--primary-light-50)',

        yellow: 'var(--yellow)',
        'yellow-medium': 'var(--yellow-medium)',
        'yellow-light': 'var(--yellow-light)',

        green: 'var(--green)',
        'green-medium': 'var(--green-medium)',
        'green-light': 'var(--green-light)',

        secondary: 'var(--secondary)',
        'secondary-medium': 'var(--secondary-medium)',
        'secondary-light': 'var(--secondary-light)',

        sky: 'var(--sky)',
        'sky-medium': 'var(--sky-medium)',
        'sky-light': 'var(--sky-light)',

        rose: 'var(--rose)',
        'rose-medium': 'var(--rose-medium)',
        'rose-light': 'var(--rose-light)',
        'dark-blue': 'var(--dark-blue)',
        'dark-blue-medium': 'var(--dark-blue-medium)',
        'dark-blue-light': 'var(--dark-blue-light)',

        error: {
          50: 'var(--error-50)',
          100: 'var(--error-100)',
          200: 'var(--error-200)',
          300: 'var(--error-300)',
        },

        success: {
          50: 'var(--success-50)',
          100: 'var(--success-100)',
          200: 'var(--success-200)',
          300: 'var(--success-300)',
        },

        warning: {
          50: 'var(--warning-50)',
          100: 'var(--warning-100)',
          200: 'var(--warning-200)',
          300: 'var(--warning-300)',
        },
      },
    },
  },
  plugins: [],
};
