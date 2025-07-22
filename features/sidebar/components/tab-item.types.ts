import { FC } from "react";
import { SvgProps } from "react-native-svg";

export interface TabItemProps {
  Icons: [FC<SvgProps>, FC<SvgProps>];
  isActive: boolean;
  label: string;
  onPress: () => void;
}

export interface TabIconProps {
  Icon: FC<SvgProps>;
}
