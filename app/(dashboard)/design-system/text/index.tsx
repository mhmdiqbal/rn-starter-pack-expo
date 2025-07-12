import { ScrollView } from "react-native";

import Text from "@/components/text";

import styles from "./styles";

export default function TextScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text variant="heading-1">Heading-1</Text>
      <Text variant="heading-2">Heading-2</Text>
      <Text variant="heading-3">Heading-3</Text>
      <Text variant="heading-4">Heading-4</Text>
      <Text variant="heading-5">Heading-5</Text>
      <Text variant="body-xl">Bodytext/X-Large</Text>
      <Text variant="body-lg">Bodytext/Large</Text>
      <Text variant="body-md">Bodytext/Medium</Text>
      <Text variant="body-sm">Bodytext/Small</Text>
      <Text variant="body-xs">Bodytext/X-Small</Text>
      <Text variant="button-lg">Buttontext/Large</Text>
      <Text variant="button-md">Buttontext/Medium</Text>
      <Text variant="button-sm">Buttontext/Small</Text>
      <Text variant="label-xl">Labeltext/X-Large</Text>
      <Text variant="label-lg">Labeltext/Large</Text>
      <Text variant="label-md">Labeltext/Medium</Text>
      <Text variant="label-sm">Labeltext/Small</Text>
      <Text variant="label-xs">Labeltext/X-Small</Text>
    </ScrollView>
  );
}
