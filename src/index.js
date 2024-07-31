const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    '.flex-center': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '.flex-between': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    '.flex-start': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    '.flex-end': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    '.flex-around': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    '.flex-evenly': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    '.flex-column': {
      display: 'flex',
      flexDirection: 'column',
    },
    'word-break': {
      wordBreak: 'break-word',
    },
    '.word-break-all': {
      wordBreak: 'break-all',
    },
    '.min-h-inherit': {
      minHeight: 'inherit',
    },
  })
})
