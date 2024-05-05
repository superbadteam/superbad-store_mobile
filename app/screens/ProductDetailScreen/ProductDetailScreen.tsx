import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import SlideShow from "./SlideShow";

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
    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
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
      "This is a fantastic example product. It's made with high-quality materials and designed to last. Whether you're using it at home or on the go, it's sure to meet your needs. ",
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
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <BackButton tintColor={colors.text} />
          <View style={styles.rightIcons}>
            <Ionicons name="heart-outline" size={24} color={colors.text} style={styles.icon} />
            <Ionicons name="share-outline" size={24} color={colors.text} style={styles.icon} />
            <Ionicons name="cart-outline" size={24} color={colors.text} style={styles.icon} />
          </View>
        </View>

        {/* SlideShow component */}
        <SlideShow images={images} />

        {/* Product details */}
        <View style={styles.productDetails}>
          <Text style={[styles.brand, { color: colors.gray }]}>{product.brand}</Text>
          <Text style={[styles.text, styles.name, { color: colors.text }]}>{product.name}</Text>
          <View style={styles.reviewContainer}>
            <View style={[styles.ratingReview, { backgroundColor: colors.orange }]}>
              <Ionicons name="star" size={20} color="white" />{" "}
              <Text style={[styles.reviewText, { color: colors.white }]}>4.1</Text>
            </View>
            <Text style={[{ color: colors.gray }, styles.countReview]}>87 Reviews</Text>
          </View>
          <Text style={[styles.text, styles.price, { color: colors.text }]}>${product.price}</Text>
          <Text style={[styles.text, styles.description, { color: colors.text }]}>
            {product.description}
          </Text>
        </View>

        {/* Size options */}
        <View style={styles.sizeContainer}>
          <Text style={[styles.price, styles.text, { color: colors.text }]}>Size</Text>
          {product.sizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[styles.sizeButton, selectedSize === size ? styles.selectedSizeButton : null]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[styles.text, { color: selectedSize === size ? colors.white : colors.text }]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.addToCartButton]}>
          <Text style={[styles.buttonText, { color: colors.blue }]}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
          <Text style={[styles.buttonText, { color: colors.white }]}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  scrollView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  icon: {
    marginLeft: 20,
  },
  iconContainer: {
    padding: 10,
  },
  productDetails: {
    padding: 20,
  },
  text: {
    fontSize: 18,
  },
  name: {
    marginBottom: 10,
  },
  price: {
    fontWeight: "bold",
  },
  description: {
    marginTop: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.white,
  },
  button: {
    alignItems: "center",
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: colors.white,
    borderColor: colors.blue,
    borderWidth: 2,
  },
  buyNowButton: {
    backgroundColor: colors.blue,
  },
  rightIcons: {
    flexDirection: "row",
  },
  brand: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 10,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  sizeButton: {
    backgroundColor: colors.white,
    borderColor: colors.blue,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 5,
    padding: 10,
  },
  selectedSizeButton: {
    backgroundColor: colors.blue,
  },
  reviewContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 180,
    marginTop: 5,
    marginBottom: 10,
  },
  ratingReview: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 5,
  },
  reviewText: {
    fontSize: 16,
    marginLeft: 5,
  },
  countReview: {
    fontSize: 18,
  },
});

export default ProductDetailScreen;
