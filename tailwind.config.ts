import type { Config } from "tailwindcss";

export default {
  darkMode: "media",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 1px 2px rgb(0 0 0 / 0.04), 0 12px 24px rgb(0 0 0 / 0.06)",
      },
    },
  },
  plugins: [],
} satisfies Config;

