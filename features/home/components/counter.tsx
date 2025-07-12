import { Text } from "react-native";

import { useCounterStore } from "../stores";

const Counter = () => {
  const { count } = useCounterStore();
  return <Text>Count: {count}</Text>;
};
export default Counter;
