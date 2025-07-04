import { useRouter } from 'expo-router';
import React from 'react';
import { Button, View } from 'react-native';

import { tw } from '@/lib/tailwind';
import { useAuthStore } from '@/stores/use-auth-store';

export default function DashboardScreen() {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/signin');
  };

  return (
    <View style={tw`flex-1 items-center justify-center bg-primary-500`}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}