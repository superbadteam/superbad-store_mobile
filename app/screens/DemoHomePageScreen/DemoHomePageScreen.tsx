import React, { FC, ReactElement, useEffect, useState } from "react";
import { Image, TextStyle, View, ViewStyle } from "react-native";
import { Screen, Text, TextField} from "../../components";
import { DemoTabScreenProps } from "../../navigators/DemoNavigator";
import { colors, spacing } from "../../theme";
import { ScrollView } from "react-native-gesture-handler";
import { api } from "../../services/api";
import type { Category } from "app/types";
import SlideShow from "app/components/SlideShow";

const iconSearch = require("../../../assets/icons/search.png");
const iconRight = require("../../../assets/icons/arrowRight.png");
const iconClothes = require("../../../assets/icons/clothes.png");
const imgProduct = require("../../../assets/icons/product.jpg");
export interface Demo {
  name: string;
  description: string;
  data: ReactElement[];
}


export const DemoHomePageScreen: FC<DemoTabScreenProps<"DemoHomePage">> =
  function DemoHomePageScreen(_props) {

    const images = [
      "https://via.placeholder.com/600/92c952",
      "https://via.placeholder.com/600/771796",
      "https://via.placeholder.com/600/24f355",
      "https://via.placeholder.com/600/d32776",
      "https://via.placeholder.com/600/f66b97",
    ];

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {

      const fetchCategories = async () => {
        try {
          const response = await api.getCategories();
          setCategories(response);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };

      console.log(categories, "check category");
      fetchCategories();
    }, []);

    return (
        <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
              <View style={$search}>
                <Image source={iconSearch} style={$iconSearch} />
                <TextField
                  style={$inputSearch}
                  placeholderTx="demoHomePageScreen.placeholderSearch"
                />
              </View>

              <View style={$listCategory}>
                <View style={$categoryHead}>
                    <Text
                      tx="demoHomePageScreen.categoryList"
                      weight="bold"
                    />
                  <View style={{flexDirection: "row", alignItems: "center", gap: -4}}>
                    <Text
                      tx="demoHomePageScreen.viewAll"
                    />
                    <Image source={iconRight} style={$iconSearch} />
                  </View>
                </View>
                  <View >
                  <ScrollView
                    style={$categoryBody} horizontal={true} showsHorizontalScrollIndicator={false}>
                    { categories.length > 0 &&
                      categories.map((category, index) => (
                        <View key={index} style={$categoryList}>
                          <View style={$categoryItem}>
                            <Image source={iconClothes} style={$iconSearch} />
                          </View>
                          <Text>{category.name}</Text>
                      </View>
                      ))
                    }
                  </ScrollView>
                  </View>
              </View>

              <SlideShow images={images} />

              <View style={$listProduct}>
                <View style={$categoryHead}>
                  <Text
                    tx="demoHomePageScreen.recommended"
                    weight="bold"
                  />
                  <View style={{flexDirection: "row", alignItems: "center", gap: -4}}>
                    <Text
                      tx="demoHomePageScreen.viewAll"
                    />
                    <Image source={iconRight} style={$iconSearch} />
                  </View>
                </View>

                <View style={$listProductBody}>
                  <View style={$productItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{flexDirection: "column", gap: 6}}>
                      <Text style={$productName}>Adidas white sneakers for men</Text>
                      <View style={{flexDirection: "row", gap: 8}}>
                        <Text weight="bold" style={$productPrice}>$68</Text>
                        <Text style={$productSale}>$134</Text>
                        <Text style={$productDiscount}>50% OFF</Text>
                      </View>
                      <View style={{flexDirection: "row", gap: 6, alignItems: "center"}}>
                        <Image source={imgProduct} style={$iconstar} />
                        <Text style={$productRating}>4.8</Text>
                        <Text style={$productComment}>(545)</Text>
                      </View>
                    </View>
                  </View>

                  <View style={$productItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{flexDirection: "column", gap: 6}}>
                      <Text style={$productName}>Adidas white sneakers for men</Text>
                      <View style={{flexDirection: "row", gap: 8}}>
                        <Text style={$productPrice}>$68</Text>
                        <Text style={$productSale}>$134</Text>
                        <Text style={$productDiscount}>50% OFF</Text>
                      </View>
                      <View style={{flexDirection: "row", gap: 6, alignItems: "center"}}>
                        <Image source={imgProduct} style={$iconstar} />
                        <Text style={$productRating}>4.8</Text>
                        <Text style={$productComment}>(545)</Text>
                      </View>
                    </View>
                  </View>

                  <View style={$productItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{flexDirection: "column", gap: 6}}>
                      <Text style={$productName}>Adidas white sneakers for men</Text>
                      <View style={{flexDirection: "row", gap: 8}}>
                        <Text style={$productPrice}>$68</Text>
                        <Text style={$productSale}>$134</Text>
                        <Text style={$productDiscount}>50% OFF</Text>
                      </View>
                      <View style={{flexDirection: "row", gap: 6, alignItems: "center"}}>
                        <Image source={imgProduct} style={$iconstar} />
                        <Text style={$productRating}>4.8</Text>
                        <Text style={$productComment}>(545)</Text>
                      </View>
                    </View>
                  </View>

                  <View style={$productItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{flexDirection: "column", gap: 6}}>
                      <Text style={$productName}>Adidas white sneakers for men</Text>
                      <View style={{flexDirection: "row", gap: 8}}>
                        <Text style={$productPrice}>$68</Text>
                        <Text style={$productSale}>$134</Text>
                        <Text style={$productDiscount}>50% OFF</Text>
                      </View>
                      <View style={{flexDirection: "row", gap: 6, alignItems: "center"}}>
                        <Image source={imgProduct} style={$iconstar} />
                        <Text style={$productRating}>4.8</Text>
                        <Text style={$productComment}>(545)</Text>
                      </View>
                    </View>
                  </View>
                </View>
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
  height: 22,
  width: 22,
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

const $imgProduct: ViewStyle = {
  width: "100%",
  height: 140,
  borderRadius: spacing.xs,
};

const $listProduct: ViewStyle = {
  padding: spacing.md,
};

const $listProductBody: ViewStyle = {
  flexDirection:"row",
  width: "100%",
  gap: 10,
  flexWrap: "wrap",
};

const $productItem: ViewStyle = {
  width: "48%",
};

const $iconstar: ViewStyle = {
  width: 18,
  height: 18,
};

const $productName: TextStyle = {
  fontSize: 16,
  color: "#333",
  lineHeight: 16,
  marginTop: 4,
};

const $productPrice: TextStyle = {
  fontSize: 18,
};

const $productSale: TextStyle = {
  fontSize: 14,
  color: "#ccc",

};

const $productDiscount: TextStyle = {
  color: colors.palette.primary600,
};

const $productRating: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 6,
};

const $productComment: ViewStyle = {

};
