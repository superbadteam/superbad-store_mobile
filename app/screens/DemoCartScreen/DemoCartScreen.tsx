import React, { useEffect, useState } from "react";
import { ScrollView, View, ViewStyle, TextStyle } from "react-native";
import { Text } from "../../components/Text";
import CartItem from "../../components/CartItem/CartItem";
import { colors } from "../../theme/colors";
import { clothItems } from "../../data/data";
import { Button, Screen } from "../../components";
import { spacing } from "app/theme";

const MyCart: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const updateTotalPrice = (price: number, quantityChange: number) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + (price * quantityChange));
  };
  const deliveryFee = 2;  
  const discount = 5;
  const totalAmount = totalPrice + deliveryFee - discount;
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={$title} size="xl" text={"My Cart"} />
        {clothItems.slice(0, 7).map((item) => (
          <CartItem key={item.title} item={item} updateTotalPrice={updateTotalPrice} />
        ))}
        <View style={$sumaryCard}>
          <View style={$summaryItem}>
            <Text
              text={"Price Detail (" + `${7}` + " items)"}
              preset="formLabel"
              style={$textMedium}
            />
          </View>
          <View style={$summaryItem}>
            <Text text={"Total Price"} style={$textMedium} />
              <Text text={`$${totalPrice}`} style={$textPrice} />
          </View>
          <View style={$summaryItem}>
            <Text text={"Discount"} style={$textMedium} />
              <Text text={"$5"} style={$textMedium} />
          </View>
          <View style={$summaryItem}>
            <Text text={"Delivery fee"} style={$textMedium} />
              <Text text={"$2"} style={$textMedium} />
          </View>
          <View style={$summaryItem}>
            <Text text={"Total Amount"} preset="bold" style={$textTotal} />
            <Text preset="bold" text={`$${totalAmount}`} style={$textTotal} />
          </View>
        </View>
        <View style={$totalContainer}>
          <Text text={"Total Amount"} style={$textMedium} />
          <View style={$totalAmountContainer}>
            <Text preset="bold" text={`$${totalAmount}`} style={$textTotal} />
            <Button text={"Continue"} style={$button} textStyle={$buttonLabel} />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default MyCart;

const $container: ViewStyle = {
  paddingTop: spacing.lg,
  paddingBottom: spacing.xxs,
  paddingHorizontal: spacing.md,
  backgroundColor: "white",
};
const $title: ViewStyle = {
  alignSelf: "center",
  paddingVertical: 10,
};
const $sumaryCard: ViewStyle = {
  width : "100%",
  paddingHorizontal: 5,
  height: 250,
  justifyContent: "space-between",
  paddingVertical: 15,
  marginBottom: 15,
  backgroundColor: "white",
  elevation: 2,
  borderRadius: 5,
};
const $summaryItem: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  paddingVertical: 5,
  marginRight : 5,
  borderBottomColor: colors.border,
  
};

const $textTotal: TextStyle = {
  marginTop: 10,
  fontSize: 20,
};
const $textMedium: TextStyle = {
  flexDirection: "row",
  color: colors.text,
  textAlign: "left",
};
const $textPrice: TextStyle = {
  flexDirection: "row",
  color: colors.text,
  textAlign: "right",
};
const $button: ViewStyle = {
  width: "50%",
  alignSelf: "flex-end",
  backgroundColor: colors.theme,
  borderRadius: 20,
};
const $buttonLabel: TextStyle = {
  textAlign: "center",
  color: colors.background,
};
const $totalContainer: ViewStyle = {
   marginTop : 30,
};
const $totalAmountContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
  marginLeft: 20,
};
