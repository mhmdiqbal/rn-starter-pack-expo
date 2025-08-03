import { StyleSheet } from "react-native-unistyles";

import { vs } from "@/lib/scale";

export default StyleSheet.create((theme) => ({
  card: {
    backgroundColor: theme.colors.neutral[100],
    borderColor: theme.colors.neutral[300],
    borderRadius: vs(8),
    borderWidth: vs(1),
    flex: 1,
    padding: vs(12),
  },
}));
