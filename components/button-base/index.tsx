import { Pressable } from "react-native";

import { RIPPLE_CONFIG } from "./constants";
import styles from "./styles";
import { ButtonBaseProps } from "./types";

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
