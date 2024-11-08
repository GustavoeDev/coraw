import { styled } from "../stitches.config";

export const LoginContainer = styled("div", {
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "0 10rem",
  minHeight: "100vh",
  gap: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  img: {
    objectFit: "cover",

    "@xl": {
      display: "none",
    },
  },

  "@xl": {
    justifyContent: "center",
  },

  "@sm": {
    padding: "2rem",
  },
});

export const LoginContent = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "4rem",

  div: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },

  h2: {
    fontSize: "$xl",
    fontFamily: "$title",
  },

  p: {
    color: "$gray500",
  },

  "@xl": {
    maxWidth: "350px",
    flex: 1,
  },
});

export const LoginInput = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  div: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",

    "&:nth-child(1)": {
      marginBottom: "1rem",
    },
  },

  input: {
    padding: "0.75rem",
    border: 0,
    borderRadius: 6,
    backgroundColor: "$gray800",
    color: "$white",
    fontSize: "$md",
  },
});

export const LoginFooter = styled("div", {
  button: {
    border: 0,
    padding: "1rem 0",
    borderRadius: 6,
    backgroundColor: "$blue500",
    color: "$white",
    fontSize: "$md",
    cursor: "pointer",
    marginBottom: "1rem",
  },

  span: {
    textAlign: "center",
    fontSize: "$sm",

    a: {
      color: "$blue500",
      textDecoration: "none",
    },
  },
});
