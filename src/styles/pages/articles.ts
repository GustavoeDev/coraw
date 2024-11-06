import { styled } from "../stitches.config";

export const HeaderArticles = styled("header", {
  padding: "1.5rem 0",
  backgroundColor: "$gray900",

  div: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 10rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "@sm": {
      padding: "1.5rem 2rem",
    },
  },
});

export const HeaderNavigation = styled("nav", {
  display: "flex",
  gap: "1rem",
  position: "relative",

  a: {
    color: "$gray500",
    fontSize: "$md",
    textDecoration: "none",
    transition: "color 0.2s",

    '&[data-active="true"]': {
      color: "$blue500",
    },

    "&:hover": {
      color: "$blue500",
    },
  },

  p: {
    color: "$gray500",
    fontSize: "$md",

    span: {
      color: "$white",
    },
  },

  "@md": {
    display: "none",
  },
});

export const ArticlesContainer = styled("main", {
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "1.5rem 10rem 4.5rem",

  h3: {
    fontFamily: "$title",
    fontSize: "$lg",
    marginBottom: "1rem",
  },

  "& > div": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",

    "@md": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@xs": {
      gridTemplateColumns: "1fr",
    },
  },

  "@sm": {
    padding: "2rem",
  },
});
