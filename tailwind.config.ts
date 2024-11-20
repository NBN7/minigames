import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wordle-success": "#85CCB6",
        "wordle-warning": "#F5B13C",
        "wordle-error": "#EE7B88",
      },
    },
  },
  // eslint-disable-next-line
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
