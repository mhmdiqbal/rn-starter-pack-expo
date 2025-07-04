import "react-native-gesture-handler";
import "react-native-reanimated";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack, usePathname, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, useColorScheme, View } from "react-native";

import { useCustomFonts } from "@/hooks/use-custom-fonts";
import { queryClient } from "@/lib/query-client";
import { useAuthStore } from "@/stores/use-auth-store";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { loaded } = useCustomFonts();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();
  const pathname = usePathname();

  const isProtectedRoute = pathname.startsWith("/(dashboard)");

  useEffect(() => {
    if (!isAuthenticated && isProtectedRoute) {
      router.replace("/signin");
    }
  }, [isAuthenticated, pathname]);

  if (!loaded) {
    return null;
  }

  if (isProtectedRoute && !isAuthenticated) {
    return (
      <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
          <Stack.Screen name="signin" options={{ headerShown: false }} />
          <Stack.Screen name="signout" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
