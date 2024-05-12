import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity, TextStyle, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import SlideShow from "app/components/SlideShow";
import { Text } from "app/components";

const colors = {
  white: "#fff",
  text: "#000",
  green: "green",
  blue: "blue",
  border: "#ccc",
  gray: "gray",
  orange: "orange",
};

interface BackButtonProps {
  tintColor: string;
}

const BackButton: React.FC<BackButtonProps> = ({ tintColor }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={$iconContainer} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color={tintColor} />
    </TouchableOpacity>
  );
};

const ProductDetailScreen = () => {
  const product = {
    id: 1,
    name: "Sample Product",
    brand: "Gucci",
    price: 99.99,
    description:
      "This is a fantastic example product. It's made with high-quality materials and designed to last. Whether you're using it at home or on the go, it's sure to meet your needs. It's made with high-quality materials and designed to last. Whether you're using it at home or on the go, it's sure to meet your needs. It's made with high-quality materials and designed to last. Whether you're using it at home or on the go, it's sure to meet your needs.",
    imageUrl: "https://via.placeholder.com/200",
    sizes: ["S", "M", "L", "XL", "XXL"],
  };

  const images = [
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/771796",
    "https://via.placeholder.com/600/24f355",
    "https://via.placeholder.com/600/d32776",
    "https://via.placeholder.com/600/f66b97",
  ];

  const [selectedSize, setSelectedSize] = useState("");

  return (
    <View style={$container}>
      <ScrollView style={$scrollView}>
        <View style={$header}>
          <BackButton tintColor={colors.text} />
          <View style={$rightIcons}>
            <Ionicons name="heart-outline" size={27} color={colors.text} style={$icon} />
            <Ionicons name="share-outline" size={27} color={colors.text} style={$icon} />
            <Ionicons name="cart-outline" size={27} color={colors.text} style={$icon} />
          </View>
        </View>

        {/* SlideShow component */}
        <SlideShow images={images} />

        {/* Product details */}
        <View style={$productDetails}>
          <Text style={[$brand, { color: colors.gray }]}>{product.brand}</Text>
          <Text style={[$text, $name, { color: colors.text }]}>{product.name}</Text>
          <View style={$reviewContainer}>
            <View style={[$ratingReview, { backgroundColor: colors.orange }]}>
              <Ionicons name="star" size={20} color="white" />{" "}
              <Text style={[$reviewText, { color: colors.white }]}>4.1</Text>
            </View>
            <Text style={[{ color: colors.gray }, $countReview]}>87</Text>
            <Text
              style={[{ color: colors.gray }, $countReviewText]}
              tx="productDetailScreen.review"
            />
          </View>
          <Text style={[$text, $price, { color: colors.text }]}>${product.price}</Text>
          <Text style={[$text, $description, { color: colors.text }]}>{product.description}</Text>
        </View>

        {/* Size options */}
        <View style={$sizeContainer}>
          <View style={$sizeTextContainer}>
            <Text style={[$price, $text, { color: colors.text }]} tx="productDetailScreen.size" />
            <Text style={{ color: colors.text }} tx="productDetailScreen.sizeChart" />
          </View>
          <View style={$sizeOptionContainer}>
            {product.sizes.map((size) => (
              <TouchableOpacity
                key={size}
                style={[$sizeButton, selectedSize === size ? $selectedSizeButton : null]}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={[$text, { color: selectedSize === size ? colors.white : colors.text }]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Buttons */}
      <View style={$buttonContainer}>
        <TouchableOpacity style={[$button, $addToCartButton]}>
          <Text style={[$buttonText, { color: colors.blue }]} tx="productDetailScreen.addToCart" />
        </TouchableOpacity>
        <TouchableOpacity style={[$button, $buyNowButton]}>
          <Text style={[$buttonText, { color: colors.white }]} tx="productDetailScreen.buyNow" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const $addToCartButton: TextStyle = {
  backgroundColor: colors.white,
  borderColor: colors.blue,
  borderWidth: 2,
};

const $brand: TextStyle = {
  fontSize: 14,
  marginBottom: 10,
  marginTop: 10,
};

const $button: TextStyle = {
  alignItems: "center",
  borderRadius: 8,
  flex: 1,
  justifyContent: "center",
  marginHorizontal: 5,
  paddingVertical: 15,
};

const $buttonContainer: ViewStyle = {
  backgroundColor: colors.white,
  bottom: 0,
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: 20,
  paddingHorizontal: 20,
  position: "absolute",
  width: "100%",
};

const $buttonText: TextStyle = {
  fontSize: 18,
  fontWeight: "bold",
};

const $buyNowButton: TextStyle = {
  backgroundColor: colors.blue,
};

const $container: ViewStyle = {
  backgroundColor: colors.white,
  flex: 1,
};

const $countReview: TextStyle = {
  fontSize: 18,
  marginRight: -15,
};

const $countReviewText: TextStyle = {
  fontSize: 18,
};

const $description: TextStyle = {
  marginTop: 20,
};

const $header: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  padding: 12,
};

const $icon: TextStyle = {
  marginLeft: 20,
};

const $iconContainer: TextStyle = {
  padding: 0,
};

const $name: TextStyle = {
  marginBottom: 10,
};

const $price: TextStyle = {
  fontWeight: "bold",
};

const $productDetails: ViewStyle = {
  padding: 20,
};

const $ratingReview: ViewStyle = {
  alignItems: "center",
  borderRadius: 5,
  flexDirection: "row",
  padding: 8,
};

const $reviewContainer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 10,
  marginTop: 5,
  width: 180,
};

const $reviewText: TextStyle = {
  fontSize: 16,
  marginLeft: 5,
  alignItems: "center",
};

const $rightIcons: ViewStyle = {
  flexDirection: "row",
};

const $scrollView: ViewStyle = {
  backgroundColor: colors.white,
  flex: 1,
  marginBottom: 100,
};

const $selectedSizeButton: TextStyle = {
  backgroundColor: colors.blue,
};

const $sizeButton: TextStyle = {
  alignItems: "center",
  backgroundColor: colors.white,
  borderColor: colors.gray,
  borderRadius: 5,
  borderWidth: 1,
  flexWrap: "wrap",
  justifyContent: "center",
  marginHorizontal: 5,
  minWidth: 40,
  padding: 10,
};

const $sizeContainer: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  marginTop: 20,
  paddingLeft: 16,
  paddingRight: 16,
};

const $sizeOptionContainer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  gap: 12,
};

const $text: TextStyle = {
  fontSize: 18,
};

const $sizeTextContainer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 12,
};

export default ProductDetailScreen;
