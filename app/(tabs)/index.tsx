import React from 'react';
import { View } from 'react-native';

import Counter from '@/features/home/components/counter';
import Stepper from '@/features/home/components/stepper';
import { tw } from '@/lib/tailwind';

export default function CounterScreen() {

  return (
    <View style={tw`flex-1 items-center justify-center bg-primary-500`}>
      <Counter />
      <Stepper />
    </View>
  );
}