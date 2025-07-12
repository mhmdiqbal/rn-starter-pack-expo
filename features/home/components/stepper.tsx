import { View } from "react-native";
import { useShallow } from "zustand/react/shallow";

// import CounterButton from "@/components/atoms/counter-button";
import { useCounterStore } from "../stores";

const Stepper = () => {
  const { decrement, increment } = useCounterStore(
    useShallow((state) => ({
      decrement: state.decrement,
      increment: state.increment,
    }))
  );

  return (
    <View>
      {/* <CounterButton symbol="-" onPress={decrement} />
      <CounterButton symbol="+" onPress={increment} /> */}
    </View>
  );
};
export default Stepper;
