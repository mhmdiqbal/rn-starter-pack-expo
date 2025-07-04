import { useRouter } from "expo-router";
import { ScrollView } from "react-native";

import Button from "@/components/atoms/button";
import { tw } from "@/lib/tailwind";

export default function DeisgnSystemScreen() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={tw`grow gap-4 bg-neutral-200 p-2`}>
      <Button
        title="Button Components"
        onPress={() => {
          router.push("/(dashboard)/design-system/buttons");
        }} />
      <Button
        title="TextField Components"
        onPress={() => {
          router.push("/(dashboard)/design-system/text-fields");
        }} />
    </ScrollView>
  );
}
