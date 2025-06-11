import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { usePosts } from '@/features/home/queries';
import tw from '@/lib/tailwind';

export default function PostsScreen() {
  const { data, error, isLoading } = usePosts();

  console.log('ExploreScreen data:', data);

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error loading users.</Text>;

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ borderBottomWidth: 1, borderColor: '#eee', padding: 16 }}>
            <Text>{item.title}</Text>
          </View>
        )} />
    </SafeAreaView>
  );
}

