const safelist = [
  "bg-orange-500",
  "shadow-orange-300/30",
  "bg-indigo-500",
  "shadow-indigo-300/30",
];

module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  safelist,
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "4rem",
        lg: "6rem",
        xl: "8rem",
      },
      center: true,
    },
  },
  variants: {},
  plugins: [],
};
