import { StyleSheet } from "react-native-unistyles";

import { vs } from "@/lib/scale";

export default StyleSheet.create((theme, rt) => ({
  avatar: {
    borderRadius: vs(100),
    height: vs(48),
    width: vs(48),
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: vs(28),
    paddingHorizontal: vs(24),
  },
  searchInput: {
    width: vs(400),
  },
  searchInputContainer: {
    width: vs(400),
  },
}));
