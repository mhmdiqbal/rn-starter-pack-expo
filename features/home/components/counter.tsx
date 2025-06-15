import { Text } from "react-native";

import { tw } from "@/lib/tailwind";

import { useCounterStore } from "../stores";

const Counter = () => {
  const { count } = useCounterStore();
  return (
    <Text style={tw`text-2xl mb-4`}>Count: {count}</Text>
  );
}
export default Counter;