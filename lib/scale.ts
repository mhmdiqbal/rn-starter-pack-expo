import { Dimensions } from "react-native";

// Screen dimensions
const { height, width } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// Design guideline dimensions (based on standard figma screen)
const GUIDELINE_BASE_WIDTH = 1024;
const GUIDELINE_BASE_HEIGHT = 1366;

// Scaling ratios
const widthRatio = shortDimension / GUIDELINE_BASE_WIDTH;
const heightRatio = longDimension / GUIDELINE_BASE_HEIGHT;

/**
 * Scales size based on screen width
 */
export const scale = (size: number): number => widthRatio * size;

/**
 * Scales size based on screen height
 */
export const verticalScale = (size: number): number => heightRatio * size;

/**
 * Moderately scales size with configurable factor
 */
export const moderateScale = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor;

/**
 * Moderately scales size vertically with configurable factor
 */
export const moderateVerticalScale = (size: number, factor = 0.5): number =>
  size + (verticalScale(size) - size) * factor;

// Short aliases
export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
