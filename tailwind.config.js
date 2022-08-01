module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    screens: {
      "sm": "605px",
      "md": "1064px",
      "lg": "1320px"
    },
    container: {
      center: true,
      padding: "12px"
    },
    fontSize: {
      'xs':['0.75rem'],
      'sm':['0.875rem'],
      'base':['1rem'],
      'lg':['1.125rem'],
      'xl':['1.25rem'],
      '2xl':['1.5rem'],
      '3xl':['1.875rem'],
      '4xl':['2.25rem'],
      '5xl':['3rem'],
      '6xl':['3.75rem'],
      '7xl':['4.5rem'],
      '8xl':['6rem'],
      '9xl':['8rem'],
    },
    extend: {
      colors: {
        "main": {
          light: "#FBF2F2",
          DEFAULT: "#AA0601",
          deep: "#9F1213",
          dark: "#650300"
        },
        "brown": {
          DEFAULT: "#B75929",
          dark: "#5F3E2D"
        },
        "gray": {
          light: "#d6d6d6",
          DEFAULT: "#DEE2E6",
          dark: "#707070",
          text: "#495057",
          content: "#555"
        },
      }
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
}