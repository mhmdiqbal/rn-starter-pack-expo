import { Text as TextBase } from "react-native";

import styles from "./text.styles";
import { TextProps } from "./text.types";

export default function Text({
  style,
  variant = "body-md",
  ...props
}: TextProps) {
  styles.useVariants({
    variant: variant,
  });

  return <TextBase style={[styles.text, style]} {...props} />;
}
