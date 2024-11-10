import { styled } from "../stitches.config";

export const ArticleEditContainer = styled("div", {
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "4rem 10rem 4rem",
  minHeight: "100vh",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "@sm": {
    padding: "2rem",
  },
});

export const EditForm = styled("form", {
  maxWidth: "500px",
  width: "100%",

  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  h3: {
    fontFamily: "$title",
    fontSize: "$lg",
    marginBottom: "1rem",
  },

  div: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",

    strong: {
      color: "$red500",
    },

    input: {
      backgroundColor: "$gray800",
      border: 0,
      padding: "0.75rem",
      color: "$white",
      borderRadius: 6,
      fontSize: "$md",

      "&::placeholder": {
        color: "$gray600",
      },
    },

    textarea: {
      backgroundColor: "$gray800",
      border: 0,
      padding: "0.75rem",
      color: "$white",
      borderRadius: 6,
      fontSize: "$md",
      resize: "none",
      height: "200px",

      "&::placeholder": {
        color: "$gray600",
      },
    },

    '& input[type="file"]': {
      display: "none",
    },

    p: {
      fontSize: "$sm",
      color: "$gray500",
    },
  },

  button: {
    backgroundColor: "$blue500",
    border: 0,
    color: "$white",
    padding: "1rem 0",
    borderRadius: 6,
    fontSize: "$md",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "1rem",
  },
});

export const ContainerEdit = styled("a", {
  position: "relative",
  textDecoration: "none",
  color: "$white",
});

export const FileSelectEdit = styled("div", {
  height: "2.68rem",
  backgroundColor: "$gray800",
  padding: "0.75rem",
  borderRadius: 6,
  cursor: "pointer",
  fontSize: "$md",
  color: "$gray600",
});

export const FileEdit = styled("div", {
  position: "absolute",
  backgroundColor: "$gray700",
  padding: "0.75rem 0",
  maxWidth: "7rem",
  width: "100%",
  textAlign: "center",
  top: 0,
  right: 0,
  borderRadius: 6,
  cursor: "pointer",
  fontSize: "$md",
});
