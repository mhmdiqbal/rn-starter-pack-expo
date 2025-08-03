/* eslint-disable sort-keys-fix/sort-keys-fix */
 
import { StyleSheet } from "react-native-unistyles";

import { vs } from "@/lib/scale";

import {
  TEXT_FIELD_HEIGHTS,
  TEXT_FIELD_LABEL_TRANSLATE_X,
} from "./text-field.cons";

export default StyleSheet.create((theme) => ({
  container: {
    alignSelf: "stretch",
    backgroundColor: theme.colors.neutral[100],
    borderColor: theme.colors.neutral[300],
    borderRadius: vs(4),
    borderWidth: vs(1),
    compoundVariants: [
      {
        error: true,
        focused: true,
        styles: {
          borderColor: theme.colors.error[300],
        },
      },
      {
        hasLeft: true,
        styles: {
          paddingLeft: vs(14),
        },
      },
      {
        hasRight: true,
        styles: {
          paddingRight: vs(14),
        },
      },
    ],
    flexDirection: "row",
    justifyContent: "space-between",
    variants: {
      error: {
        true: {
          backgroundColor: theme.colors.error[100],
          borderColor: theme.colors.error[300],
        },
      },
      focused: {
        true: {
          borderColor: theme.colors.neutral[400],
        },
      },
      size: {
        lg: {
          gap: vs(16),
          height: TEXT_FIELD_HEIGHTS.lg,
        },
        md: {
          gap: vs(16),
          height: TEXT_FIELD_HEIGHTS.md,
        },
        sm: {
          gap: vs(8),
          height: TEXT_FIELD_HEIGHTS.sm,
        },
      },
    },
  },

  input: {
    flex: 1,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    compoundVariants: [
      {
        hasLeft: true,
        styles: {
          paddingLeft: vs(0),
        },
      },
      {
        hasRight: true,
        styles: {
          paddingRight: vs(0),
        },
      },
    ],
    variants: {
      error: {
        true: {
          color: theme.colors.error[400],
        },
      },
      focused: {
        true: {
          color: theme.colors.neutral[700],
        },
      },
      size: {
        lg: {
          height: vs(60),
          ...theme.typography["body-lg"],
          lineHeight: 0,
          paddingLeft: vs(24),
          paddingRight: vs(24),
        },
        md: {
          height: vs(52),
          ...theme.typography["body-lg"],
          lineHeight: 0,
          paddingLeft: vs(20),
          paddingRight: vs(20),
        },
        sm: {
          height: vs(44),
          ...theme.typography["body-md"],
          lineHeight: 0,
          paddingLeft: vs(16),
          paddingRight: vs(16),
        },
      },
      hasLeft: {
        true: {
          paddingLeft: vs(0),
        },
      },
      hasRight: {
        true: {
          paddingRight: vs(0),
        },
      },
    },
  },

  label: {
    ...theme.typography["label-sm"],
    color: theme.colors.neutral[600],
    compoundVariants: [
      {
        error: true,
        focused: true,
        styles: {
          color: theme.colors.error[500],
        },
      },
    ],
    variants: {
      error: {
        true: {
          color: theme.colors.error[500],
        },
      },
      focused: {
        true: {
          color: theme.colors.neutral[600],
        },
      },
    },
  },

  labelLayer: (height: number, width: number) => ({
    alignItems: "center",
    backgroundColor: theme.colors.neutral[100],
    bottom: 0,
    height,
    justifyContent: "center",
    position: "absolute",
    variants: {
      error: {
        true: {
          backgroundColor: theme.colors.error[100],
        },
      },
      size: {
        lg: {
          left: -TEXT_FIELD_LABEL_TRANSLATE_X.lg,
        },
        md: {
          left: -TEXT_FIELD_LABEL_TRANSLATE_X.md,
        },
        sm: {
          left: -TEXT_FIELD_LABEL_TRANSLATE_X.sm,
        },
      },
    },
    width,
  }),

  wrapper: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    variants: {
      size: {
        lg: {
          gap: vs(12),
        },
        md: {
          gap: vs(12),
        },
        sm: {
          gap: vs(8),
        },
      },
    },
  },
}));
