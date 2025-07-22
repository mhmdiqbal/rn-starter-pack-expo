import { Image, useImage } from "expo-image";
import { View } from "react-native";

import IcSearch from "@/assets/images/svgs/icons/search.svg";
import ButtonIcon from "@/components/button-icon";
import Text from "@/components/text";
import TextField from "@/components/text-field";
import gs from "@/lib/global-styles";

import styles from "./header.styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextField
          placeholder="Search category or menu"
          style={styles.searchInput}
          RightComponent={
            <ButtonIcon
              stroke={false}
              variant="neutral"
              icon={({ color, height, width }) => (
                <IcSearch color={color} height={height} width={width} />
              )}
              onPress={() => {}}/>
          }/>
      </View>

      <ProfileInfo />
    </View>
  );
}

const ProfileInfo = () => {
  return (
    <View style={[gs.rowCenter, gs.gap(8)]}>
      <Image source="https://i.pravatar.cc/300" style={styles.avatar} />
      <View style={gs.gap(4)}>
        <Text variant="label-lg">John Doe</Text>
        <Text variant="body-sm">Owner</Text>
      </View>
    </View>
  );
};
