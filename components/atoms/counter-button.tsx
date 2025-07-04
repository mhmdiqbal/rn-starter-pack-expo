import { tw } from "@/lib/tailwind";
import { Text, TouchableOpacity } from "react-native";

interface CounterButtonProps {
  onPress: () => void;
  symbol: string;
}

const CounterButton = ({ onPress, symbol }: CounterButtonProps) => {
  return (
    <TouchableOpacity style={tw`bg-white px-4 py-2 rounded`} onPress={onPress}>
      <Text style={tw`text-primary-500 text-xl`}>{symbol}</Text>
    </TouchableOpacity>
  );
};

export default CounterButton;
