module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      //this custom colors
      colors:{
        primary:{
          dark:"#1D4ED8",
          main:"#3B82F6",
         light:"#93C5FD"
        },
        info:{
          dark:"#209EBA",
          main:"#3FC1DE",
         light:"#88D9EB"
        },
        success:{
          dark:"#047857",
          main:"#10B981",
         lgith:"#6EE7B7"
        },
        warning:{
          dark:"#D97706",
          main:"#FBBF24",
         light:"#FDE68A"
        },
        danger:{
          dark:"#B91C1C",
          main:"#EF4444",
         light:"#FCA5A5"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
