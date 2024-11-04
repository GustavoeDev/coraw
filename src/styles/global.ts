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
    fontFamily: "Roboto, sans-serif",
    fontSize: "1rem",
    fontWeight: 400,
  },
});
