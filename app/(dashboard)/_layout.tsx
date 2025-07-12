import { Slot, usePathname, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import gs from "@/lib/global-styles";

const tabs = [
  { label: "Dashboard", path: "/(dashboard)" },
  { label: "Menu", path: "/(dashboard)/menu" },
  // { label: 'Receipts', path: '/(dashboard)/receipts' },
  // { label: 'Stock', path: '/(dashboard)/stock' },
  // { label: 'Expenses', path: '/(dashboard)/expenses' },
  // { label: 'Report', path: '/(dashboard)/report' },
  // { label: 'Business', path: '/(dashboard)/business' },
  // { label: 'Attendance', path: '/(dashboard)/attendance' },
  // { label: 'Settings', path: '/(dashboard)/settings' },
  { label: "Design System", path: "/(dashboard)/design-system" },
];

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

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <View>
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        return (
          <TouchableOpacity
            disabled={isActive}
            key={tab.path}
            onPress={() => router.replace(tab.path as any)}>
            <Text>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
