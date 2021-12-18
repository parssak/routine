const safelist = [
  "bg-orange-500",
  "shadow-orange-300/10",
  "bg-indigo-500",
  "shadow-indigo-300/10",
  "bg-green-500",
  "shadow-green-300/10",
  "bg-red-500",
  "shadow-red-300/10",
  "bg-blue-500",
  "shadow-blue-300/10",
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
