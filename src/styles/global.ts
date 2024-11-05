import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$bg",
    color: "$white",
  },

  "body, input, textarea, button": {
    fontFamily: "$body",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.3,
  },

  ":focus": {
    outline: "0",
    boxShadow: `0 0 0 2px $blue500`,
  },
});
