import { StyleSheet } from "react-native-unistyles";

import { vs } from "@/lib/scale";

export default StyleSheet.create((theme) => ({
  buttonGroupSizesContainer: {
    gap: vs(8),
  },
  buttonListContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: vs(8),
  },
  content: {
    backgroundColor: theme.colors.neutral[200],
    flexGrow: 1,
    gap: vs(16),
    padding: vs(24),
  },
}));
