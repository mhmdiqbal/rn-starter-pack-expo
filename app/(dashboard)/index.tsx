import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

import gs from "@/lib/global-styles";
import { useAuthStore } from "@/stores/use-auth-store";

export default function DashboardScreen() {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace("/signin");
  };

  return (
    <View style={[gs.flex1, gs.centerAll]}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
