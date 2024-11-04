import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#ffffff",

      blue500: "#3B6AE1",

      red500: "#FF1313",

      gray400: "#B9C0C6",
      gray600: "#666666",
      gray500: "#8C8C8C",
      gray700: "#3D3D3D",
      gray800: "#292929",
      gray900: "#1F1F1F",

      bg: "#131313",
    },

    fontSizes: {
      "2xl": "3rem",
      xl: "2rem",
      lg: "1.5rem",
      md: "0.875rem",
      sm: "0.75rem",
    },
  },
});
