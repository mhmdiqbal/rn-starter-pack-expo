import { FC } from "react";
import { SvgProps } from "react-native-svg";

export type Tab = {
  Icon: [FC<SvgProps>, FC<SvgProps>];
  label: string;
  path: string;
};
