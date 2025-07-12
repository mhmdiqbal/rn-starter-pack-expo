import { useRouter } from "expo-router";
import { ScrollView } from "react-native";

import Button from "@/components/button";

import styles from "./styles";

export default function DeisgnSystemScreen() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Button
        title="Text Components"
        onPress={() => {
          router.push("/(dashboard)/design-system/text");
        }}/>
      <Button
        title="Button Components"
        onPress={() => {
          router.push("/(dashboard)/design-system/buttons");
        }}/>
      <Button
        title="TextField Components"
        onPress={() => {
          router.push("/(dashboard)/design-system/text-fields");
        }}/>
    </ScrollView>
  );
}
