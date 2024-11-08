import { styled } from "../stitches.config";

export const RegistrationContainer = styled("div", {
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "0 10rem",
  minHeight: "100vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",

  "@sm": {
    flexDirection: "column",
    padding: "2rem",
    gap: "2rem",
  },
});

export const RegistrationContent = styled("div", {
  width: "100%",
  maxWidth: "31rem",

  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  h1: {
    fontFamily: "$title",
    fontSize: "$2xl",
    color: "$blue500",
  },

  p: {
    color: "$gray400",
    lineHeight: 1.6,
  },
});

export const RegistrationIcons = styled("div", {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gridGap: "0.75rem",

  div: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",

    svg: {
      color: "$blue500",
    },
  },

  "@md": {
    gridTemplateColumns: "1fr",
  },
});

export const RegistrationModal = styled("form", {
  backgroundColor: "$gray900",
  padding: "1.5rem",
  borderRadius: "8px",

  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  h3: {
    fontFamily: "$title",
    fontSize: "$lg",
  },

  button: {
    width: "100%",
    border: 0,
    backgroundColor: "$blue500",
    padding: "1rem 0",
    borderRadius: 6,
    color: "$white",
    fontSize: "$md",
    cursor: "pointer",
  },

  p: {
    textAlign: "center",
    fontSize: "$sm",

    a: {
      color: "$blue500",
      textDecoration: "none",
    },
  },

  "@md": {
    maxWidth: "31rem",
    width: "100%",
  },
});

export const RegistrationModalInputs = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  input: {
    padding: "0.75rem",
    border: 0,
    borderRadius: 6,
    backgroundColor: "$gray800",
    color: "$white",
    fontSize: "$md",
  },
});

export const RegistrationTerms = styled("div", {
  display: "flex",
  alignItems: "center",
  fontSize: "$sm",
  gap: "0.5rem",
});
