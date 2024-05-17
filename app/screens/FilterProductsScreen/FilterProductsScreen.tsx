import React from "react";
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ProductItem, { Product } from "../../components/ProductItem";
import FilterSortByScreen from "./FilterSortByIconScreen";
import { colors, spacing } from "app/theme";
import { Text, TextField } from "app/components";

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

const FilterProductsScreen = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Men's T-shirt",
      price: 10.85,
      description: "White men's T-shirt, simple design, youthful style.",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.5,
      isFavorite: false,
      discount: 10,
    },
    {
      id: 2,
      name: "Women's Jeans",
      price: 19.57,
      description: "Blue women's jeans, premium denim material, slim fit.",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.5,
      isFavorite: true,
      discount: 20,
    },
    {
      id: 3,
      name: "Product 3",
      price: 8.7,
      description: "Description for Product 3",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: true,
      discount: 15,
    },
    {
      id: 4,
      name: "Product 4",
      price: 8.7,
      description: "Description for Product 4",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: true,
      discount: 15,
    },
    {
      id: 5,
      name: "Product 5",
      price: 8.7,
      description: "Description for Product 5",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: false,
      discount: 15,
    },
    {
      id: 6,
      name: "Product 6",
      price: 8.7,
      description: "Description for Product 6",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: false,
      discount: 15,
    },
    {
      id: 7,
      name: "Product 7",
      price: 8.7,
      description: "Description for Product 7",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: false,
      discount: 15,
    },
    {
      id: 8,
      name: "Product 8",
      price: 8.7,
      description: "Description for Product 8",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: true,
      discount: 15,
    },
    {
      id: 9,
      name: "Product 9",
      price: 8.7,
      description: "Description for Product 9",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: false,
      discount: 15,
    },
    {
      id: 10,
      name: "Product 10",
      price: 8.7,
      description: "Description for Product 10",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: true,
      discount: 15,
    },
    {
      id: 11,
      name: "Product 11",
      price: 8.7,
      description: "Description for Product 11",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: false,
      discount: 15,
    },
    {
      id: 12,
      name: "Product 12",
      price: 8.7,
      description: "Description for Product 12",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: false,
      discount: 15,
    },
  ];

  return (
    <>
      <View style={$header}>
        <BackButton tintColor={colors.tint} />
        <View style={$inputContainer}>
          <TextField style={$input} placeholderTx="FilterProductsScreen.placeholder" focusable />
        </View>
        <View style={$rightIcons}>
          <Ionicons name="close-circle-outline" size={30} color={colors.text} style={$icon} />
          <Ionicons name="search" size={30} color={colors.text} style={$icon} />
          <Ionicons name="cart-outline" size={30} color={colors.text} style={$icon} />
        </View>
      </View>
      <View style={$numberResult}>
        <Text>{products.length}</Text>
        <Text tx="FilterProductsScreen.results"></Text>
      </View>
      <ScrollView>
        {products.length > 0 ? (
          <FlatList
            data={products}
            renderItem={({ item }) => <ProductItem product={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            style={$products}
          />
        ) : (
          <View style={$noResultsContainer}>
            <Text tx="FilterProductsScreen.notFound" />
          </View>
        )}
      </ScrollView>
      <View>{products.length > 0 && <FilterSortByScreen></FilterSortByScreen>}</View>
    </>
  );
};

const $header: ViewStyle = {
  alignItems: "center",
  backgroundColor: colors.white,
  flexDirection: "row",
  justifyContent: "space-around",
  padding: spacing.md,
  borderBottomWidth: spacing.xxxs,
  borderBottomColor: colors.palette.gray,
};

const $numberResult: ViewStyle = {
  backgroundColor: colors.background,
  padding: spacing.xxs,
  flexDirection: "row",
  gap: spacing.xxs,
  alignItems: "center",
  justifyContent: "center",
};

const $inputContainer: ViewStyle = {
  alignItems: "flex-start",
  borderRadius: spacing.sm,
};

const $input: TextStyle = {
  fontSize: 14,
  borderRadius: spacing.sm,
};

const $rightIcons: ViewStyle = {
  flexDirection: "row",
};

const $products: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral100,
};

const $icon: ViewStyle = {
  marginLeft: spacing.lg,
};

const $noResultsContainer: ViewStyle = {
  alignItems: "center",
  flex: 1,
  justifyContent: "center",
  paddingVertical: spacing.lg,
};

const $iconContainer: ViewStyle = {
  padding: spacing.xs,
};

export default FilterProductsScreen;
