import { styled } from "../stitches.config";

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
