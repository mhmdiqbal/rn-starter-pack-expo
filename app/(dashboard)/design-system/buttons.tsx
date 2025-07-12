import { ScrollView, View } from "react-native";

import IcEye from "@/assets/images/svgs/icons/ic-eye.svg";
import Button, { ButtonSizes, ButtonVariants } from "@/components/button";
import ButtonIcon, {
  ButtonIconSizes,
  ButtonIconVariants,
} from "@/components/button-icon";
import Text from "@/components/text";
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
      <Text variant="heading-3">{variant}</Text>
      <ButtonGroupSizes size="lg" variant={variant} />
      <ButtonGroupSizes size="md" variant={variant} />
      <ButtonGroupSizes size="sm" variant={variant} />
      <ButtonIconGroupSizes size="lg" variant={variant} />
      <ButtonIconGroupSizes size="md" variant={variant} />
      <ButtonIconGroupSizes size="sm" variant={variant} />
    </View>
  );
};

interface ButtonGroupSizesProps {
  size: ButtonSizes;
  variant: ButtonVariants;
}

const ButtonGroupSizes = ({ size, variant }: ButtonGroupSizesProps) => {
  return (
    <View style={tw`gap-2`}>
      <Button size={size} title="Button" variant={variant} onPress={() => {}} />
      <Button
        disabled
        size={size}
        title="Button"
        variant={variant}
        onPress={() => {}}/>
      <Button
        size={size}
        title="Button"
        variant={variant}
        leftIcon={({ color, height, width }) => (
          <IcEye color={color} height={height} width={width} />
        )}
        onPress={() => {}}/>
      <Button
        size={size}
        title="Button"
        variant={variant}
        rightIcon={({ color, height, width }) => (
          <IcEye color={color} height={height} width={width} />
        )}
        onPress={() => {}}/>
      <Button
        size={size}
        title="Button"
        variant={variant}
        leftIcon={({ color, height, width }) => (
          <IcEye color={color} height={height} width={width} />
        )}
        rightIcon={({ color, height, width }) => (
          <IcEye color={color} height={height} width={width} />
        )}
        onPress={() => {}}/>
      <Button
        disabled
        size={size}
        title="Button"
        variant={variant}
        leftIcon={({  color, height, width  }) => (
          <IcEye color={color} height={height} width={width} />
        )}
        rightIcon={({  color, height, width  }) => (
          <IcEye color={color} height={height} width={width} />
        )}
        onPress={() => {}}/>
    </View>
  );
};

interface ButtonIconGroupSizesProps {
  size: ButtonIconSizes;
  variant: ButtonIconVariants;
}

const ButtonIconGroupSizes = ({ size, variant }: ButtonIconGroupSizesProps) => {
  return (
    <View style={tw`gap-2`}>
      <ButtonIcon
        size={size}
        variant={variant}
        icon={({ color, height, width }) => (
          <IcEye color={color} height={height} width={width} />
        )}
        onPress={() => {}}/>
      <ButtonIcon
        disabled
        size={size}
        variant={variant}
        icon={({ color, height, width }) => (
          <IcEye color={color} height={height} width={width} />
        )}
        onPress={() => {}}/>
    </View>
  );
};
