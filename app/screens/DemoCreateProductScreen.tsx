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
ImagePicker.launchImageLibrary({
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
      { label: "Like new", value: "likenew" },
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
          <Text style={$title}>Create product</Text>

          <TextField
            autoCapitalize="none"
            containerStyle={$textField}
            autoCorrect={false}
            keyboardType="email-address"
            label="Product Name"
            placeholder="Enter product name"
          />

          <View style={$informationField}>
            <TextField
              autoCapitalize="none"
              containerStyle={$informationFieldTextField}
              autoCorrect={false}
              keyboardType="email-address"
              label="Price ($)"
              placeholder="Ex: 100"
            />

            <TextField
              autoCapitalize="none"
              containerStyle={$informationFieldTextField}
              autoCorrect={false}
              keyboardType="email-address"
              label="Discount (%)"
              placeholder="Ex: 10"
            />
          </View>

          <View style={$descriptionField}>
            <TextField
              style={$descriptionTextField}
              label="Description"
              placeholder="Enter description"
              multiline
            />
          </View>

          <Text style={$label}>Category</Text>
          <DropdownComponent data={categories} placeholder="Select category"/>

          <Text style={$label}>Condition</Text>
          <RadioGroup options={conditions} value={radioValue} onValueChange={setRadioValue} style={$radioToggleGroupContainer}/>

          <View style={$uploadArea}>
            <Text style={$uploadText}>Upload Image</Text>
            <Button style={$uploadButton} onPress={openImagePicker}>
              Upload
            </Button>
          </View>

          <Button style={$submit} onPress={openImagePicker}>
            <Text style={$submitText}>Upload Image</Text>
          </Button>
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
  display: "flex",
  flexDirection: "row",
  width: "100%",
  fontWeight: "bold",
};

const $submit: ViewStyle = {
  marginTop: spacing.lg,
  width: "100%",
  backgroundColor: "rgb(102 125 255)",
};

const $createContainer: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
  width: "100%",
};

const $descriptionField: ViewStyle = {
  marginTop: spacing.lg,
  width: "100%",
};

const $descriptionTextField: TextStyle = {
  height: 100,
  width: "100%",
};

const $title: TextStyle = {
  marginBottom: spacing.xxl,
  fontSize: 24,
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
  alignItems: "center",
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
