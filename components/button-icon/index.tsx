import { Pressable, View } from "react-native";

import { RIPPLE_CONFIG } from "./constants";
import styles from "./styles";
import { ButtonIconProps } from "./types";

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

export type {
  ButtonIconProps,
  ButtonIconSizes,
  ButtonIconVariants,
} from "./types";
