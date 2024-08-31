/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto"],
      },
      colors: {
        orchid: "#741AAC",
        cinnabar: "#E43D40",
      },
    },
  },
  plugins: [],
};

// apapun yang ada di input.css akan langsung diterapkan ke html selayaknya file css pada umumnya
// sedangkan apapun yang ada di file tailwind.config.js hanya diterapkan apabila kita memanggilnya dalam class
