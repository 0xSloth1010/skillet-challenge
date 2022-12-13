const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      header: 'rgb(17, 24, 39)',
      // common colors
      transparent: 'transparent',
      purple: '#7B48E8',
      yellow: '#FFB359',
      pink: '#ED6B82',
      blue: '#2A7DFA',
      'blue-light': '#3397F2',
      navy: '#348CF4',
      green: '#5DD39B',
      'green-light': '#4CC920',
      orange: '#E98566',
      cyan: '#2AC6DB',
      gray: '#273855',
      red: '#dd2357',
      white: '#fff',
      black: '#000',

      'youtube-red': '#FF0100',
      'discord-purple': '#5E6BFF',
      'twitter-blue': '#55B6FF',
      'telegram-blue': '#42C8FD',

      btn: {
        light: {
          tint: '#edeef2',
          'tint-active': '#dfe3f5',
        },
        dark: {
          tint: '#273855',
          'tint-active': '#475875',
        },
        primary: '#38EF7D',
        'primary-light': '#3397F2',
        'primary-translucent': '#4DBAD6aa',
        'primary-active': '#46B2A7',
        secondary: '#46B2A7',
        'secondary-translucent': '#46B2A7aa',
        'secondary-active': '#4DBAD6',
        tertiary: '#7B48E8',
        'tertiary-active': '#348CF4',
        azure: '#348CF4',
        'accent-active': '#7B48E8',
        alert: '#ED6B82',
        'alert-active': '#7B48E8',

        fancy: {
          'primary-start': '#46B2A7',
          'primary-end': '#3B82F6',
          'primary-start-hover': '#46B2A7DD',
          'primary-end-hover': '#3B82F6DD',
          'error-start': '#3B82F6',
          'error-end': '#F537C3',
          'error-start-hover': '#3B82F6DD',
          'error-end-hover': '#F537C3DD',
        },
      },

      // light mode
      light: {
        border: '#202a3d',
        card: '#f7f9f9',
        'layout-primary': '#F7F8FA',
        'bg-primary': '#F0F1F3',
        'bg-secondary': '#FCFCFC',
        'border-primary': '#afb6cc',
        'gray-light': '#E5E5E5',
        'gray-primary': '#7C859F',
        'dark-gray': 'rgba(247, 247, 252, 0.72)',
        'typo-gray': '#7C859F',
        'typo-primary': '#1F1F41',
        'green-light': '#6A8E8B',
        'green-lighter': '#46b2a71f',
      },

      // dark
      dark: {
        border: '#2f3336',
        card: '#16181b',
        'header-border': 'rgb(31, 41, 55)',
        'bg-primary': '#121526',
        'bg-secondary': '#232E42',
        'border-primary': '#273855',
        'border-secondary': '#2F3336',
        'gray-light': '#2E3C56',
        'gray-primary': '#75849D',
        'dark-gray': '#29354a',
        'typo-gray': '#71767b',
        'typo-primary': '#E2EBFB',
        'green-light': '#6A8E8B',
        'green-lighter': '#46b2a71f',
      },
    },
    fontFamily: {
      primary: ['IBM Plex Sans', 'sans-serif'],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      h1: [
        '48px',
        {
          letterSpacing: '-0.04em',
          lineHeight: '42px',
          fontWeight: 500,
        },
      ],
      h2: [
        '28px',
        {
          letterSpacing: '0.02em',
          lineHeight: '42px',
          fontWeight: 600,
        },
      ],
      h3: [
        '24px',
        {
          letterSpacing: '0.025em',
          lineHeight: '36px',
          fontWeight: 800,
        },
      ],
      h4: [
        '21px',
        {
          letterSpacing: '-0.01em',
          lineHeight: '31px',
          fontWeight: 800,
        },
      ],
      h5: [
        '21px',
        {
          letterSpacing: '-0.01em',
          lineHeight: '17px',
          fontWeight: 800,
        },
      ],
      subtitle1: [
        '17px',
        {
          letterSpacing: '-0.02em',
          lineHeight: '25px',
          fontWeight: 800,
        },
      ],
      subtitle2: [
        '17px',
        {
          letterSpacing: '-0.01em',
          lineHeight: '25px',
          fontWeight: 600,
        },
      ],
      body: [
        '14px',
        {
          letterSpacing: '0.03em',
          lineHeight: '21px',
          fontWeight: 500,
        },
      ],
      caption: [
        '12px',
        {
          letterSpacing: '0.03em',
          lineHeight: '18px',
          fontWeight: 700,
        },
      ],
      'caption-xs': [
        '11px',
        {
          letterSpacing: '0.03em',
          lineHeight: '18px',
          fontWeight: 700,
        },
      ],
    },
    extend: {
      backgroundImage: {
        elliptical:
          'radial-gradient(ellipse at 50% 50%, rgba(46, 92, 106, 30%) 0%, rgb(17, 24, 39) 60%)',
      },
    },
  },
  plugins: [],
}
