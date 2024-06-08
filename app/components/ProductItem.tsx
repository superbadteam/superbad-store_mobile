import { colors, spacing } from "app/theme";
import React, { useState } from "react";
import { View, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { AutoImage } from "./AutoImage";
import { Text } from "./Text";
import StarRating from "react-native-star-rating-widget";

export interface Product {
  id: number;
  name: string;
  minPrice: number;
  maxPrice: number;
  imageUrl: string;
  sold: number;
  rating: number;
}

export interface ProductItemProps {
  product: Product;
}
const ProductItem = (props: ProductItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, name, minPrice, maxPrice, imageUrl, sold, rating } = props.product;
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
  };

  const [setRating] = useState(0);

  return (
    <View style={$container}>
      <View>
        <AutoImage
          maxWidth={190}
          maxHeight={190}
          source={{ uri: imageUrl }}
          style={$image}
          resizeMode="cover"
        />
      </View>

      <View style={$infor}>
        <View>
          <Text style={$productName} text={name} numberOfLines={2} />
        </View>
        <View style={$priceContainer}>
          <Text style={$discountedPrice} text={`${formatCurrency(minPrice)}`} size="sm" />
        </View>
        <View style={$ratingSoldContainer}>
          <View style={$ratingContainer}>
            <StarRating
              rating={rating}
              onChange={setRating}
              starSize={20}
              starStyle={{ marginHorizontal: spacing.xxxs }}
              style={{ marginRight: spacing.xs }}
            />
            <Text text={`${rating}/5`} size="md" />
          </View>
          <View style={$soldContainer}>
            <Text tx="productItem.sold"></Text>
            <Text text={`${sold}`}></Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  padding: spacing.sm,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: colors.gray,
};

const $image: ViewStyle & ImageStyle = {
  borderRadius: 15,
  padding: spacing.xxs,
  marginBottom: spacing.xs,
  width: "100%",
};

const $infor: ViewStyle = {
  alignItems: "flex-start",
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

const $ratingContainer: TextStyle = {
  alignItems: "flex-start",
  flexDirection: "row",
};

const $ratingSoldContainer: ViewStyle = {
  alignItems: "flex-start",
  flexDirection: "column",
};

const $soldContainer: TextStyle = {
  alignItems: "flex-start",
  flexDirection: "row",
  gap: spacing.xs,
};

export default ProductItem;
