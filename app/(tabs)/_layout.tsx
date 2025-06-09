import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          default: {},
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons color={color} name="home" size={28} />,
          title: 'Home',
        }}/>
      <Tabs.Screen
        name="posts"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons color={color} name="send" size={28} />,
          title: 'Posts',
        }}/>
    </Tabs>
  );
}
