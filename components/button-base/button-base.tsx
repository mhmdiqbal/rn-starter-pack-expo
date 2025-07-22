import { Pressable } from "react-native";

import { RIPPLE_CONFIG } from "./button-base.cons";
import styles from "./button-base.styles";
import { ButtonBaseProps } from "./button-base.types";

export default function ButtonBase({ style, ...props }: ButtonBaseProps) {
  return (
    <Pressable
      android_ripple={RIPPLE_CONFIG}
      style={({ hovered, pressed }) => [
        styles.container(pressed),
        typeof style === "function" ? style({ hovered, pressed }) : style,
      ]}
      {...props}/>
  );
}
