import { StyleSheet } from "react-native-unistyles";

import gs from "@/lib/global-styles";
import { vs } from "@/lib/scale";

export default StyleSheet.create((theme, rt) => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.sup.yellow,
    gap: vs(16),
    minWidth: vs(116),
    paddingBottom: vs(24) + rt.insets.bottom,
    paddingHorizontal: vs(18),
    paddingTop: vs(24) + rt.insets.top,
    ...gs.shadowMd,
  },
}));
