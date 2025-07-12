import React from "react";
import { Text, View } from "react-native";

import { usePosts } from "@/features/home/queries";

export default function MenuScreen() {
  const { data, error, isLoading, refetch } = usePosts();

  if (error) return <Text>Error loading users.</Text>;

  return <View />;
}
