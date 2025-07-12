import { Slot } from "expo-router";
import { View } from "react-native";

import Sidebar from "@/features/sidebar";
import gs from "@/lib/global-styles";

export default function DashboardLayout() {
  return (
    <View style={[gs.flex1, gs.row]}>
      <Sidebar />
      <View style={gs.flex1}>
        <Slot />
      </View>
    </View>
  );
}
