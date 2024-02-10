/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('./images/bg-sidebar-mobile.svg')",
        desktop: "url('./images/bg-sidebar-desktop.svg')",
        none: "url('')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        full: "100% auto",
      },
      colors: {
        blue: {
          marine: "#092440",
          purplishBlue: "#3f54a3",
          pastelBlue: "#a4d7f5",
          lightBlue: "#d3f3ff",
          strawberryRed: "#f26568",
        },
        gray: {
          cool: "#9ba4b4",
          light: "#d5dce3",
          magnolia: "#f0f6ff",
          alabaster: "#fefcff",
          white: "#ffffff",
        },
      },
      fontFamily: {
        body: ["Ubuntu"],
      },
    },
  },
  plugins: [],
};
