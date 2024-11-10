import { styled } from "../stitches.config";

export const DashboardContainer = styled("div", {
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "1.5rem 10rem 2rem",
  minHeight: "100vh",

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

  "@sm": {
    padding: "2rem",
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

  "@sm": {
    gridTemplateColumns: "1fr",
  },
});

export const TableContainer = styled("div", {
  overflowX: "auto",
  whiteSpace: "nowrap",
});

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
    },

    button: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      background: "none",
      border: 0,
      color: "$white",

      a: {
        lineHeight: 0,
        color: "$white",
      },
    },
  },
});

export const TdButton = styled("td", {
  display: "flex",
  gap: "0.5rem",
  justifyContent: "right",
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

    button: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      background: "none",
      border: 0,
      color: "$white",
    },
  },
});
