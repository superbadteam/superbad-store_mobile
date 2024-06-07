import React, { useEffect, useState } from "react";
import {
  Image,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "./Text";
import Quantity from "./Quantity";
import { colors } from "../theme/colors";
import { spacing } from "app/theme";
import { translate } from "../i18n";
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
    Alert.alert(
      translate("demoCartListScreen.cartItem.titleAlert")
      ,
      translate("demoCartListScreen.cartItem.question")
      , [
      {
        text:  translate("demoCartListScreen.cartItem.cancel"),
        style: "cancel",
      },
      {
        text:  translate("demoCartListScreen.cartItem.delete"),
        onPress: () => {
          setQuantity(0);
          removeItem(item.id, item.price, quantity);
        },
      },
    ]);
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
          <Text text={item.title} style={$title} />
        </View>
        <View style={$directionRow}>
          <Text text={item.brand} style={$textMedium} />
          <Text text={`$${item.price}`} style={$textMedium} />
        </View>
        <View style={$directionRow}>
          <Text text={`$${item.price * quantity}`} style={$textMedium} preset="bold" />
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
  backgroundColor: "white",
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
