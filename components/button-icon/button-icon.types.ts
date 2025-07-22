import { StyleProp, ViewStyle } from "react-native";

export type ButtonIconVariants =
  | "primary"
  | "secondary"
  | "soft"
  | "neutral"
  | "warning"
  | "positive"
  | "link";
export type ButtonIconSizes = "sm" | "md" | "lg";

type IconProps = {
  color: string;
  height: number;
  width: number;
};

export interface ButtonIconProps {
  disabled?: boolean;
  icon?:
    | React.ReactNode
    | (({ color, height, width }: IconProps) => React.ReactNode);
  onPress: () => void;
  size?: ButtonIconSizes;
  stroke?: boolean;
  variant?: ButtonIconVariants;
}
