import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { getButtonStyles } from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  variant: "add" | "remove";
}

export function Button({ variant, ...rest }: ButtonProps) {
  const styles = getButtonStyles(variant);
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{variant === "add" ? "+" : "-"}</Text>
    </TouchableOpacity>
  );
}
