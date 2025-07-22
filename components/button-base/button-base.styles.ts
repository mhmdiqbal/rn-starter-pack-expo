import { StyleSheet } from "react-native-unistyles";

export default StyleSheet.create((theme) => ({
  container: (pressed) => ({
    backgroundColor: pressed
      ? theme.colors.pressed[2]
      : theme.colors.transparent,
  }),
}));
