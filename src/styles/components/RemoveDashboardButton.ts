import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../stitches.config";

export const Portal = styled(Dialog.Portal, {
  padding: "2rem",
});

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.75)",
});

export const Content = styled(Dialog.Content, {
  maxWidth: "26rem",
  width: "100%",
  minWidth: "9rem",
  borderRadius: 6,
  padding: "1.5rem",
  backgroundColor: "$gray900",
  color: "$white",

  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  div: {
    display: "flex",
    justifyContent: "right",
    gap: "0.5rem",

    marginTop: "2rem",

    button: {
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      lineHeight: 0,

      padding: "0.75rem 2rem",

      border: 0,
      backgroundColor: "$red500",
      color: "$white",
      borderRadius: 6,
      fontSize: "$md",
      cursor: "pointer",
    },
  },
});

export const Title = styled(Dialog.Title, {
  fontSize: "1rem",
});

export const CloseButton = styled(Dialog.Close, {
  position: "absolute",
  background: "transparent",
  border: 0,
  lineHeight: 0,
  top: "1.2rem",
  right: "1.2rem",
  color: "$white",
  fontSize: "$md",
  cursor: "pointer",
});
