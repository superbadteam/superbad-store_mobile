import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

interface QuantityProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const Quantity: React.FC<QuantityProps> = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
        <Feather name="minus" size={15} color={colors.background} />
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
        <Feather name="plus" size={15} color={colors.background} />
      </TouchableOpacity>
    </View>
  );
};

export default Quantity;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    backgroundColor: colors.border,
    borderRadius: 5,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    padding: 5,
    color: colors.border,
    fontFamily: "Lato-Black",
  },
});
