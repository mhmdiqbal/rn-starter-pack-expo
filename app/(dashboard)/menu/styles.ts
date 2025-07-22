import { StyleSheet } from "react-native-unistyles";

import gs from "@/lib/global-styles";
import { vs } from "@/lib/scale";

export default StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  content: {
    backgroundColor: theme.colors.neutral[100],
    flex: 1,
    paddingTop: rt.insets.top,
  },
  orderContainer: {
    backgroundColor: theme.colors.neutral[100],
    paddingTop: rt.insets.top,
    width: vs(338),
    ...gs.shadowMd,
  },
}));
