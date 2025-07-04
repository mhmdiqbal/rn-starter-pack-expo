import { Pressable, Text, View } from "react-native";

import { tw } from "@/lib/tailwind";

import {
  BACKGROUND_STYLES,
  BORDER_STYLES,
  BUTTON_ICON_SIZES,
  BUTTON_TEXT_STYLES,
  PADDING_STYLES,
  RIPPLE_CONFIG,
  TEXT_STYLES,
} from "./button.styles";
import { ButtonProps, StateType } from "./button.types";

const getStyleState = (
  disabled?: boolean,
  pressed?: boolean
): StateType => {
  if (pressed) return "pressed";
  if (disabled) return "disabled";
  return "default";
};

export default function Button({
  disabled,
  leftIcon,
  onPress,
  rightIcon,
  size = "md",
  title,
  variant = "primary",
}: ButtonProps) {
  const paddingStyle = variant === "link" ? PADDING_STYLES.link : PADDING_STYLES[size];

  const renderIcon = (icon: ButtonProps['leftIcon'], state: StateType) =>
    typeof icon === "function"
      ? icon({
        size: BUTTON_ICON_SIZES[size],
        style: TEXT_STYLES[variant][state],
      })
      : icon;

  return (
    <Pressable
      android_ripple={RIPPLE_CONFIG}
      disabled={disabled}
      style={({ pressed }) => [
        tw`rounded-sm`,
        BACKGROUND_STYLES[variant][getStyleState(disabled, pressed)],
        BORDER_STYLES[variant][getStyleState(disabled, pressed)],
      ]}
      onPress={onPress}>
      {({ pressed }) => {
        const state = getStyleState(disabled, pressed);
        return (
          <View style={[tw`flex-row items-center justify-center gap-2`, paddingStyle]}>
            {leftIcon && renderIcon(leftIcon, state)}
            <Text style={[BUTTON_TEXT_STYLES[size], TEXT_STYLES[variant][state]]}>
              {title}
            </Text>
            {rightIcon && renderIcon(rightIcon, state)}
          </View>
        );
      }}
    </Pressable>
  );
}

export type { ButtonProps, ButtonSizes, ButtonVariants } from "./button.types";
