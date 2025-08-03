import { Pressable } from "react-native";

import { RIPPLE_CONFIG } from "./button-icon.cons";
import styles from "./button-icon.styles";
import { ButtonIconProps } from "./button-icon.types";

export default function ButtonIcon({
  disabled = false,
  icon,
  onPress,
  size = "md",
  stroke,
  style,
  variant = "primary",
}: ButtonIconProps) {
  styles.useVariants({
    size,
    stroke,
    variant,
  });

  const renderIcon = (icon: ButtonIconProps["icon"], pressed: boolean) => {
    const { color, height, width } = styles.icon(disabled, pressed);

    return typeof icon === "function"
      ? icon({
        color,
        height,
        width,
      })
      : icon;
  };

  return (
    <Pressable
      android_ripple={RIPPLE_CONFIG}
      disabled={disabled}
      style={({ hovered, pressed }) => [
        styles.container(disabled, pressed),
        typeof style === "function" ? style({ hovered, pressed }) : style,
      ]}
      onPress={onPress}>
      {({ pressed }) => {
        return icon && renderIcon(icon, pressed);
      }}
    </Pressable>
  );
}
