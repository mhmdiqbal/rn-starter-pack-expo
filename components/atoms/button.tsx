import { Text, TouchableNativeFeedback, View } from "react-native";

import { tw } from "@/lib/tailwind";

interface ButtonProps {
  disabled?: boolean;
  onPress: () => void;
  size?: "sm" | "md" | "lg";
  title: string;
  variant?: "primary" | "secondary";
}

export default function Button({ disabled, onPress, size = "md", title }: ButtonProps) {
  const buttonText = {
    lg: tw`text-button-lg`,
    md: tw`text-button-md`,
    sm: tw`text-button-sm`,
  };

  const buttonPadding = {
    lg: tw`px-8 py-4`,
    md: tw`px-7 py-3.5`,
    sm: tw`px-6 py-3`,
  };

  return (
    <TouchableNativeFeedback disabled={disabled} onPress={onPress}>
      <View
        style={[tw`items-center rounded-sm bg-primary-400 p-2 px-4`, buttonPadding[size]]}>
        <Text style={[tw`text-button-md text-neutral-100`, buttonText[size]]}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}
