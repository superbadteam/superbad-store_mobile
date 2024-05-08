/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native";
import { Drawer } from "react-native-drawer-layout";
import { Screen, Text} from "../../components";
import { isRTL } from "../../i18n";
import { DemoTabScreenProps } from "../../navigators/DemoNavigator";
import { colors, spacing } from "../../theme";
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle";
import { DrawerIconButton } from "./DrawerIconButton";
import { TextInput } from "react-native-gesture-handler";

const iconSearch = require("../../../assets/icons/search.png");
const iconRight = require("../../../assets/icons/arrowRight.png");
const iconClothes = require("../../../assets/icons/clothes.png");
const iconEletronic = require("../../../assets/icons/electronic.png");
const iconBeauty = require("../../../assets/icons/beauty.png");
const iconApplication = require("../../../assets/icons/application.png");
const imgProduct = require("../../../assets/icons/product.jpg");
export interface Demo {
  name: string;
  description: string;
  data: ReactElement[];
}


export const DemoShowroomScreen: FC<DemoTabScreenProps<"DemoShowroom">> =
  function DemoShowroomScreen(_props) {
    const [open, setOpen] = useState(false);
    const timeout = useRef<ReturnType<typeof setTimeout>>();
    const toggleDrawer = () => {
      if (!open) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    useEffect(() => {
      return () => timeout.current && clearTimeout(timeout.current);
    }, []);

    const $drawerInsets = useSafeAreaInsetsStyle(["top"]);

    return (
      <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        drawerType={"slide"}
        drawerPosition={isRTL ? "right" : "left"}
        renderDrawerContent={() => (
          <View style={[$drawer, $drawerInsets]}>
          </View>
        )}
      >
        <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
          <DrawerIconButton onPress={toggleDrawer} />
              <View style={$search}>
                <Image source={iconSearch} style={$iconSearch} />
                <TextInput
                  style={$inputSearch}
                  placeholder={"Search product"}
                />
              </View>

              <View style={$listCategory}>
                <View style={$categoryHead}>
                  <Text style={{fontWeight: "bold", fontSize: 18}}>Category</Text>
                  <View style={{flexDirection: "row", alignItems: "center", gap: -4}}>
                    <Text>View All</Text>
                    <Image source={iconRight} style={$iconSearch} />
                  </View>
                </View>
                <View style={$categoryBody}>
                  <View style={$categoryList}>
                    <View style={$categoryItem}>
                      <Image source={iconClothes} style={$iconSearch} />
                    </View>
                    <Text>Fashion</Text>
                  </View>
                  <View style={$categoryList}>
                    <View style={$categoryItem}>
                      <Image source={iconEletronic} style={$iconSearch} />
                    </View>
                    <Text>Fashion</Text>
                  </View>
                  <View style={$categoryList}>
                    <View style={$categoryItem}>
                      <Image source={iconBeauty} style={$iconSearch} />
                    </View>
                    <Text>Fashion</Text>
                  </View>
                  <View style={$categoryList}>
                    <View style={$categoryItem}>
                      <Image source={iconApplication} style={$iconSearch} />
                    </View>
                    <Text>Fashion</Text>
                  </View>

                </View>
              </View>

              <View style={$discountContainer}>
                <View style={$categoryHead}>
                  <Text style={{fontWeight: "bold", fontSize: 18}}>Deal of the day</Text>
                  <View style={{flexDirection: "row", alignItems: "center", gap: -4}}>
                    <Text>View All</Text>
                    <Image source={iconRight} style={$iconSearch} />
                  </View>
                </View>
                <View style={$discountBody}>
                  <View style={$discountItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{alignItems: "center", gap: 4, marginTop: 4}}>
                      <Text style={$discountItemName}>Running Shoe</Text>
                      <View style={{borderRadius: 6, padding: 6, backgroundColor: "red"}}>
                        <Text style={$discountItemSale}>upto 40% OFF</Text>
                      </View>
                    </View>
                  </View>
                  <View style={$discountItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{alignItems: "center", gap: 4, marginTop: 4}}>
                      <Text style={$discountItemName}>Running Shoe</Text>
                      <View style={{borderRadius: 6, padding: 6, backgroundColor: "red"}}>
                        <Text style={$discountItemSale}>upto 40% OFF</Text>
                      </View>
                    </View>
                  </View>

                  <View style={$discountItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{alignItems: "center", gap: 4, marginTop: 4}}>
                      <Text style={$discountItemName}>Running Shoe</Text>
                      <View style={{borderRadius: 6, padding: 6, backgroundColor: "red"}}>
                        <Text style={$discountItemSale}>upto 40% OFF</Text>
                      </View>
                    </View>
                  </View>

                  <View style={$discountItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{alignItems: "center", gap: 4, marginTop: 4}}>
                      <Text style={$discountItemName}>Running Shoe</Text>
                      <View style={{borderRadius: 6, padding: 6, backgroundColor: "red"}}>
                        <Text style={$discountItemSale}>upto 40% OFF</Text>
                      </View>
                    </View>
                  </View>

                </View>
              </View>

              <View style={$listProduct}>
                <View style={$categoryHead}>
                  <Text style={{fontWeight: "bold", fontSize: 18}}>Recommoneded for you</Text>
                  <View style={{flexDirection: "row", alignItems: "center", gap: -4}}>
                    <Text>View All</Text>
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
      </Drawer>
    );
  };


const $screenContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
};

const $drawer: ViewStyle = {
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
  height: spacing.xxl,
  width: 282,
  fontSize: 16,
  color: colors.palette.neutral600,
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
  alignItems: "center",
  justifyContent: "space-between",
};

const $categoryList: ViewStyle = {


};

const $categoryItem: ViewStyle = {
  width: 60,
  height: 60,
  backgroundColor: "#ecfdf5",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 60,
  marginBottom: spacing.xxs,
};

const $discountContainer: ViewStyle = {
  backgroundColor: "#eee",
  padding: spacing.md,
};

const $discountBody: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  borderRadius: spacing.xs,
  padding: spacing.sm,
  marginTop: spacing.sm,
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  gap: spacing.xs,
};

const $discountItem: ViewStyle = {
  width: "48%",
  flexDirection: "column",
  height: 200,
};

const $imgProduct: ViewStyle = {
  width: "100%",
  height: 140,
  borderRadius: spacing.xs,
};

const $discountItemName: TextStyle = {
  fontSize: 16,
  fontWeight: "700",
};

const $discountItemSale: TextStyle = {
  fontSize: 14,
  color: colors.palette.neutral100,
  lineHeight: 16,
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
