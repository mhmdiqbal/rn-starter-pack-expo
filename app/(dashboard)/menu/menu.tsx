import React from "react";
import { Text, View } from "react-native";

import { usePosts } from "@/features/home/queries";
import Header from "@/features/menu/components/header";

import styles from "./styles";

export default function MenuScreen() {
  const { data, error, isLoading, refetch } = usePosts();

  if (error) return <Text>Error loading users.</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />
      </View>
      <View style={styles.orderContainer} />
    </View>
  );
}
