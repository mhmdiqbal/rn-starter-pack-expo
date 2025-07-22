import { Pressable, View } from "react-native";

import { RIPPLE_CONFIG } from "./button-icon.cons";
import styles from "./button-icon.styles";
import { ButtonIconProps } from "./button-icon.types";

export default function ButtonIcon({
  disabled = false,
  icon,
  onPress,
  size = "md",
  stroke,
  variant = "primary",
}: ButtonIconProps) {
  styles.useVariants({
    size,
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
      style={({ pressed }) => [styles.container(disabled, pressed)]}
      onPress={onPress}>
      {({ pressed }) => {
        return (
          <View style={[styles.wrapper, stroke && styles.stroke]}>
            {icon && renderIcon(icon, pressed)}
          </View>
        );
      }}
    </Pressable>
  );
}
