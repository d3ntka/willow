/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      inter: ["Inter", "Roboto", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      tan: "#ECE8D9",
      green: {
        DEFAULT: "#1C3F3A",
        light: "#485B60",
        alt: "#26534C",
      },
      gray: {
        DEFAULT: "#DDE3E4",
        100: "#B4BBBD",
      },
      dark: "#102226",
      light: "#F1F3F3",
      black: "#000000",
      white: "#ffffff",
      inherit: "inherit",
      transparent: "transparent",
    },
    screens: {
      xs: "520px",
      sm: "782px",
      md: "874px",
      lg: "984px",
      xl: "1124px",
      "2xl": "1344px",
      // '3xl': '1536px',
    },
    extend: {
      spacing: {
        18: "4.5rem",
        19: "4.75rem",
        25: "6.25rem",
        30: "7.5rem",
        45: "11.25rem",
        75: "18.75rem",
        92: "23rem",
        100: "25rem",
        108: "27rem",
      },
      padding: {
        hero: "8.3rem",
      },
      fontSize: {
        "2xs": "0.6875rem",
        "2sm": "0.9375rem",
      },
      boxShadow: {
        customers: "3rem 3rem 4.5rem 0px rgba(117, 114, 104, 0.16)",
      },
      minHeight: (theme) => ({...theme('spacing')}),
      minWidth: (theme) => ({...theme('spacing')}),
      maxWidth: (theme) => ({...theme('spacing')}),
    },
  },
  plugins: [
    function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          fontSize: "4.5rem",
          lineHeight: "1.1",
          letterSpacing: "0.18rem",
        },
        h2: {
          fontSize: "3rem",
          lineHeight: "1.15",
          letterSpacing: "0.09rem",
        },
        p: {
          //   lineHeight: '1.5'
        },
      });
      addComponents({
        ".btn": {
          fontSize: "0.875rem",
          lineHeight: "1",
          display: "inline-flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "currentColor",
          fontFamily: theme("fontFamily.inter"),
          textDecoration: "none",
          padding: ".8rem .5rem .8rem 1.5rem",
          width: "min(10rem,100%)",
          whiteSpace: "nowrap",
          gap: ".25rem",
          minWidth: "min-content",
        },        
        ".img-cover": {
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        },
        ".img-contain": {
          objectFit: "contain",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        },
        ".grid-stack": {
          display: "grid",
          gridTemplateAreas: '"stack"',
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr",
        },
        ".grid-stack-child": {
          gridArea: "stack",
        },
      });
      addUtilities({
        ".svg-current": {
          "& svg path": {
            fill: "currentColor",
          },
        },

      });
    },
    function ({ addVariant }) {
      addVariant("svg", ["&>svg"]);
      addVariant("i", ["&>i"]);
    },
  ],
};
