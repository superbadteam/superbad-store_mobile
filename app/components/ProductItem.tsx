import { Ionicons } from "@expo/vector-icons";
import { colors, spacing } from "app/theme";
import React from "react";
import { View, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AutoImage } from "./AutoImage";
import { Text } from "./Text";

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  rating: number;
  isFavorite: boolean;
  discount: number;
}

export interface ProductItemProps {
  product: Product;
}
const ProductItem = (props: ProductItemProps) => {
  const { name, price, imageUrl, rating, isFavorite, discount } = props.product;
  const discountedPriceTx = price - (price * discount) / 100;
  return (
    <View style={$container}>
      <AutoImage maxWidth={190} maxHeight={190} source={{ uri: imageUrl }} style={$image} />

      <View style={$favoriteContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("Favorite button pressed");
          }}
          style={$favoriteButton}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={24}
            color={isFavorite ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>

      <View style={$infor}>
        <View>
          <Text style={$productName} text={name} />
        </View>
        <View style={$priceContainer}>
          <Text style={$discountedPrice} text={`$${discountedPriceTx}`} size="sm" />
          <Text style={$originalPrice} text={`$${price}`} size="xs" />
          <Text style={$discountAmount} text={`${discount}% OFF`} size="xs" />
        </View>
        <View style={$ratingContainer}>
          <Ionicons name="star-outline" size={20} color="gold" />
          <Text text={`${rating} (100)`} size="md" />
        </View>
      </View>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  padding: spacing.sm,
};

const $image: ViewStyle & ImageStyle = {
  borderRadius: 15,
  marginBottom: spacing.xs,
};

const $infor: ViewStyle = {
  alignItems: "flex-start",
};

const $favoriteContainer: ViewStyle = {
  alignItems: "center",
  backgroundColor: colors.palette.white,
  borderBlockColor: "black",
  borderRadius: spacing.md,
  height: 40,
  justifyContent: "center",
  position: "absolute",
  right: 20,
  top: 20,
  width: 40,
  zIndex: 1,
};

const $favoriteButton: ViewStyle = {
  alignItems: "center",
  height: "100%",
  justifyContent: "center",
  width: "100%",
};

const $productName: TextStyle = {
  fontWeight: "normal",
  marginBottom: spacing.xxs,
  textAlign: "left",
};

const $priceContainer: ViewStyle = {
  alignItems: "flex-end",
  flexDirection: "row",
};

const $discountedPrice: TextStyle = {
  color: colors.palette.green,
  marginRight: spacing.xxs,
};

const $originalPrice: TextStyle = {
  color: colors.palette.gray,
  marginRight: spacing.xxs,
  textDecorationLine: "line-through",
};

const $discountAmount: TextStyle = {
  color: colors.palette.red,
};

const $ratingContainer: TextStyle = {
  alignItems: "center",
  flexDirection: "row",
};

export default ProductItem;
