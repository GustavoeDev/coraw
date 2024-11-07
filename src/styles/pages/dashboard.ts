import { styled } from "../stitches.config";

export const DashboardContainer = styled("div", {
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "1.5rem 10rem 2rem",

  h3: {
    fontSize: "$lg",
    fontFamily: "$title",
    marginBottom: "1rem",
  },

  h4: {
    fontSize: "$md",
    fontFamily: "$title",
    margin: "1rem 0",
  },
});

export const DashboardInfo = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1rem",

  div: {
    backgroundColor: "$gray900",
    padding: "2rem 0",
    borderRadius: 8,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",

    p: {
      color: "$gray500",
    },

    span: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
      color: "$blue500",

      strong: {
        fontSize: "$xl",
      },
    },
  },
});

export const ArticlesWrapper = styled("div", {});

export const ArticlesTable = styled("table", {
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: "0 0.5rem",
  fontSize: "$sm",

  td: {
    padding: "1rem 2rem",
    backgroundColor: "$gray900",

    "&:first-child": {
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
    },

    "&:last-child": {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      textAlign: "right",
    },

    svg: {
      cursor: "pointer",
      marginLeft: "0.5rem",
    },
  },
});

export const UsersTable = styled("table", {
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: "0 0.5rem",
  fontSize: "$sm",

  td: {
    padding: "1rem 2rem",
    backgroundColor: "$gray900",

    "&:first-child": {
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
    },

    "&:last-child": {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      textAlign: "right",
    },

    svg: {
      cursor: "pointer",
      marginLeft: "0.5rem",
    },
  },
});
