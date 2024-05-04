import React, { FC, useEffect, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Toggle, Screen, ToggleProps, Text, TextField, DropdownComponent } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing } from "../theme"
import * as ImagePicker from 'react-native-image-picker';

import { api } from "../services/api"

function ControlledToggle(props: ToggleProps) {
  const [value, setValue] = React.useState(props.value || false)
  return <Toggle {...props} value={value} onPress={() => setValue(!value)} />
}

function openImagePicker() {
ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    },
    (response) => {
      console.log(response);
    },
  )
}

// const categories = [
//     { label: 'Item 1', value: '1' },
//     { label: 'Item 2', value: '2' },
//     { label: 'Item 3', value: '3' },
//     { label: 'Item 4', value: '4' },
//     { label: 'Item 5', value: '5' },
//     { label: 'Item 6', value: '6' },
//     { label: 'Item 7', value: '7' },
//     { label: 'Item 8', value: '8' },
//   ];

export const DemoCreateProductScreen: FC<DemoTabScreenProps<"DemoCreateProduct">> =
  function DemoCreateProductScreen(_props) {
    const [categories, setCategories] = useState([]);
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
    }, []); // Empty dependency array ensures the effect runs only once, on component mount


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
          <View style={$conditionField}>
            <ControlledToggle variant="radio" label="New" />
            <ControlledToggle variant="radio" label="Like new" />
            <ControlledToggle variant="radio" label="Old" />
          </View>

          <View style={$uploadArea}>
            <Text style={$uploadText}>Upload Image</Text>
            <Button style={$uploadButton} onPress={openImagePicker}>
              Upload
            </Button>
          </View>
        </View>
      </Screen>
    )
  }

const $container: ViewStyle = {
  paddingTop: spacing.lg,
  paddingBottom: spacing.xxl,
  paddingHorizontal: spacing.lg,
  backgroundColor: 'white',
}

const $label: TextStyle = {
  marginTop: spacing.lg,
  display: "flex",
  flexDirection: "row",
  width: "100%",
  fontWeight: "bold",
}

const $createContainer: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
  width: "100%",
}

const $descriptionField: ViewStyle = {
  marginTop: spacing.lg,
  width: "100%",
}

const $descriptionTextField: TextStyle = {
  height: 100,
  width: "100%",
}

const $conditionField: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: spacing.lg,
  width: "100%",
  gap: spacing.lg,
}

const $title: TextStyle = {
  marginBottom: spacing.xxl,
  fontSize: 24,
}

const $informationField: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  gap: spacing.lg,
}

const $informationFieldTextField: ViewStyle = {
  flex: 1,
}

const $uploadArea: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  alignItems: "center",
  marginTop: spacing.lg,
}

const $uploadText: TextStyle = {
  marginBottom: spacing.lg,
}

const $uploadButton: ViewStyle = {
  width: "100%",
  height: 200,
}
