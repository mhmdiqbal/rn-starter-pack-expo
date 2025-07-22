import { StyleSheet } from "react-native-unistyles";

import { vs } from "@/lib/scale";

export default StyleSheet.create((theme) => ({
  container: (disabled: boolean, pressed: boolean) => ({
    alignItems: "center",
    borderRadius: vs(4),
    compoundVariants: [
      {
        size: "lg",
        stroke: false,
        styles: {
          borderWidth: 0,
          padding: vs(12),
        },
        variant: "neutral",
      },
      {
        size: "md",
        stroke: false,
        styles: {
          borderWidth: 0,
          padding: vs(10),
        },
        variant: "neutral",
      },
      {
        size: "sm",
        stroke: false,
        styles: {
          borderWidth: 0,
          padding: vs(8),
        },
        variant: "neutral",
      },
    ],
    variants: {
      size: {
        lg: {
          padding: vs(16),
        },
        md: {
          padding: vs(14),
        },
        sm: {
          padding: vs(12),
        },
      },
      stroke: {
        false: {
          borderWidth: 0,
        },
        true: {
          borderColor: theme.colors.primary[400],
          borderWidth: vs(1),
        },
      },
      variant: {
        default: {
          backgroundColor: disabled
            ? theme.colors.primary[200]
            : pressed
              ? theme.colors.pressed[3]
              : theme.colors.primary[400],
        },
        link: {
          backgroundColor: theme.colors.transparent,
        },
        neutral: {
          backgroundColor: pressed
            ? theme.colors.pressed[4]
            : theme.colors.neutral[100],
          borderColor: disabled
            ? theme.colors.neutral[300]
            : theme.colors.neutral[400],
          borderWidth: vs(1),
        },
        positive: {
          backgroundColor: disabled
            ? theme.colors.positive[200]
            : pressed
              ? theme.colors.pressed[9]
              : theme.colors.positive[400],
        },
        primary: {
          backgroundColor: disabled
            ? theme.colors.primary[200]
            : pressed
              ? theme.colors.pressed[3]
              : theme.colors.primary[400],
        },
        secondary: {
          backgroundColor: pressed
            ? theme.colors.pressed[1]
            : theme.colors.neutral[100],
          borderColor: disabled
            ? theme.colors.primary[200]
            : pressed
              ? theme.colors.primary[500]
              : theme.colors.primary[400],
          borderWidth: vs(1),
        },
        soft: {
          backgroundColor: pressed
            ? theme.colors.pressed[2]
            : theme.colors.primary[100],
          borderColor: disabled
            ? theme.colors.primary[300]
            : pressed
              ? theme.colors.primary[500]
              : theme.colors.primary[400],
          borderWidth: vs(1),
        },
        warning: {
          backgroundColor: disabled
            ? theme.colors.error[200]
            : pressed
              ? theme.colors.pressed[5]
              : theme.colors.error[400],
        },
      },
    },
  }),

  icon: (disabled: boolean, pressed: boolean) => ({
    variants: {
      size: {
        lg: { height: vs(24), width: vs(24) },
        md: { height: vs(20), width: vs(20) },
        sm: { height: vs(16), width: vs(16) },
      },
      variant: {
        default: {
          color: disabled
            ? theme.colors.primary[100]
            : theme.colors.neutral[100],
        },
        link: {
          color: disabled
            ? theme.colors.primary[200]
            : pressed
              ? theme.colors.pressed[3]
              : theme.colors.primary[400],
        },
        neutral: {
          color: disabled
            ? theme.colors.neutral[400]
            : theme.colors.neutral[600],
        },
        positive: {
          color: theme.colors.neutral[100],
        },
        primary: {
          color: disabled
            ? theme.colors.primary[100]
            : theme.colors.neutral[100],
        },
        secondary: {
          color: disabled
            ? theme.colors.primary[200]
            : pressed
              ? theme.colors.primary[500]
              : theme.colors.primary[400],
        },
        soft: {
          color: disabled
            ? theme.colors.primary[200]
            : pressed
              ? theme.colors.primary[600]
              : theme.colors.primary[400],
        },
        warning: {
          color: theme.colors.neutral[100],
        },
      },
    },
  }),

  text: (disabled: boolean, pressed: boolean) => ({
    variants: {
      size: {
        lg: theme.typography["button-lg"],
        md: theme.typography["button-md"],
        sm: theme.typography["button-sm"],
      },
      variant: {
        default: {
          color: disabled
            ? theme.colors.primary[100]
            : theme.colors.neutral[100],
        },
        link: {
          color: disabled
            ? theme.colors.primary[200]
            : pressed
              ? theme.colors.pressed[3]
              : theme.colors.primary[400],
        },
        neutral: {
          color: disabled
            ? theme.colors.neutral[400]
            : theme.colors.neutral[600],
        },
        positive: {
          color: theme.colors.neutral[100],
        },
        primary: {
          color: disabled
            ? theme.colors.primary[100]
            : theme.colors.neutral[100],
        },
        secondary: {
          color: disabled
            ? theme.colors.primary[200]
            : pressed
              ? theme.colors.primary[500]
              : theme.colors.primary[400],
        },
        soft: {
          color: disabled
            ? theme.colors.primary[200]
            : pressed
              ? theme.colors.primary[600]
              : theme.colors.primary[400],
        },
        warning: {
          color: theme.colors.neutral[100],
        },
      },
    },
  }),
}));
