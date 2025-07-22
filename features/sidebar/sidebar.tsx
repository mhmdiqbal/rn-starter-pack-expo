import { usePathname, useRouter } from "expo-router";
import { View } from "react-native";

import TabItem from "./components/tab-item";
import { TABS } from "./sidebar.cons";
import styles from "./sidebar.styles";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {TABS.map(({ Icon, ...tab }) => {
        const comparedPath = tab.path.replace("/(dashboard)", "");
        const isActive =
          pathname === comparedPath ||
          (comparedPath === "" && pathname === "/");
        return (
          <TabItem
            Icons={Icon}
            isActive={isActive}
            key={tab.label}
            label={tab.label}
            onPress={() => router.replace(tab.path as any)}/>
        );
      })}
    </View>
  );
}
