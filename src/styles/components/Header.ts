import { styled } from "../stitches.config";

export const HeaderContainer = styled("header", {
  backgroundColor: "$gray900",
  padding: "1.5rem 0",

  div: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 10rem",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    a: {
      textDecoration: "none",
      color: "$gray500",
      transition: "color 0.2s",
      fontSize: "$md",

      "&:hover": {
        color: "$blue500",
      },
    },
  },
});
