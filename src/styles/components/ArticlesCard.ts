import { styled } from "../stitches.config";

export const ArticlesCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$gray900",
  borderRadius: 6,

  img: {
    width: "100%",
    height: "112px",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 6,
  },

  div: {
    display: "flex",
    gap: "0.5rem",
    flexDirection: "column",

    padding: "0.5rem",

    span: {
      color: "$gray500",
      fontSize: "$sm",
    },

    h4: {
      fontWeight: "normal",
      fontSize: "$md",
      color: "$white",
    },

    p: {
      fontSize: "$sm",
      color: "$gray400",
    },
  },
});
