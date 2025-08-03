import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";

import ProductCard from "./product-card";
import { Product } from "./product-card.types";
import styles from "./product-list.styles";

const mockProducts: Product[] = [
  {
    id: "1",
    image: "https://via.placeholder.com/150",
    name: "Lemon Tea",
    price: 14500,
  },
  {
    id: "2",
    image: "https://via.placeholder.com/150",
    name: "Milk Tea",
    price: 18000,
  },
  {
    id: "3",
    image: "https://via.placeholder.com/150",
    name: "Orange Juice",
    price: 19500,
  },
  {
    id: "4",
    image: "https://via.placeholder.com/150",
    name: "Milo Chocolate",
    price: 20500,
  },
  {
    id: "5",
    image: "https://via.placeholder.com/150",
    name: "Starberry Milk",
    price: 25500,
  },
  {
    id: "6",
    image: "https://via.placeholder.com/150",
    name: "Americano",
    price: 18500,
  },
  {
    id: "7",
    image: "https://via.placeholder.com/150",
    name: "Caramel Huzelnut",
    price: 24500,
  },
  {
    id: "8",
    image: "https://via.placeholder.com/150",
    name: "Affogato",
    price: 20000,
  },
  {
    id: "9",
    image: "https://via.placeholder.com/150",
    name: "Lava Ice Cream",
    price: 17500,
  },
  {
    id: "10",
    image: "https://via.placeholder.com/150",
    name: "Tropical Punch",
    price: 24500,
  },
  {
    id: "11",
    image: "https://via.placeholder.com/150",
    name: "Chocolate Fudge Brownie",
    price: 20500,
  },
  {
    id: "12",
    image: "https://via.placeholder.com/150",
    name: "Strawberry Juice",
    price: 14500,
  },
  {
    id: "13",
    image: "https://via.placeholder.com/150",
    name: "French Fries",
    price: 15000,
  },
  {
    id: "14",
    image: "https://via.placeholder.com/150",
    name: "Onion Bhaji",
    price: 18000,
  },
  {
    id: "15",
    image: "https://via.placeholder.com/150",
    name: "Stuffed Jalapenos",
    price: 22000,
  },
  {
    id: "16",
    image: "https://via.placeholder.com/150",
    name: "Mint Chocolate Chip",
    price: 19000,
  },
];

export default function ProductList() {
  const renderItem = ({ item }: { item: Product }) => (
    <ProductCard item={item} />
  );

  return (
    <FlashList
      columnWrapperStyle={{ gap: 16 }}
      contentContainerStyle={styles.container}
      data={mockProducts}
      estimatedItemSize={200}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={(item) => item.id}
      numColumns={4}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}/>
  );
}
