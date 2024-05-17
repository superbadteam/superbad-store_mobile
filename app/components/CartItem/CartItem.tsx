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
import { Text } from "../Text";
import Quantity from "../Quantity/Quantity";
import { colors } from "../../theme/colors";
import { spacing } from "app/theme";

interface CartItemProps {
  item: {
    image: any;
    title: string;
    brand: string;
    price: number;
  };
  updateTotalPrice: (price: number, quantityChange: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, updateTotalPrice }) => {
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    updateTotalPrice(item.price * quantity, quantity);
  }, [quantity]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      prevQuantity++;
      updateTotalPrice(item.price, 1);
      return prevQuantity;
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        prevQuantity--;
        updateTotalPrice(item.price, -1);
        return prevQuantity;
      });
    }
  };

  const handleDeletePress = () => {
    Alert.alert("Remove Item", "Are you sure you want to remove this item from your cart?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Remove",
        onPress: () => {
          console.log("Item removed from cart");
        },
      },
    ]);
  };

  return (
    <View style={$container}>
      <View style={$imageContainer}>
        <Image source={item.image} style={$image} />
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

export default CartItem;

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
