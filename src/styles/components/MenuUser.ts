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
    borderRight: "0.5px solid $gray600",
    paddingRight: "1rem",

    span: {
      color: "$white",
    },
  },

  "@md": {
    display: "none",
  },
});

export const NavIcon = styled("div", {
  cursor: "pointer",
  zIndex: 1000,
  position: "absolute",
  top: "1.7rem",
  right: 0,

  variants: {
    position: {
      fixed: {
        position: "fixed",
        top: "1.7rem",
        right: 0,
      },
    },
  },

  svg: {
    color: "$white",
    display: "none",
    zIndex: 9999,
  },

  "@md": {
    display: "none",
    svg: {
      display: "block",
    },
  },
});

export const NavMenu = styled("nav", {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundColor: "$bg",
  zIndex: 999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  clipPath: "circle(100px at 100% -25%)",
  transition: "clip-path 1s ease-out",
  pointerEvents: "none",

  variants: {
    active: {
      true: {
        clipPath: "circle(1500px at 100% -25%)",
        pointerEvents: "all",
      },
    },
  },
});

export const NavList = styled("ul", {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5rem",
  opacity: 0,
  transition: "opacity 0.5s ease",

  li: {
    fontSize: "$lg",
  },

  a: {
    color: "$white",
    textDecoration: "none",
    fontSize: "1.25rem",
    opacity: 0,
    transition: "color 0.2s",

    "&:hover": {
      color: "$blue500",
    },
  },

  variants: {
    active: {
      true: {
        opacity: 1,
        a: {
          opacity: 1,
        },
      },
    },
  },
});
