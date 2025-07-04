import { tw } from "@/lib/tailwind";

export const BACKGROUND_STYLES = {
  link: {
    default: tw`bg-transparent`,
    disabled: tw`bg-transparent`,
    pressed: tw`bg-transparent`,
  },
  neutral: {
    default: tw`bg-neutral-100`,
    disabled: tw`bg-neutral-100`,
    pressed: tw`bg-pressed-4`,
  },
  positive: {
    default: tw`bg-positive-400`,
    disabled: tw`bg-positive-200`,
    pressed: tw`bg-pressed-9`,
  },
  primary: {
    default: tw`bg-primary-400`,
    disabled: tw`bg-primary-200`,
    pressed: tw`bg-pressed-3`,
  },
  secondary: {
    default: tw`bg-neutral-100`,
    disabled: tw`bg-neutral-100`,
    pressed: tw`bg-pressed-1`,
  },
  soft: {
    default: tw`bg-primary-100`,
    disabled: tw`bg-primary-100`,
    pressed: tw`bg-pressed-2`,
  },
  warning: {
    default: tw`bg-error-400`,
    disabled: tw`bg-error-200`,
    pressed: tw`bg-pressed-5`,
  },
} as const;

export const BORDER_STYLES = {
  link: {
    default: tw`border-0`,
    disabled: tw`border-0`,
    pressed: tw`border-0`,
  },
  neutral: {
    default: tw`border border-neutral-400`,
    disabled: tw`border border-neutral-300`,
    pressed: tw`border border-neutral-400`,
  },
  positive: {
    default: tw`border-0`,
    disabled: tw`border-0`,
    pressed: tw`border-0`,
  },
  primary: {
    default: tw`border-0`,
    disabled: tw`border-0`,
    pressed: tw`border-0`,
  },
  secondary: {
    default: tw`border-primary-400 border`,
    disabled: tw`border-primary-200 border`,
    pressed: tw`border-primary-500 border`,
  },
  soft: {
    default: tw`border-primary-400 border`,
    disabled: tw`border-primary-300 border`,
    pressed: tw`border-primary-500 border`,
  },
  warning: {
    default: tw`border-0`,
    disabled: tw`border-0`,
    pressed: tw`border-0`,
  },
} as const;

export const TEXT_STYLES = {
  link: {
    default: tw`text-primary-400`,
    disabled: tw`text-primary-200`,
    pressed: tw`text-pressed-3`,
  },
  neutral: {
    default: tw`text-neutral-600`,
    disabled: tw`text-neutral-400`,
    pressed: tw`text-neutral-600`,
  },
  positive: {
    default: tw`text-neutral-100`,
    disabled: tw`text-neutral-100`,
    pressed: tw`text-neutral-100`,
  },
  primary: {
    default: tw`text-neutral-100`,
    disabled: tw`text-primary-100`,
    pressed: tw`text-neutral-100`,
  },
  secondary: {
    default: tw`text-primary-400`,
    disabled: tw`text-primary-200`,
    pressed: tw`text-primary-500`,
  },
  soft: {
    default: tw`text-primary-400`,
    disabled: tw`text-primary-200`,
    pressed: tw`text-primary-600`,
  },
  warning: {
    default: tw`text-neutral-100`,
    disabled: tw`text-neutral-100`,
    pressed: tw`text-neutral-100`,
  },
} as const;

export const PADDING_STYLES = {
  lg: tw`px-8 py-4`,
  link: tw`px-2 py-1`,
  md: tw`px-7 py-3.5`,
  sm: tw`px-6 py-3`,
} as const;

export const BUTTON_TEXT_STYLES = {
  lg: tw`text-button-lg`,
  md: tw`text-button-md`,
  sm: tw`text-button-sm`,
};

export const RIPPLE_CONFIG = {
  borderless: false,
  color: "rgba(0,0,0,0.1)",
} as const;

export const BUTTON_ICON_SIZES = {
  lg: 24,
  md: 20,
  sm: 16,
} as const;
