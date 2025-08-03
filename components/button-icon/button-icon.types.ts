import { PressableProps } from "react-native";

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

export interface ButtonIconProps extends PressableProps {
  disabled?: boolean;
  icon?:
    | React.ReactNode
    | (({ color, height, width }: IconProps) => React.ReactNode);
  size?: ButtonIconSizes;
  stroke?: boolean;
  variant?: ButtonIconVariants;
}
