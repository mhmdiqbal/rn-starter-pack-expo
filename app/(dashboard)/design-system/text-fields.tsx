import { ScrollView, View } from "react-native";

import TextField from "@/components/atoms/text-field";
import { tw } from "@/lib/tailwind";

export default function TextFieldsScreen() {
  return (
    <ScrollView contentContainerStyle={tw`flex-1 bg-neutral-200 p-2`} >
      <TextFieldList />
    </ScrollView>
  );
}

const TextFieldList = () => {
  return (
    <View>
      <TextField />
      <TextField />
      <TextField />
    </View>
  )
}