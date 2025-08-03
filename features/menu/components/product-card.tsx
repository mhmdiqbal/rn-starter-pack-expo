import { Image } from "expo-image";
import { View } from "react-native";

import ButtonBase from "@/components/button-base";
import Text from "@/components/text";

import styles from "./product-card.styles";
import { Product } from "./product-card.types";

const formatPrice = (price: number) => {
  return `Rp ${price.toLocaleString("id-ID")}`;
};

export default function ProductCard({ item }: { item: Product }) {
  return (
    <ButtonBase style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{formatPrice(item.price)}</Text>
      </View>
    </ButtonBase>
  );
}
