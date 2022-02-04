const colors = require('tailwindcss/colors')
module.exports = {
  mode: "jit",  
  purge: [
      './partials/**/*.hbs', 
      './pages/**/*.hbs',
      './templates/**/*.hbs',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {

  colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      redcolor       :   '#ba1519',
      textcolor      :   '#373433',
      bodycolor      :    '#e9e3dd',
      bodercolor     :    '#f3f2f0',
      navbodercolor  :    '#dddad3',
      pink: '#78246f',
    },


    container: {
        center: true,
        padding: {
          DEFAULT: '1.875rem',
          md: '4.6875rem',
          lg: '9.375rem',
        },
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1258px',
      // => @media (min-width: 1280px) { ... }

    },
    fontFamily: {
      'Futura': ["Futura Std", "sans-serif"],
      'Arial': ["Arial", "sans-serif"],
    },
    borderRadius: {
     'none': '0',
     'sm': '0.125rem',
     DEFAULT: '0.25rem',
     DEFAULT: '4px',
     'md': '0.375rem',
     'lg': '0.5rem',
     'full': '9999px',
     'large': '12px',
     'custom-radius' : '72px;'
    },
      extend: {
    

      },



    },
    variants: {
      extend: {
        backgroundImage: {
          'header-bg': "url('/images/header-bg.jpg')",
          'mission': "url('/images/mission.jpg')",
          'marker': "url('images/googlemap-marker.png')",
         }
      },

    visibility: ['group-hover', 'group-focus'],
    textColor: ['hover', 'focus', 'group-focus'],
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']


    },
    plugins: [],
  }
