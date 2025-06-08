import { Inter_100Thin } from "@expo-google-fonts/inter/100Thin";
import { Inter_100Thin_Italic } from "@expo-google-fonts/inter/100Thin_Italic";
import { Inter_200ExtraLight } from "@expo-google-fonts/inter/200ExtraLight";
import { Inter_200ExtraLight_Italic } from "@expo-google-fonts/inter/200ExtraLight_Italic";
import { Inter_300Light } from "@expo-google-fonts/inter/300Light";
import { Inter_300Light_Italic } from "@expo-google-fonts/inter/300Light_Italic";
import { Inter_400Regular } from "@expo-google-fonts/inter/400Regular";
import { Inter_400Regular_Italic } from "@expo-google-fonts/inter/400Regular_Italic";
import { Inter_500Medium } from "@expo-google-fonts/inter/500Medium";
import { Inter_500Medium_Italic } from "@expo-google-fonts/inter/500Medium_Italic";
import { Inter_600SemiBold } from "@expo-google-fonts/inter/600SemiBold";
import { Inter_600SemiBold_Italic } from "@expo-google-fonts/inter/600SemiBold_Italic";
import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";
import { Inter_700Bold_Italic } from "@expo-google-fonts/inter/700Bold_Italic";
import { Inter_800ExtraBold } from "@expo-google-fonts/inter/800ExtraBold";
import { Inter_800ExtraBold_Italic } from "@expo-google-fonts/inter/800ExtraBold_Italic";
import { Inter_900Black } from "@expo-google-fonts/inter/900Black";
import { Inter_900Black_Italic } from "@expo-google-fonts/inter/900Black_Italic";
import { useFonts } from "expo-font";

const useCustomFonts = () => {
  const [loaded] = useFonts({
    Thin: Inter_100Thin,
    "Thin-Italic": Inter_100Thin_Italic,
    ExtraLight: Inter_200ExtraLight,
    "ExtraLight-Italic": Inter_200ExtraLight_Italic,
    Light: Inter_300Light,
    "Light-Italic": Inter_300Light_Italic,
    Regular: Inter_400Regular,
    "Regular-Italic": Inter_400Regular_Italic,
    Medium: Inter_500Medium,
    "Medium-Italic": Inter_500Medium_Italic,
    SemiBold: Inter_600SemiBold,
    "SemiBold-Italic": Inter_600SemiBold_Italic,
    Bold: Inter_700Bold,
    "Bold-Italic": Inter_700Bold_Italic,
    ExtraBold: Inter_800ExtraBold,
    "ExtraBold-Italic": Inter_800ExtraBold_Italic,
    Black: Inter_900Black,
    "Black-Italic": Inter_900Black_Italic,
  });

  return { loaded };
};
export default useCustomFonts;
