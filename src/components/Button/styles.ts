import { StyleSheet } from "react-native";
import { ButtonProps } from ".";

export const getButtonStyles = (variant: ButtonProps["variant"]) => {
  let backgroundColor;
  switch (variant) {
    case "add":
      backgroundColor = "#31CF67";
      break;
    case "remove":
      backgroundColor = "#E23C44";
      break;
    default:
      backgroundColor = "#31CF67";
  }

  return StyleSheet.create({
    button: {
      backgroundColor,
      borderRadius: 5,
      height: 56,
      width: 56,
      justifyContent: "center",
      alignItems: "center",
    },

    buttonText: {
      color: "white",
      fontSize: 24,
    },
  });
};
