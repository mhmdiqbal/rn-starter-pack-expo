import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";

import Button from "@/components/atoms/button";
import { tw } from "@/lib/tailwind";

export default function ButtonsScreen() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={tw`grow bg-neutral-200 p-2`}>
      <PrimaryButtons />
    </ScrollView>
  );
}

const PrimaryButtons = () => {
  return (
    <View style={tw`flex-row items-center gap-2`}>
      <Text style={tw`text-button-lg`}>Primary</Text>
      <Button
        size="lg"
        title="Button"
        variant="primary"
        onPress={() => { }} />
      <Button
        size="md"
        title="Button"
        variant="primary"
        onPress={() => { }} />
      <Button
        size="sm"
        title="Button"
        variant="primary"
        onPress={() => { }} />
    </View>
  )

} 
