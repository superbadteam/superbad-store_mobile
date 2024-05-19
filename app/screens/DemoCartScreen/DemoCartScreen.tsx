import React, { useEffect, useState } from "react";
import { ScrollView, View, ViewStyle, TextStyle } from "react-native";
import CartItem from "../../components/CartItem/CartItem";
import { colors } from "../../theme/colors";
import { clothItems } from "../../data/data";
import { Text, Button, Screen } from "../../components";
import { spacing } from "app/theme";

const MyCart: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const initialTotalPrice = clothItems.reduce((total, item) => {
      return total + item.price;
    }, 0);
    setTotalPrice(initialTotalPrice);
  }, []);

  const updateTotalPrice = (price: number, quantityChange: number) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + price * quantityChange);
  };
  const deliveryFee = 2;
  const discount = 5;
  const totalAmount = totalPrice + deliveryFee - discount;
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={$title} size="xl" tx={"demoCartListScreen.title"} />
        {clothItems.map((item) => (
          <CartItem key={item.title} item={item} updateTotalPrice={updateTotalPrice} />
        ))}
        <View style={$summaryCard}>
          <View style={$summaryItem}>
            <Text
              text={"Price Detail (" + `${clothItems.length}` + " items)"}
              preset="formLabel"
              style={$textMedium}
            />
          </View>
          <View style={$summaryItem}>
            <Text tx={"demoCartListScreen.totalPrice"} style={$textMedium} />
            <Text text={`$${totalPrice}`} style={$textPrice} />
          </View>
          <View style={$summaryItem}>
            <Text tx={"demoCartListScreen.discount"} style={$textMedium} />
            <Text text={"$5"} style={$textMedium} />
          </View>
          <View style={$summaryItem}>
            <Text tx={"demoCartListScreen.totalAmount"} style={$textMedium} />
            <Text text={"$2"} style={$textMedium} />
          </View>
          <View style={$summaryItem}>
            <Text tx={"demoCartListScreen.totalAmount"} preset="bold" style={$textTotal} />
            <Text preset="bold" text={`$${totalAmount}`} style={$textTotal} />
          </View>
        </View>
        <View style={$totalContainer}>
          <Text tx={"demoCartListScreen.totalAmount"} style={$textMedium} />
          <View style={$totalAmountContainer}>
            <Text preset="bold" text={`$${totalAmount}`} style={$textTotal} />
            <Button
              tx={"demoCartListScreen.button.continue"}
              style={$button}
              textStyle={$buttonLabel}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default MyCart;

const $container: ViewStyle = {
  paddingTop: spacing.xs,
  paddingBottom: spacing.xxs,
  paddingHorizontal: spacing.md,
  backgroundColor: "white",
};
const $title: ViewStyle = {
  alignSelf: "center",
  paddingVertical: spacing.sm,
};
const $summaryCard: ViewStyle = {
  width: "100%",
  paddingHorizontal: spacing.xxs,
  height: 250,
  justifyContent: "space-between",
  paddingVertical: spacing.md,
  marginBottom: spacing.md,
  backgroundColor: "white",
  elevation: spacing.xxxs,
  borderRadius: spacing.xxs,
};
const $summaryItem: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.xxs,
  marginRight: spacing.xxs,
  borderBottomColor: colors.border,
};

const $textTotal: TextStyle = {
  marginTop: spacing.md,
  fontSize: spacing.md,
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
  backgroundColor: colors.blue,
  borderRadius: spacing.sm,
};
const $buttonLabel: TextStyle = {
  textAlign: "center",
  color: colors.background,
};
const $totalContainer: ViewStyle = {
  marginTop: spacing.md,
};
const $totalAmountContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: spacing.md,
  marginLeft: spacing.md,
};
