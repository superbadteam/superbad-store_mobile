import React, { useEffect, useState } from "react";
import {
  Image,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "./Text";
import Quantity from "./Quantity";
import { colors , spacing } from "app/theme";
interface CartItems {
  id : number;
  title: string;
  brand: string;
  price: number;
  image : string;
}
export interface CartItemProps {
  item: CartItems;
  updateTotalPrice: (price: number, quantityChange: number) => void;
  removeItem: (itemId: number, itemPrice: number, itemQuantity: number) => void;
}

const CartItems : React.FC<CartItemProps> = ({ item, updateTotalPrice,removeItem }) => {
  const [quantity, setQuantity] = useState<number>(1);
  useEffect(() => {
    updateTotalPrice(item.price * quantity, 0);
  }, []);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      updateTotalPrice(item.price, 1);
      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1;
        if (newQuantity === 0) {
          handleDeletePress();
        } else {
          updateTotalPrice(item.price, -1);
        }
        return newQuantity > 0 ? newQuantity : prevQuantity;
      });
    }
  };
  const handleDeletePress = () => {
    setQuantity(0);
    removeItem(item.id, item.price, quantity);
  };

  return (
    <View style={$container}>
      <View style={$imageContainer}>
        <Image source={{uri : item.image}} style={$image} />
        <TouchableOpacity onPress={handleDeletePress} style={$iconContainer}>
          <MaterialCommunityIcons name="delete" size={25} color={colors.palette.angry500} />
          <Text tx="demoCartListScreen.cartItem.delete" style={$textDelete} />
        </TouchableOpacity>
      </View>
      <View style={$itemInformation}>
        <View style={$directionRow}>
          <Text tx="demoCartListScreen.cartItem.title" txOptions={{title : item.title}} style={$title} />
        </View>
        <View style={$directionRow}>
          <Text tx="demoCartListScreen.cartItem.brand" txOptions={{brand : item.brand}} style={$textMedium} />
          <Text tx="demoCartListScreen.cartItem.itemPrice" txOptions={{itemPrice : item.price}} style={$textMedium} />
        </View>
        <View style={$directionRow}>
          <Text tx="demoCartListScreen.cartItem.quantityPrice" txOptions={{quantityPrice : item.price*quantity}} style={$textMedium} preset="bold" />
          <Quantity
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItems;

const $container: ViewStyle = {
  flexDirection: "row",
  width: "100%",
  paddingHorizontal: spacing.sm,
  height: 250,
  justifyContent: "space-between",
  paddingVertical: spacing.sm,
  marginBottom: spacing.xl,
  shadowColor: colors.palette.neutral900,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: spacing.xxxs,
  borderRadius: spacing.sm,
};
const $imageContainer: ViewStyle = {
  flexDirection: "column",
  justifyContent: "space-between",
};
const $image: ImageStyle = {
  width: "150%",
  height: 170,
  borderRadius: spacing.xxs,
};
const $itemInformation: ViewStyle = {
  width: "60%",
  paddingLeft: spacing.xl - spacing.xxxs,
};
const $directionRow: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: spacing.xxs,
};
const $iconContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  borderRadius: spacing.xxs,
  marginBottom: spacing.sm - spacing.xxxs,
};
const $title: TextStyle = {
  fontSize: spacing.md,
};
const $textMedium: TextStyle = {
  color: colors.text,
};
const $textDelete: TextStyle = {
  color: colors.error,
  fontSize: spacing.md,
};
