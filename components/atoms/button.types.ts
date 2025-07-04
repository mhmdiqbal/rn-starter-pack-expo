import { TextStyle, ViewStyle } from "react-native";

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "soft"
  | "neutral"
  | "warning"
  | "positive"
  | "link";
export type ButtonSizes = "sm" | "md" | "lg";

type IconProps = {
  size?: number;
  style?: ViewStyle;
};

export type StateType = "default" | "disabled" | "pressed";

export interface ButtonProps {
  disabled?: boolean;
  leftIcon?:
    | React.ReactNode
    | (({ size, style }: IconProps) => React.ReactNode);
  onPress: () => void;
  rightIcon?:
    | React.ReactNode
    | (({ size, style }: IconProps) => React.ReactNode);
  size?: ButtonSizes;
  title: string;
  variant?: ButtonVariants;
}
