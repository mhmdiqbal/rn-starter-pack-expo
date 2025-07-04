import { Text } from "react-native";

import { tw } from "@/lib/tailwind";

import { useCounterStore } from "../stores";

const Counter = () => {
  const { count } = useCounterStore();
  return (
    <Text style={tw`font-sans text-lg text-neutral-100 mb-4`}>Count: {count}</Text>
  );
}
export default Counter;