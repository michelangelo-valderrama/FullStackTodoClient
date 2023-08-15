/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
      width: {
        screen: ["100vw /* fallback for Opera, IE and etc. */", "100dvw"],
      },
      fontFamily: {
        sans: ["'cascadia'"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
