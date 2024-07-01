import React, { useEffect, useState } from "react";
import { ScrollView, View, TouchableOpacity, TextStyle, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import SlideShow from "app/components/SlideShow";
import Rating from "app/components/Rating";
import { Text } from "app/components";
import { colors } from "app/theme";
import CustomHeader from "app/components/CustomHeader";
import { useAddProductToCart, useGetProductByID } from "app/services/hooks/useShopping";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ProductItem } from "app/types/inventory";
import { DemoTabParamList } from "app/navigators/DemoNavigator";

const ProductDetailScreen = () => {
  const [product, setProduct] = useState<ProductItem | null>(null);
  const route = useRoute<RouteProp<DemoTabParamList, "ProductDetail">>();
  if (route.params && route.params.id) {
    const { getProductByID } = useGetProductByID(route.params.id);
    useEffect(() => {
        getProductByID().then((response) => {
          if (response)
            setProduct(response);
        });
    }, []);
  }

  const rightContents = ["heart-outline", "share-outline", "cart-outline"];

  const [selectedType, setSelectedType] = useState<number>(-1);

  const navigation = useNavigation<any>();
  const handleAddToCart = () => {
    navigation.navigate("CartScreen");
  };
  const id = "4fdae4dc-4130-4cf9-9f92-1e6d02e1ff3e";

  return (
    <View style={$container}>
      <ScrollView style={$scrollView}>
        <CustomHeader rightContents={rightContents} leftContents={[]} isHasBackButton={true} />

        {/* SlideShow component */}
        {product && <SlideShow images={product.types.map((type) => type.imageUrl)} />}

        {/* Product details */}
        {product && (
          <View style={$productDetails}>
            <Text style={[$brand, { color: colors.gray }]} size="md">
              {product.condition}
            </Text>
            <Text style={[$name, { color: colors.text }]} size="lg">
              {product.name}
            </Text>
            <View style={$reviewContainer}>
              <View style={[$ratingReview, { backgroundColor: colors.orange }]}>
                <Ionicons name="star" size={20} color="white" />
                <Text style={[$reviewText, { color: colors.white }]}>4.1</Text>
              </View>
              <Text style={[$countReview, { color: colors.gray }]} size="md">
                87
              </Text>
              <Text style={{ color: colors.gray }} tx="productDetailScreen.review" size="md" />
            </View>
            <Text style={[$price, { color: colors.text }]} size="lg">
              ${product.minPrice} - ${product.maxPrice}
            </Text>
            <Text style={[$description, { color: colors.text }]} size="md">
              {product.description}
            </Text>
          </View>
        )}

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
            {product && product.types.map((type, index) => (
              <TouchableOpacity
                key={index}
                style={[$typeButton, selectedType === index ? $selectedTypeButton : null]}
                onPress={() => setSelectedType(index)}
              >
                <Text
                  style={{ color: selectedType === index ? colors.white : colors.text }}
                  size="md"
                >
                  {type.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <Rating productId={id}/>
          </View>
        </View>
      </ScrollView>

      {/* Buttons */}
      <View style={$buttonContainer}>
        <TouchableOpacity style={[$button, $addToCartButton]}
          onPress={() => addProductToCart()} disabled={isMutating}>
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