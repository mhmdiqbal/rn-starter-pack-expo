import { Text as TextBase } from "react-native";

import styles from "./styles";
import { TextProps } from "./types";

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

export type { TextProps } from "./types";
