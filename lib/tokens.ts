/**
 * ByteSpace Design Tokens
 * 
 * Auto-generated token representation matching the Tailwind CSS v4 @theme architecture.
 * Usable across TypeScript/JavaScript, Framer Motion, Canvas, and SVG.
 */

export const tokens = {
  colors: {
    neutral: {
      50: "#f5f5f6",
      100: "#e5e6e8",
      200: "#ced0d3",
      300: "#abaeb5",
      400: "#82868e",
      500: "#666973",
      600: "#585a62",
      700: "#4b4c53",
      800: "#424348",
      900: "#3a3b3f",
      950: "#242528",
    },
    primary: {
      50: "#e7f6ff",
      100: "#d3eeff",
      200: "#b0ddff",
      300: "#81c5ff",
      400: "#4f9dff",
      500: "#2872ff",
      600: "#0445ff",
      700: "#0043ff",
      800: "#003be2",
      900: "#0b36a4",
      950: "#071e5f",
    },
    secondary: {
      50: "#fdffe4",
      100: "#faffc5",
      200: "#f2ff92",
      300: "#e4ff54",
      400: "#d4fb20",
      500: "#cbfc01",
      600: "#8cb400",
      700: "#6a8902",
      800: "#546b09",
      900: "#465a0d",
      950: "#243300",
    },
    pure: {
      black: "#000000",
      white: "#ffffff",
    },
  },
  breakpoints: {
    xs: "390px",  // Mobile
    sm: "810px",  // Tablet
    md: "1200px", // Laptop
    lg: "1440px", // Desktop
    xl: "1920px", // Big Screen
  },
  radius: {
    none: "0px",
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
    "2xl": "48px",
    full: "9999px",
  },
  spacing: {
    "3xs": "2px",
    "2xs": "4px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px",
  },
  typography: {
    fonts: {
      heading: "var(--font-heading)",
      sans: "var(--font-sans)",
      body: "var(--font-body)",
    },
    scale: {
      headingL: {
        fontSize: "72px",
        lineHeight: "1.2",
        fontWeight: 600,
        fontFamily: "Poppins, sans-serif",
      },
      headingM: {
        fontSize: "44px",
        lineHeight: "1.2",
        fontWeight: 600,
        fontFamily: "Poppins, sans-serif",
      },
      headingS: {
        fontSize: "36px",
        lineHeight: "1.2",
        fontWeight: 600,
        fontFamily: "Poppins, sans-serif",
      },
      headingXS: {
        fontSize: "20px",
        lineHeight: "1.2",
        fontWeight: 600,
        fontFamily: "Poppins, sans-serif",
      },
      bodyL: {
        fontSize: "18px",
        lineHeight: "1.6",
        fontWeight: 400,
        fontFamily: "Satoshi, sans-serif",
      },
      bodyM: {
        fontSize: "16px",
        lineHeight: "1.6",
        fontWeight: 400,
        fontFamily: "Satoshi, sans-serif",
      },
      bodyS: {
        fontSize: "14px",
        lineHeight: "1.6",
        fontWeight: 400,
        fontFamily: "Satoshi, sans-serif",
      },
      bodyXS: {
        fontSize: "12px",
        lineHeight: "1.6",
        fontWeight: 400,
        fontFamily: "Satoshi, sans-serif",
      },
      labelL: {
        fontSize: "18px",
        lineHeight: "1.2",
        fontWeight: 500,
        fontFamily: "Satoshi, sans-serif",
      },
      labelM: {
        fontSize: "16px",
        lineHeight: "1.2",
        fontWeight: 500,
        fontFamily: "Satoshi, sans-serif",
      },
      labelS: {
        fontSize: "14px",
        lineHeight: "1.2",
        fontWeight: 500,
        fontFamily: "Satoshi, sans-serif",
      },
      labelXS: {
        fontSize: "12px",
        lineHeight: "1.2",
        fontWeight: 500,
        fontFamily: "Satoshi, sans-serif",
      },
    },
  },
} as const;

export type DesignTokens = typeof tokens;
