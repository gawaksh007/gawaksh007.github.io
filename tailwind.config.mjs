// Function to enable opacity modifiers with CSS variables
const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

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
        green: withOpacity('--green'),
        black: withOpacity('--black'),
        dark: withOpacity('--dark'),
        gray: withOpacity('--gray'),
        white: withOpacity('--white'),
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: 'var(--dark)',
            fontSize: '1.125rem',
            lineHeight: '1.75',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            a: {
              color: 'var(--green)',
              textDecoration: 'none',
              '&:hover': {
                color: 'var(--black)',
              },
            },
            h1: {
              color: 'var(--black)',
              fontWeight: '700',
              fontSize: '2.5rem',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h2: {
              color: 'var(--black)',
              fontWeight: '600',
              fontSize: '1.75rem',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              color: 'var(--black)',
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            'ul > li': {
              paddingLeft: '1.5em',
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ol > li': {
              paddingLeft: '1.5em',
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'var(--green)',
              marginTop: '1.5em',
              marginBottom: '1.5em',
              paddingLeft: '1em',
            },
            img: {
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.5rem',
            },
            code: {
              color: 'var(--black)',
              backgroundColor: 'var(--gray)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            pre: {
              backgroundColor: 'var(--dark)',
              color: 'var(--white)',
              padding: '1.5em',
              borderRadius: '0.5rem',
              overflow: 'auto',
            }
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...other plugins...
  ],
};
