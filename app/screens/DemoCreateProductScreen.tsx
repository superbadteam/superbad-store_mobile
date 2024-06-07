import React, { FC, useEffect, useState } from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import {
  Button,
  RadioGroup,
  Screen,
  Text,
  TextField,
  DropdownComponent,
  SelectImageGroup,
} from "../components";
import { notification } from "antd";
import type { RadioOption } from "../components/RadioGroup";
import { DemoTabScreenProps } from "../navigators/DemoNavigator";
import { spacing, colors } from "../theme";
import ApiService from "app/services/module";
import type { Category, SubCategory, Product } from "app/types";
import { useStores } from "app/models";
import { useGetCategories } from "app/services/hooks/useInventory";
import { translate } from "../i18n";

export const DemoCreateProductScreen: FC<DemoTabScreenProps<"DemoCreateProduct">> =
  function DemoCreateProductScreen(_props) {
    const conditions: RadioOption[] = [
      { label: "New", value: "New" },
      { label: "Like new", value: "LikeNew" },
      { label: "Old", value: "Old" },
    ];
    const {
      authenticationStore: { authToken },
    } = useStores();

    const { getCategories } = useGetCategories();
    const [radioValue, setRadioValue] = useState<RadioOption>(conditions[0]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [subCategories, setSubCategories] = useState<SubCategory[]>([]);

    const [product, setProduct] = useState<Product>({
      name: "",
      description: "",
      categoryId: "",
      types: [],
      images: [{ url: "xxx" }],
      condition: "New",
    });

    function onSelectParentCategory(item: Category) {
      setSubCategories(item.subCategories);
    }

    async function createProduct() {
      try {
        if (!authToken) return;

        const imageCalls = product.types.map(async (type, index) => {
          const res = await fetch(type.imageUrl);
          const blob = await res.blob();
          const fd = new FormData();
          const file = new File([blob], "filename", { type: "image/jpeg" });
          fd.append("images", file);
          const response = await ApiService.shared.uploadsImage(fd, authToken);
          product.types[index].imageUrl = response.urls[0];
          setProduct({ ...product });
        });

        await Promise.all(imageCalls);
        await ApiService.inventory.createProduct(product, authToken);
        notification.success({
          message: translate("DemoCreateProductScreen.notification.createSuccess"),
        });
      } catch (error) {
        notification.error({
          message: translate("DemoCreateProductScreen.notification.createError"),
        });
      }
    }

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await getCategories();
          setCategories(response);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };

      fetchCategories();
    }, []);

    return (
      <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
        <View style={$createContainer}>
          <Text size="xl" style={$title} tx="DemoCreateProductScreen.createProduct" />

          <Text weight="medium" style={$label} tx="DemoCreateProductScreen.label.productName" />
          <View style={$inpField}>
            <TextField
              value={product.name}
              onChangeText={(text) => setProduct({ ...product, name: text })}
              containerStyle={$textField}
              placeholderTx="DemoCreateProductScreen.placeholder.productName"
            />
          </View>

          <Text weight="medium" style={$label} tx="DemoCreateProductScreen.label.description" />
          <View style={$inpField}>
            <TextField
              value={product.description}
              onChangeText={(text) => setProduct({ ...product, description: text })}
              placeholderTx="DemoCreateProductScreen.label.description"
              containerStyle={$textField}
              multiline
            />
          </View>

          <Text weight="medium" style={$label} tx="DemoCreateProductScreen.label.category" />
          {categories.length > 0 && (
            <DropdownComponent
              valueField="id"
              searchPlaceholder="common.search"
              data={categories}
              onChange={onSelectParentCategory}
              placeholderTx="DemoCreateProductScreen.placeholder.selectCategory"
            />
          )}

          <Text weight="medium" style={$label} tx="DemoCreateProductScreen.label.subCategory" />
          {categories.length > 0 && (
            <DropdownComponent
              valueField="id"
              searchPlaceholder="common.search"
              data={subCategories}
              onChange={(item) => {
                setProduct({ ...product, categoryId: item.id });
              }}
              placeholderTx="DemoCreateProductScreen.placeholder.selectSubCategory"
            />
          )}

          <Text weight="medium" style={$label} tx="DemoCreateProductScreen.label.condition" />
          <RadioGroup
            options={conditions}
            value={radioValue}
            onValueChange={(value) => {
              setProduct({ ...product, condition: value.value });
              setRadioValue(value);
            }}
            style={$radioToggleGroupContainer}
          />

          <View style={$uploadArea}>
            <Text
              style={$uploadText}
              weight="medium"
              tx="DemoCreateProductScreen.label.uploadImage"
            />
            <SelectImageGroup
              itemType={product.types}
              setItemType={(types) => setProduct({ ...product, types })}
            />
          </View>

          <Button
            style={$submit}
            textStyle={$submitText}
            onPress={() => {
              createProduct();
            }}
            tx="DemoCreateProductScreen.createProduct"
          />
        </View>
      </Screen>
    );
  };

const $container: ViewStyle = {
  paddingTop: spacing.lg,
  paddingBottom: spacing.xxl,
  paddingHorizontal: spacing.lg,
  backgroundColor: "white",
};

const $label: TextStyle = {
  marginTop: spacing.lg,
  textAlign: "left",
};

const $submit: ViewStyle = {
  marginTop: spacing.lg,
  width: "100%",
  backgroundColor: "rgb(102 125 255)",
};

const $createContainer: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
};

const $textField: ViewStyle = {
  width: "100%",
};

const $title: TextStyle = {
  marginBottom: spacing.lg,
};

const $uploadArea: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  marginTop: spacing.lg,
};

const $uploadText: TextStyle = {
  marginBottom: spacing.lg,
};

const $submitText: TextStyle = {
  color: colors.palette.neutral100,
};

const $radioToggleGroupContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: spacing.lg,
  width: "100%",
  gap: spacing.lg,
};

const $inpField: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 2,
  borderColor: colors.palette.neutral300,
  borderRadius: spacing.xs,
  minHeight: spacing.xxl,
};
