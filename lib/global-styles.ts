import { StyleSheet } from "react-native-unistyles";

const gs = StyleSheet.create((theme) => ({
  // Compound styles for common patterns
  absoluteCenter: {
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  absoluteFill: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  bgcolor: (color: string) => {
    const [colorKey, shade] = color.split(".");

    const themeColor = shade
      ? (theme.colors as any)[colorKey]?.[shade]
      : (theme.colors as any)[colorKey] || color;

    return {
      backgroundColor: themeColor,
    };
  },
  border: {
    borderColor: theme.colors.neutral[300],
    borderWidth: 1,
  },
  borderRadius: (value: number) => ({
    borderRadius: value,
  }),
  centerAll: {
    alignItems: "center",
    justifyContent: "center",
  },
  columnBetween: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  columnCenter: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  columnEnd: {
    alignItems: "flex-end",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  columnStart: {
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  flex1: {
    flex: 1,
  },
  flex1Center: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  fullSize: {
    height: "100%",
    width: "100%",
  },
  gap: (value: number) => ({
    gap: value,
  }),
  m: (value: number) => ({
    margin: value,
  }),
  mb: (value: number) => ({
    marginBottom: value,
  }),
  ml: (value: number) => ({
    marginLeft: value,
  }),
  mr: (value: number) => ({
    marginRight: value,
  }),
  mt: (value: number) => ({
    marginTop: value,
  }),
  mx: (value: number) => ({
    marginHorizontal: value,
  }),
  my: (value: number) => ({
    marginVertical: value,
  }),
  p: (value: number) => ({
    padding: value,
  }),
  px: (value: number) => ({
    paddingHorizontal: value,
  }),
  py: (value: number) => ({
    paddingVertical: value,
  }),
  row: {
    flexDirection: "row",
  },
  rowAround: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowBetween: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowCenter: {
    alignItems: "center",
    flexDirection: "row",
  },
  rowEnd: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  rowEvenly: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  rowStart: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  shadowLg: {
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  shadowMd: {
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  shadowSm: {
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  textCenter: {
    textAlign: "center",
  },
  txcolor: (color: string) => {
    const [colorKey, shade] = color.split(".");

    const themeColor = shade
      ? (theme.colors as any)[colorKey]?.[shade]
      : (theme.colors as any)[colorKey] || color;
    return {
      color: themeColor,
    };
  },
}));

export default gs;
