import { Text, View } from 'react-native';

import tw from '@/lib/tailwind';


export default function HomeScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-primary-500`}>
      <View>
        <Text>abcdef</Text>
      </View>
    </View>
  );
}