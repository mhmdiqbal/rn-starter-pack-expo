import { View } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

import ButtonBase from "@/components/button-base";
import Text from "@/components/text";
import gs from "@/lib/global-styles";
import { vs } from "@/lib/scale";

import { TabIconProps, TabItemProps } from "./tab-item.types";

export default function TabItem({
  Icons,
  isActive,
  label,
  onPress,
}: TabItemProps) {
  styles.useVariants({ isActive });

  const Icon = isActive ? Icons[1] : Icons[0];
  return (
    <ButtonBase disabled={isActive} style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <TabIcon Icon={Icon} />
        <Text
          style={[gs.textCenter, gs.txcolor("primary.400")]}
          variant="label-xs">
          {label}
        </Text>
      </View>
    </ButtonBase>
  );
}

const TabIcon = ({ Icon }: TabIconProps) => {
  const { theme } = useUnistyles();
  return (
    <Icon color={theme.colors.primary[400]} height={vs(36)} width={vs(36)} />
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    borderRadius: vs(8),
    height: vs(68),
    variants: {
      isActive: {
        true: {
          borderColor: theme.colors.primary[400],
          borderWidth: vs(1),
        },
      },
    },
    width: vs(68),
  },
  wrapper: {
    alignItems: "center",
    flex: 1,
    gap: vs(2),
    justifyContent: "center",
  },
}));
