/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
      },
      colors: {
        orchid: "#741AAC",
        cinnabar: "#E43D40",
        coral: "#FF8370",
        ungu: "#5D50C6",
        pink: "#F85E9F",
        orange: "#FF5722",
        grey: "#191825",
      },
    },
  },
  plugins: [],
};

// apapun yang ada di input.css akan langsung diterapkan ke html selayaknya file css pada umumnya
// sedangkan apapun yang ada di file tailwind.config.js hanya diterapkan apabila kita memanggilnya dalam class
// ternyata font yang sudah dipanggil dengan input.css tidak usah dipanggil lagi di tailwind.config.js
