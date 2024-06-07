import React from "react";
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../theme/colors";
import { spacing } from "app/theme";

interface QuantityProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const Quantity: React.FC<QuantityProps> = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <View style={$container}>
      <TouchableOpacity style={$button} onPress={decreaseQuantity}>
        <Feather name="minus" size={15} />
      </TouchableOpacity>
      <Text style={$quantity}>{quantity}</Text>
      <TouchableOpacity style={$button} onPress={increaseQuantity}>
        <Feather name="plus" size={15} />
      </TouchableOpacity>
    </View>
  );
};

export default Quantity;

const $container: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: colors.palette.gray200,
  borderRadius: spacing.xxs,
};
const $button: ViewStyle = {
  paddingHorizontal: spacing.sm,
  paddingVertical: spacing.xxs,
  alignItems: "center",
  justifyContent: "center",
};
const $quantity: TextStyle = {
  padding: spacing.xxs,
  color: colors.text,
};
