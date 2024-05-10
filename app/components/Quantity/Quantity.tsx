import React from "react";
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

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
  backgroundColor: colors.gray_200,
  borderRadius: 5,
};
const $button: ViewStyle = {
  paddingHorizontal: 10,
  paddingVertical: 5,
  alignItems: "center",
  justifyContent: "center",
};
const $quantity: TextStyle = {
  padding: 5,
  color: colors.text,
};