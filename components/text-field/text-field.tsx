import { MotiText, MotiView } from "moti";
import { memo, useState } from "react";
import { TextInput, View } from "react-native";
import { withUnistyles } from "react-native-unistyles";

import gs from "@/lib/global-styles";
import { vs } from "@/lib/scale";

import If from "../if";
import Text from "../text";
import {
  TEXT_FIELD_HEIGHTS,
  TEXT_FIELD_LABEL_TRANSLATE_X,
} from "./text-field.cons";
import styles from "./text-field.styles";
import { LabelProps, TextFieldProps } from "./text-field.types";

const UniTextInput = withUnistyles(TextInput, (theme, rt) => ({
  cursorColor: theme.colors.neutral[600],
  placeholderTextColor: theme.colors.neutral[500],
  selectionColor: theme.colors.neutral[600],
}));

export default function TextField({
  LeftComponent,
  RightComponent,
  error,
  label,
  onChangeText,
  placeholder,
  size = "md",
  style,
  value,
  ...props
}: TextFieldProps) {
  const [focused, setFocused] = useState<boolean>(false);

  styles.useVariants({
    error: !!error,
    focused,
    hasLeft: !!LeftComponent,
    hasRight: !!RightComponent,
    size,
  });

  const handleChangeText = (val: string) => {
    setFocused(val.length > 0);
    onChangeText?.(val);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <If when={!!label}>
            <Label error={error} focused={focused} label={label!} size={size} />
          </If>
          {LeftComponent}
          <UniTextInput
            placeholder={placeholder || label}
            style={[styles.input, style]}
            onChangeText={handleChangeText}
            {...props}/>
          {RightComponent}
        </View>
      </View>
      <If when={!!error}>
        <Text style={[gs.mt(vs(8)), gs.txcolor("error.400")]} variant="body-md">
          {error}
        </Text>
      </If>
    </View>
  );
}

const Label = memo(({ error, focused, label, size }: LabelProps) => {
  const [labelLayout, setLabelLayout] = useState<{
    height: number;
    width: number;
  }>();

  styles.useVariants({ error: !!error, focused, size });

  return (
    <MotiView
      animate={{
        opacity: focused ? 1 : 0,
        translateY: focused ? -TEXT_FIELD_HEIGHTS[size] / 2 : 0,
      }}
      from={{
        opacity: 0,
        translateX: 0,
        translateY: 0,
      }}
      style={{
        left: 0,
        position: "absolute",
        zIndex: 4,
      }}
      transition={{
        damping: 18,
      }}>
      <If when={focused}>
        <View
          style={styles.labelLayer(
            (labelLayout?.height || 0) / 2,
            (labelLayout?.width || 0) + vs(12)
          )}/>
      </If>
      <MotiText
        style={styles.label}
        animate={{
          scale: focused ? 0.6 : 1,
          translateX: focused ? -TEXT_FIELD_LABEL_TRANSLATE_X[size] : 0,
        }}
        from={{
          scale: 1,
          translateX: 0,
        }}
        onLayout={(e) => setLabelLayout(e.nativeEvent.layout)}>
        {label}
      </MotiText>
    </MotiView>
  );
});

Label.displayName = "Label";
