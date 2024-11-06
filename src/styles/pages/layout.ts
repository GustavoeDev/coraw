import { styled } from "../stitches.config";

export const Footer = styled("footer", {
  backgroundColor: "$gray900",
  padding: "1rem 0",

  div: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 10rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    p: {
      color: "$gray500",
      fontSize: "$md",

      strong: {
        color: "$blue500",
      },
    },

    "@sm": {
      flexDirection: "column",
      gap: "0.5rem",
      padding: 0,
    },
  },
});
