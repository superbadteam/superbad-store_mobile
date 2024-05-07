import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Text} from "../Text";
import Quantity from "../Quantity/Quantity";
import { colors} from "../../theme/colors";

interface CartItemProps {
  item: {
    image: any;
    title: string;
    brand: string;
    price: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [quantity, setQuantity] = useState<number>(2);
  
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.itemInformations}>
        <View style={styles.directionRow}>
          <Text text={item.title} style={styles.title} />
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="heart"
              size={20}
              color={colors.palette.angry500}
            />
          </View>
        </View>
        <View style={styles.directionRow}>
          <Text text={item.brand} style={styles.textMedium} />
          <Text
            text={`$${item.price}.00`}
            style={styles.textMedium}
          />
        </View>
        <View style={styles.directionRow}>
          <Text
            text={`$${item.price}.00`}
            style={styles.textMedium}
          />
          <Quantity quantity={quantity} increaseQuantity={function (): void {
                      throw new Error("Function not implemented.");
                  } } decreaseQuantity={function (): void {
                      throw new Error("Function not implemented.");
                  } } />
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    height: 150,
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  image: {
    width: "40%",
    height: "100%",
    borderRadius: 10,
  },
  itemInformations: {
    width: "60%",
    paddingLeft: 10,
  },
  directionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  iconContainer: {
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderRadius: 5,
  },
  title: {
    fontFamily: "Lato-Black",
    fontSize: 16,
  },
  textMedium: {
    fontFamily: "Lato-Black",
    color: colors.border,
  },
});
