/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        grotesk: ["Grotesk", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      colors: {
        green: "var(--green)",
        black: "var(--black)",
        dark: "var(--dark)",
        gray: "var(--gray)",
        white: "var(--white)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--dark)',
            a: {
              color: 'var(--green)',
              '&:hover': {
                color: 'var(--black)',
              },
            },
            h1: {
              color: 'var(--black)',
            },
            h2: {
              color: 'var(--black)',
            },
            h3: {
              color: 'var(--black)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
