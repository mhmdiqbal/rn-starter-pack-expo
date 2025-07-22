import { TextProps as TextPropsBase } from "react-native";

type TextVariants =
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  | "heading-5"
  | "body-xl"
  | "body-lg"
  | "body-md"
  | "body-sm"
  | "body-xs"
  | "button-lg"
  | "button-md"
  | "button-sm"
  | "label-xl"
  | "label-lg"
  | "label-md"
  | "label-sm"
  | "label-xs";

export interface TextProps extends TextPropsBase {
  variant?: TextVariants;
}
