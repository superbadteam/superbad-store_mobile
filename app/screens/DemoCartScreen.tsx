import React, { useEffect, useState } from "react";
import { ScrollView, View, ViewStyle, TextStyle } from "react-native";
import { colors } from "../theme/colors";
import { Text, Button, Screen } from "../components";
import { spacing } from "app/theme";
import BackButton from "app/components/BackButton";
import CartItem from "app/components/CartItem";

const DemoCartScreen: React.FC = () => {
  const clothItems : CartItem[]=[
    {
    id : 1,
    title: "Balenciaga Shoes 2020",
    brand: "Balenciaga",
    price: 2000,
    image:
      "https://via.placeholder.com/600/92c952",
  },
  {
    id : 2,
    title: "Burberry Coat 2022",
    brand: "Burberry",
    price: 2000,
    image:
      "https://via.placeholder.com/600/92c952",
  },
  {
    id : 3,
    title: "Dior Jacket Men 2024",
    brand: "Dior",
    price: 2000,
    image: "https://via.placeholder.com/600/92c952",
  },
  {
    id : 4,
    title: "Dolce&Gabbana Shoes",
    brand: "Dolce&Gabbana",
    price: 200,
    image: "https://via.placeholder.com/600/92c952",
  },
  {
    id : 5,
    title: "Fendi Bag Women 2023",
    brand: "Fendi",
    price: 200,
    image:
      "https://via.placeholder.com/600/92c952",
  },
  {
    id : 6,
    title: "Fendi T-shirt 2020",
    brand: "Fendi",
    price: 200,
    image: "https://via.placeholder.com/600/92c952",
  },
  {
    id : 7,
    title: "Gucci Bag Women 2023",
    brand: "Gucci",
    price: 250,
    image:
      "https://via.placeholder.com/600/92c952",
  },
  {
    id : 8,
    title: "Louis Vuitton Bags 2021",
    brand: "Louis Vuitton",
    price: 250,
    image: "https://via.placeholder.com/600/92c952",
  },
  {
    id : 9,
    title: "Louis Vuitton Belt 2020",
    brand: "Louis Vuitton",
    price: 250,
    image: "https://via.placeholder.com/600/92c952",
  },
];
  const [cartItems, setCartItems] = useState<CartItem[]>(clothItems);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const initialTotalPrice = cartItems.reduce((total, item) => {
      return total + item.price;
    }, 0);
    setTotalPrice(initialTotalPrice);
  }, [cartItems]);

  const updateTotalPrice = (price: number, quantityChange: number) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + price * quantityChange);
  };

  const removeItem = (itemId: number, itemPrice: number, itemQuantity: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    updateTotalPrice(itemPrice, -itemQuantity);
  };

  const totalAmount = totalPrice ;

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={$cartHeader}>
          <BackButton tintColor={colors.text} />
          <Text style={$title} size="xl" tx={"demoCartListScreen.title"} />
        </View>
        {cartItems.map((item) => (
          <CartItem key={item.title} item={item} updateTotalPrice={updateTotalPrice} removeItem={removeItem}/>
        ))}
        <View style={$summaryCard}>
          <View style={$summaryItem}>
            <Text
              tx="demoCartListScreen.summary"
              txOptions={{ count: cartItems.length }}
              preset="formLabel"
              style={$textMedium}
            />
          </View>
          <View style={$summaryItem}>
            <Text tx={"demoCartListScreen.totalPrice"} style={$textMedium} />
            <Text tx={"demoCartListScreen.summaryPrice"} txOptions={{summaryPrice : totalAmount}} style={$textPrice} />
          </View>
          <View style={$summaryItem}>
            <Text tx={"demoCartListScreen.totalAmount"} preset="bold" style={$textTotal} />
            <Text preset="bold" tx={"demoCartListScreen.summaryPrice"} txOptions={{summaryPrice : totalAmount}} style={$textTotal} />
          </View>
        </View>
        <View style={$totalContainer}>
          <Text tx={"demoCartListScreen.totalAmount"} style={$textMedium} />
          <View style={$totalAmountContainer}>
            <Text preset="bold" tx={"demoCartListScreen.summaryPrice"} txOptions={{summaryPrice : totalAmount}} style={$textTotal} />
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

export default DemoCartScreen;

const $container: ViewStyle = {
  paddingTop: spacing.xs,
  paddingBottom: spacing.xxs,
  paddingHorizontal: spacing.md,
  backgroundColor: "white",
};
const $title: ViewStyle = {
  alignSelf: "center",
  marginLeft : 20,
  marginBottom : 10,
};
const $summaryCard: ViewStyle = {
  width: "100%",
  paddingHorizontal: spacing.xxs,
  height: 250,
  justifyContent: "space-between",
  paddingVertical: spacing.md,
  marginBottom: spacing.md,
  backgroundColor: "white",
  shadowColor: colors.palette.neutral900,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
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
const $cartHeader : ViewStyle ={
  flexDirection: "row",
};
