import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity, TextStyle, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import SlideShow from "app/components/SlideShow";
import { Text } from "app/components";
import { colors } from "app/theme";
import CustomHeader from "app/components/CustomHeader";

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

  const rightContents = ["heart-outline", "share-outline", "cart-outline"];

  const [selectedType, setSelectedType] = useState<number>(-1);

  return (
    <View style={$container}>
      <ScrollView style={$scrollView}>
        <CustomHeader rightContents={rightContents} leftContents={[]} isHasBackButton={true} />

        {/* SlideShow component */}
        <SlideShow images={images} />

        {/* Product details */}
        <View style={$productDetails}>
          <Text style={[$brand, { color: colors.gray }]} size="md">
            {product.brand}
          </Text>
          <Text style={[$name, { color: colors.text }]} size="lg">
            {product.name}
          </Text>
          <View style={$reviewContainer}>
            <View style={[$ratingReview, { backgroundColor: colors.orange }]}>
              <Ionicons name="star" size={20} color="white" />
              <Text style={[$reviewText, { color: colors.white }]}>4.1</Text>
            </View>
            <Text style={[{ color: colors.gray }, $countReview]} size="md">
              87
            </Text>
            <Text style={{ color: colors.gray }} tx="productDetailScreen.review" size="md" />
          </View>
          <Text style={[$price, { color: colors.text }]} size="lg">
            ${product.price}
          </Text>
          <Text style={[$description, { color: colors.text }]} size="md">
            {product.description}
          </Text>
        </View>

        {/* Type options */}
        <View style={$typeContainer}>
          <View style={$typeTextContainer}>
            <Text
              style={[$price, { color: colors.text }]}
              tx="productDetailScreen.size"
              size="lg"
            />
          </View>
          <View style={$typeOptionContainer}>
            {product.sizes.map((size, index) => (
              <TouchableOpacity
                key={index}
                style={[$typeButton, selectedType === index ? $selectedTypeButton : null]}
                onPress={() => setSelectedType(index)}
              >
                <Text
                  style={{ color: selectedType === index ? colors.white : colors.text }}
                  size="md"
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
          <Text
            style={[$buttonText, { color: colors.blue }]}
            tx="productDetailScreen.addToCart"
            size="lg"
          />
        </TouchableOpacity>
        <TouchableOpacity style={[$button, $buyNowButton]}>
          <Text
            style={[$buttonText, { color: colors.white }]}
            tx="productDetailScreen.buyNow"
            size="lg"
          />
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
  marginRight: -15,
};

const $description: TextStyle = {
  marginTop: 20,
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
  marginLeft: 5,
  alignItems: "center",
};

const $scrollView: ViewStyle = {
  backgroundColor: colors.white,
  flex: 1,
  marginBottom: 100,
};

const $selectedTypeButton: TextStyle = {
  backgroundColor: colors.blue,
};

const $typeButton: TextStyle = {
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

const $typeContainer: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  marginTop: 20,
  paddingLeft: 16,
  paddingRight: 16,
};

const $typeOptionContainer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  gap: 12,
};

const $typeTextContainer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 12,
};

export default ProductDetailScreen;
