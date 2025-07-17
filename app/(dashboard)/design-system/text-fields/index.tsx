import { useState } from "react";
import { ScrollView, View } from "react-native";

import IcEye from "@/assets/images/svgs/icons/eye.svg";
import TextField from "@/components/text-field";
import gs from "@/lib/global-styles";
import { vs } from "@/lib/scale";

export default function TextFieldsScreen() {
  return (
    <ScrollView contentContainerStyle={[gs.flex1, gs.p(vs(16))]}>
      <TextFieldList />
    </ScrollView>
  );
}

const TextFieldList = () => {
  const [value, setValue] = useState<string>("");
  return (
    <View style={gs.gap(vs(16))}>
      <TextField
        label="Text field"
        size="lg"
        value={value}
        onChangeText={setValue}/>
      <TextField
        label="Text field"
        LeftComponent={<IcEye height={vs(24)} width={vs(24)} />}
        RightComponent={<IcEye height={vs(24)} width={vs(24)} />}
        size="lg"
        value={value}
        onChangeText={setValue}/>
      <TextField error="error message" label="Text field" size="lg" />
      <TextField label="Text field" size="md" />
      <TextField label="Text field" size="sm" />
    </View>
  );
};
