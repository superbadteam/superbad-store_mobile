import React from "react";
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { colors, spacing } from "app/theme";
import { Text, TextField } from "app/components";
import FilterSortByScreen from "app/screens/FilterProductsScreen/FilterSortByIconScreen";
import MyProduct, {Product} from "app/components/MyProduct";

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

const DemoMyProductScreen = () => {
    const products: Product[] = [
        {
            id: 1,
            name: "Men's T-shirt",
            imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
            sold: 3,
        },
        {
            id: 2,
            name: "Women's Jeans",
            imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
            sold: 1,
        },
        {
            id: 3,
            name: "Women's Raincoat",
            imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
            sold: 5,
        },
        {
            id: 4,
            name: "Men's underwear",
            imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
            sold: 2,
        },
        {
            id: 5,
            name: "Children's skirt",
            imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
            sold: 7,
        },
        {
            id: 6,
            name: "Women's trouser",
            imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
            sold: 1,
        },
        {
            id: 7,
            name: "Men's shorts",
            imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
            sold: 1,
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
                        renderItem={({ item }) => <MyProduct product={item} />}
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

export default DemoMyProductScreen;
