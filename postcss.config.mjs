import typography from "@tailwindcss/typography";

const config = {
  plugins: {
    "@tailwindcss/postcss": {
      plugins: [
        typography
      ]
    },
  },
};
export default config;