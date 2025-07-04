import Button from "@/components/atoms/button";
import { tw } from "@/lib/tailwind";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";

export default function DeisgnSystemScreen() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={tw`p-2 flex-grow-1 bg-neutral-200`}>
      <Button
        title="Button Components"
        onPress={() => {
          router.push("/(dashboard)/design-system/buttons");
        }}/>
    </ScrollView>
  );
}
