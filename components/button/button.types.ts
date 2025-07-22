import { StyleProp, ViewStyle } from "react-native";

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
  color: string;
  height: number;
  width: number;
};

export interface ButtonProps {
  disabled?: boolean;
  leftIcon?:
    | React.ReactNode
    | (({ color, height, width }: IconProps) => React.ReactNode);
  onPress: () => void;
  rightIcon?:
    | React.ReactNode
    | (({ color, height, width }: IconProps) => React.ReactNode);
  size?: ButtonSizes;
  title: string;
  variant?: ButtonVariants;
}
