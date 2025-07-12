/* eslint-disable sort-keys-fix/sort-keys-fix */
import { StyleSheet } from "react-native-unistyles";

import { vs } from "./scale";

const lightTheme = {
  colors: {
    primary: {
      100: "#F4E3E2",
      200: "#CB9593",
      300: "#A65C5A",
      400: "#862C2C",
      500: "#571916",
      600: "#330A08",
      700: "#220402",
    },
    neutral: {
      100: "#FBFBFB",
      200: "#F5F5F5",
      300: "#D8DCDF",
      400: "#989B9E",
      500: "#5D5F60",
      600: "#3D3D3D",
      700: "#0A0A0A",
    },
    success: {
      100: "#DFEAFF",
      200: "#B0C7F5",
      300: "#5D8CE4",
      400: "#2B5FC3",
      500: "#1041A0",
      600: "#012873",
      700: "#001C51",
    },
    positive: {
      100: "#E4FAEA",
      200: "#88D49E",
      300: "#3AB45C",
      400: "#179139",
      500: "#087025",
      600: "#034415",
      700: "#01260B",
    },
    error: {
      100: "#F6DEDD",
      200: "#FABBBB",
      300: "#DF6464",
      400: "#B52626",
      500: "#8D0909",
      600: "#570101",
      700: "#340000",
    },
    warning: {
      100: "#FCF4E2",
      200: "#F6E0A2",
      300: "#E1BA54",
      400: "#CE9E22",
      500: "#AC7D05",
      600: "#795701",
      700: "#453200",
    },
    linear: {
      1: "#F4E3E2",
      2: "#CB9593",
    },
    pressed: {
      1: "rgba(244, 227, 226, 0.75)",
      2: "rgba(203, 149, 147, 0.75)",
      3: "rgba(87, 25, 22, 0.75)",
      4: "rgba(216, 220, 223, 0.75)",
      5: "rgba(141, 9, 9, 0.75)",
      6: "rgba(246, 222, 221, 0.75)",
      7: "rgba(223, 234, 255, 0.75)",
      8: "rgba(16, 65, 160, 0.75)",
      9: "rgba(8, 112, 37, 0.75)",
    },
    sup: {
      red: "#FEF5E2",
      yellow: "#FAB8B8",
    },
    transparent: "transparent",
  },
  typography: {
    "heading-1": {
      fontFamily: "SemiBold",
      fontSize: vs(48),
      letterSpacing: vs(-0.01),
      lineHeight: vs(62),
    },
    "heading-2": {
      fontFamily: "SemiBold",
      fontSize: vs(36),
      letterSpacing: vs(-0.01),
      lineHeight: vs(48),
    },
    "heading-3": {
      fontFamily: "SemiBold",
      fontSize: vs(24),
      lineHeight: vs(36),
    },
    "heading-4": {
      fontFamily: "SemiBold",
      fontSize: vs(20),
      lineHeight: vs(28),
    },
    "heading-5": {
      fontFamily: "SemiBold",
      fontSize: vs(16),
      lineHeight: vs(24),
    },
    "body-xl": {
      fontFamily: "Regular",
      fontSize: vs(20),
      lineHeight: vs(28),
    },
    "body-lg": {
      fontFamily: "Regular",
      fontSize: vs(16),
      lineHeight: vs(24),
    },
    "body-md": {
      fontFamily: "Regular",
      fontSize: vs(14),
      lineHeight: vs(20),
    },
    "body-sm": {
      fontFamily: "Regular",
      fontSize: vs(12),
      lineHeight: vs(18),
    },
    "body-xs": {
      fontFamily: "Regular",
      fontSize: vs(10),
      letterSpacing: vs(0.01),
      lineHeight: vs(16),
    },
    "label-xl": {
      fontFamily: "Medium",
      fontSize: vs(20),
      lineHeight: vs(28),
    },
    "label-lg": {
      fontFamily: "Medium",
      fontSize: vs(16),
      lineHeight: vs(24),
    },
    "label-md": {
      fontFamily: "Medium",
      fontSize: vs(14),
      lineHeight: vs(20),
    },
    "label-sm": {
      fontFamily: "Medium",
      fontSize: vs(12),
      lineHeight: vs(18),
    },
    "label-xs": {
      fontFamily: "Medium",
      fontSize: vs(10),
      letterSpacing: vs(0.01),
      lineHeight: vs(14),
    },
    "button-lg": {
      fontFamily: "SemiBold",
      fontSize: vs(20),
      lineHeight: vs(28),
    },
    "button-md": {
      fontFamily: "SemiBold",
      fontSize: vs(16),
      lineHeight: vs(24),
    },
    "button-sm": {
      fontFamily: "SemiBold",
      fontSize: vs(12),
      lineHeight: vs(18),
    },
  },
  spacing: (v: number) => v * 8,
  gap: (v: number) => v * 8,
};

const darkTheme = lightTheme;

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

const appThemes = {
  dark: darkTheme,
  light: lightTheme,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    initialTheme: "light",
  },
  breakpoints,
  themes: appThemes,
});
