import { TextInputProps } from "react-native";

export type InputSizes = "sm" | "md" | "lg";

export interface TextFieldProps extends TextInputProps {
  LeftComponent?: React.ReactNode;
  RightComponent?: React.ReactNode;
  error?: string;
  label?: string;
  size?: InputSizes;
}
