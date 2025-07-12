import { StyleSheet } from "react-native-unistyles";

export default StyleSheet.create((theme) => ({
  text: {
    variants: {
      variant: theme.typography,
    },
  },
}));
