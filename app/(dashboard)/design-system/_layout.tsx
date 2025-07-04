import { Stack } from 'expo-router';

export default function DesignSystemLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="buttons" />
    </Stack>
  );
}