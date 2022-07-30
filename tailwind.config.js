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
          dark: "#707070"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}