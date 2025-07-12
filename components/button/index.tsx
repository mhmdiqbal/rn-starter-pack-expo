import { Pressable, View } from "react-native";

import Text from "../text";
import { RIPPLE_CONFIG } from "./constants";
import styles from "./styles";
import { ButtonProps } from "./types";

export default function Button({
  disabled = false,
  leftIcon,
  onPress,
  rightIcon,
  size = "md",
  title,
  variant = "primary",
}: ButtonProps) {
  styles.useVariants({
    size,
    variant,
  });

  const renderIcon = (icon: ButtonProps["leftIcon"], pressed: boolean) => {
    const { color, height, width } = styles.icon(disabled, pressed);

    return typeof icon === "function"
      ? icon({
        color,
        height,
        width,
      })
      : icon;
  };

  const iconCount = (leftIcon ? 1 : 0) + (rightIcon ? 1 : 0);

  return (
    <Pressable
      android_ripple={RIPPLE_CONFIG}
      disabled={disabled}
      style={({ pressed }) => [styles.container(disabled, pressed)]}
      onPress={onPress}>
      {({ pressed }) => {
        return (
          <View style={styles.wrapper(iconCount)}>
            {leftIcon && renderIcon(leftIcon, pressed)}
            <Text style={styles.text(disabled, pressed)}>{title}</Text>
            {rightIcon && renderIcon(rightIcon, pressed)}
          </View>
        );
      }}
    </Pressable>
  );
}

export type { ButtonProps, ButtonSizes, ButtonVariants } from "./types";
