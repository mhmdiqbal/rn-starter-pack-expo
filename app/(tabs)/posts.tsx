import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { usePosts } from '@/features/home/queries';

export default function PostsScreen() {
  const { data, error, isLoading } = usePosts();

  console.log('ExploreScreen data:', data);

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error loading users.</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ borderBottomWidth: 1, borderColor: '#eee', padding: 16 }}>
          <Text>{item.title}</Text>
        </View>
      )} />
  );
}

