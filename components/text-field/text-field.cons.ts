import { vs } from "@/lib/scale";

import { InputSizes } from "./text-field.types";

export const TEXT_FIELD_HEIGHTS: Record<InputSizes, number> = {
  lg: vs(60),
  md: vs(52),
  sm: vs(44),
} as const;

export const TEXT_FIELD_LABEL_TRANSLATE_X: Record<InputSizes, number> = {
  lg: vs(16),
  md: vs(14),
  sm: vs(12),
} as const;
