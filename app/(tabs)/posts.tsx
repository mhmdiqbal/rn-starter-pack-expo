import { Skeleton } from 'moti/skeleton';
import React, { memo } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { usePosts } from '@/features/home/queries';
import tw from '@/lib/tailwind';

const SKELETONS = Array.from({ length: 10 }, (_, i) => ({ id: i, title: 'Loading...' }));

export default function PostsScreen() {
  const { data, error, isLoading, refetch } = usePosts();

  if (error) return <Text>Error loading users.</Text>;

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {isLoading ?
        <FlatList
          data={SKELETONS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={() => (
            <SkeletonCard />
          )} />
        :
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={refetch} />
          }
          renderItem={({ item }) => (
            <Card item={item} />
          )} />
      }
    </SafeAreaView>
  );
}

type CardProps = {
  item: {
    id: number;
    title: string;
  };
};

const Card = memo(({ item }: CardProps) => {
  return (
    <View style={tw`border-b border-gray-200 p-4`}>
      <Text>{item.title}</Text>
    </View>
  );
});

const SkeletonCard = memo(() => {
  return (
    <View style={tw`border-b border-gray-200 px-4 py-2`}>
      <Skeleton height={20} radius="round" width="100%" />
    </View>
  );
})

Card.displayName = 'Card';
SkeletonCard.displayName = 'SkeletonCard';
