import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";

import IcEye from "@/assets/images/svgs/icons/ic-eye.svg";
import Button, { ButtonVariants } from "@/components/atoms/button";
import { tw } from "@/lib/tailwind";

const buttonVariants: ButtonVariants[] = [
  "primary",
  "secondary",
  "soft",
  "neutral",
  "warning",
  "positive",
  "link",
];

export default function ButtonsScreen() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={tw`grow gap-4 bg-neutral-200 p-2`}>
      {buttonVariants.map((variant) => (
        <ButtonList key={variant} variant={variant} />
      ))}
    </ScrollView>
  );
}

interface ButtonListProps {
  variant: ButtonVariants;
}

const ButtonList = ({ variant }: ButtonListProps) => {
  return (
    <View style={tw`flex-row items-center gap-2`}>
      <Text style={tw`w-28 text-button-lg`}>{variant}</Text>
      <View style={tw`gap-2`}>
        <Button size="lg" title="Button" variant={variant} onPress={() => {}} />
        <Button
          disabled
          size="lg"
          title="Button"
          variant={variant}
          onPress={() => {}}/>
        <Button
          size="lg"
          title="Button"
          variant={variant}
          leftIcon={({ size, style }) => (
            <IcEye height={size} style={style} width={size} />
          )}
          rightIcon={({ size, style }) => (
            <IcEye height={size} style={style} width={size} />
          )}
          onPress={() => {}}/>
        <Button
          disabled
          size="lg"
          title="Button"
          variant={variant}
          onPress={() => {}}/>
      </View>
      <Button size="md" title="Button" variant={variant} onPress={() => {}} />
      <Button
        disabled
        size="md"
        title="Button"
        variant={variant}
        onPress={() => {}}/>
      <Button size="sm" title="Button" variant={variant} onPress={() => {}} />
      <Button
        disabled
        size="sm"
        title="Button"
        variant={variant}
        onPress={() => {}}/>
    </View>
  );
};
