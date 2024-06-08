import React, { FC, ReactElement, useEffect, useState } from "react";
import { Keyboard, TextStyle, View, ViewStyle } from "react-native";
import { Screen, Text, TextField } from "../../components";
import { DemoTabScreenProps } from "../../navigators/DemoNavigator";
import { colors, spacing } from "../../theme";
import { ScrollView } from "react-native-gesture-handler";
import { api } from "../../services/api";
import type { Category, Products } from "app/types";
import SlideShow from "app/components/SlideShow";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ProductItem from "app/components/ProductItem";

export interface Demo {
  name: string;
  description: string;
  data: ReactElement[];
}

export const DemoHomePageScreen: FC<DemoTabScreenProps<"DemoHomePage">> =
  function DemoHomePageScreen(_props) {
    const { getCategories } = useGetCategories();

    const images = [
      "https://img.freepik.com/vecteurs-libre/modele-banniere-vente-horizontale-realiste-photo_23-2149017940.jpg",
      "https://img.freepik.com/vecteurs-premium/banniere-vente-horizontale-remise-shopping-degrade_23-2150321976.jpg",
      "https://img.freepik.com/vecteurs-libre/modele-banniere-vente-plat-11-11-shopping-day_23-2149724054.jpg?t=st=1717728105~exp=1717728705~hmac=c131d2759cb3b5000995d08018a633f3f807efa961db78331a116c3f36758e19",
      "https://img.freepik.com/vecteurs-libre/modele-banniere-verticale-degradee-pour-evenement-vente-11-11_23-2150841749.jpg?w=740&t=st=1717728354~exp=1717728954~hmac=d00c52e3d23c73e92d681a8b534b1949a9caea44a195c202cfba1f8bf37564ca  ",
      "https://img.freepik.com/vecteurs-libre/modele-banniere-horizontale-degradee-pour-evenement-el-buen-fin-espagnol_23-2150843234.jpg?w=1380&t=st=1717728391~exp=1717728991~hmac=b24e827910f3f29379e79deef1d932dd69c01b09beec537c03c78c087ca86d7d",
    ];

    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Products>();

    useEffect(() => {
      const fetchCategories = async () => {
          const response = await getCategories();
          if (response) setCategories(response);
      };

      console.log(categories, "check category");
      fetchCategories();

      const defaultQuery = {
        PageIndex: 1,
        PageSize: 10,
      };
      let queryUrl = Object.keys(defaultQuery).length > 0 ? "?" : "";

      Object.keys(defaultQuery).map((key) => {
        queryUrl += `${key}=${defaultQuery[`${key}`]}&`;
        return 0;
      }, "");
      queryUrl = queryUrl.slice(0, -1);

      const fetchProducts = async () => {
        const response = await api.getProducts(queryUrl);
        setProducts(response);
      };
      fetchProducts();
    }, []);
    const navigation = useNavigation<any>();

    const handleSearch = (text: string) => {
      if (text && text.trim() !== "") {
        navigation.navigate("FilterProductsScreen");
        Keyboard.dismiss();
      }
    };
    const handleProductDetail = () => {
      navigation.navigate("ProductDetailScreen");
    };
    const renderProducts = (products) => {
      return products.map((item, index) => {
        // Determine if this is the last item and an odd one
        const isLastOddItem = products.length % 2 !== 0 && index === products.length - 1;
        return (
          <View key={item.id} style={[$productWrapper, isLastOddItem && $fullWidth]}>
            <ProductItem product={item} />
          </View>
        );
      });
    };

    return (
      <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
        <View style={$search}>
          <Ionicons style={$iconSearch} name="search-outline" size={20} color="black" />
          <TextField style={$inputSearch} placeholderTx="demoHomePageScreen.placeholderSearch" onSubmitEditing={(event) => handleSearch(event.nativeEvent.text)} />
        </View>

        <View style={$listCategory}>
          <View style={$categoryHead}>
            <Text tx="demoHomePageScreen.categoryList" weight="bold" />
            <View style={$categoryNav}>
              <Text tx="demoHomePageScreen.viewAll" />
              <Ionicons name="chevron-forward-outline" size={20} color="black" />
            </View>
          </View>
          <View>
            <ScrollView
              style={$categoryBody}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {categories.length > 0 &&
                categories.map((category, index) => (
                  <View key={index} style={$categoryList}>
                    <View style={$categoryItem}>
                      <Ionicons name="body-outline" size={20} color="black" />
                    </View>
                    <Text style={$categoryText}>{category.name}</Text>
                  </View>
                ))}
            </ScrollView>
          </View>
        </View>

        <SlideShow images={images} />

        <View style={$listProduct}>
          <View style={$categoryHead}>
            <Text tx="demoHomePageScreen.recommended" weight="bold" />
            <View style={$categoryNav}>
              <Text tx="demoHomePageScreen.viewAll" />
              <Ionicons name="chevron-forward-outline" size={20} color="black" />
            </View>
          </View>

          <ScrollView>
            <View style={$productsContainer}>{renderProducts(products?.data || [])}</View>
          </ScrollView>
        </View>
      </Screen>
    );
  };

const $screenContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
};

const $search: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  margin: spacing.md,
  borderWidth: 2,
  borderColor: colors.palette.neutral300,
  borderRadius: spacing.xs,
  height: spacing.xxl,
};

const $iconSearch: ViewStyle = {
  margin: spacing.sm,
};

const $inputSearch: TextStyle = {
  width: 350,
};

const $listCategory: ViewStyle = {
  margin: spacing.md,
};

const $categoryHead: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: spacing.md,
};

const $categoryNav: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: -4,
};

const $categoryBody: ViewStyle = {
  flexDirection: "row",
  gap: spacing.sm,
};

const $categoryList: ViewStyle = {
  paddingHorizontal: 10,
};

const $categoryItem: ViewStyle = {
  width: 60,
  height: 60,
  backgroundColor: "#ecfdf5",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 60,
  marginBottom: spacing.xxs,
  marginRight: "auto",
  marginLeft: "auto",
};

const $categoryText: TextStyle = {
  maxWidth: 120,
  textAlign: "center",
};

const $listProduct: ViewStyle = {
  padding: spacing.md,
  flexGrow: 1,
  justifyContent: "center",
  paddingHorizontal: 10,
};

const $fullWidth: ViewStyle = {
  width: "48%",
};

const $productWrapper: ViewStyle = {
  width: "48%",
  marginBottom: 10,
};

const $productsContainer: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
};
