import React, { FC, useEffect, useState } from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import { Button, RadioGroup, Screen, Text, TextField, DropdownComponent } from "../components";
import type { RadioOptions } from "../components/RadioGroup";
import { DemoTabScreenProps } from "../navigators/DemoNavigator";
import { spacing, colors } from "../theme";
import * as ImagePicker from "react-native-image-picker";
import { api } from "../services/api";
import type { Category } from "app/types";

function openImagePicker() {
  ImagePicker.launchImageLibrary(
    {
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    },
    (response) => {
      console.log(response);
    },
  );
}

export const DemoCreateProductScreen: FC<DemoTabScreenProps<"DemoCreateProduct">> =
  function DemoCreateProductScreen(_props) {
    const conditions: RadioOptions[] = [
      { label: "New", value: "new" },
      { label: "Like new", value: "likeNew" },
      { label: "Old", value: "old" },
    ];

    const [radioValue, setRadioValue] = useState<RadioOptions>(conditions[0]);
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

      fetchCategories();
    }, []);

    return (
      <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
        <View style={$createContainer}>
          <Text size="xl" style={$title} tx="DemoCreateProductScreen.createProduct" />

          <TextField
            containerStyle={$textField}
            labelTx="DemoCreateProductScreen.label.productName"
            placeholderTx="DemoCreateProductScreen.placeholder.productName"
          />

          <View style={$informationField}>
            <TextField
              containerStyle={$informationFieldTextField}
              labelTx="DemoCreateProductScreen.label.price"
              placeholderTx="DemoCreateProductScreen.placeholder.price"
            />

            <TextField
              containerStyle={$informationFieldTextField}
              labelTx="DemoCreateProductScreen.label.discount"
              placeholderTx="DemoCreateProductScreen.placeholder.discount"
            />
          </View>

          <View style={$descriptionField}>
            <TextField
              labelTx="DemoCreateProductScreen.label.description"
              placeholderTx="DemoCreateProductScreen.label.description"
              multiline
            />
          </View>

          <Text weight="medium" style={$label} tx="DemoCreateProductScreen.label.category" />
          {categories.length > 0 && (
            <DropdownComponent
              searchPlaceholder="common.search"
              data={categories}
              placeholderTx="DemoCreateProductScreen.placeholder.selectCategory"
            />
          )}

          <Text weight="medium" style={$label} tx="DemoCreateProductScreen.label.condition" />
          <RadioGroup
            options={conditions}
            value={radioValue}
            onValueChange={setRadioValue}
            style={$radioToggleGroupContainer}
          />

          <View style={$uploadArea}>
            <Text
              style={$uploadText}
              weight="medium"
              tx="DemoCreateProductScreen.label.uploadImage"
            />
            <Button
              style={$uploadButton}
              onPress={openImagePicker}
              tx="DemoCreateProductScreen.upload"
            />
          </View>

          <Button
            style={$submit}
            textStyle={$submitText}
            onPress={openImagePicker}
            tx="DemoCreateProductScreen.label.uploadImage"
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
  marginBottom: spacing.lg,
  width: "100%",
};

const $descriptionField: ViewStyle = {
  marginTop: spacing.lg,
  width: "100%",
};

const $title: TextStyle = {
  marginBottom: spacing.lg,
};

const $informationField: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  gap: spacing.lg,
};

const $informationFieldTextField: ViewStyle = {
  flex: 1,
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

const $uploadButton: ViewStyle = {
  width: "100%",
  height: 200,
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
