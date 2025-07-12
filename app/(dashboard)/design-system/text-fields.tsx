import { ScrollView, View } from "react-native";

import TextField from "@/components/text-field";
import gs from "@/lib/global-styles";

export default function TextFieldsScreen() {
  return (
    <ScrollView contentContainerStyle={[gs.flex1, gs.centerAll]}>
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
  );
};
