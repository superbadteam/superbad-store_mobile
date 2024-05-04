import React, { FC } from "react"
import * as Application from "expo-application"
import { Linking, Platform, TextStyle, View, ViewStyle } from "react-native"
import { Button, Toggle, Screen, ToggleProps, Text, TextField } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import { useStores } from "../models"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

/**
 * @param {string} url - The URL to open in the browser.
 * @returns {void} - No return value.
 */
function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url))
}
function ControlledToggle(props: ToggleProps) {
  const [value, setValue] = React.useState(props.value || false)
  return <Toggle {...props} value={value} onPress={() => setValue(!value)} />
}

function openImagePicker() {
  launchImageLibrary({mediaType: 'photo', quality: 0.5}, (response) => {
    console.log('Response = ', response);
  });
}
export const DemoCreateProductScreen: FC<DemoTabScreenProps<"DemoCreateProduct">> =
  function DemoCreateProductScreen(_props) {
    const {
      authenticationStore: { logout },
    } = useStores()

    const usingHermes = typeof HermesInternal === "object" && HermesInternal !== null
    // @ts-expect-error
    const usingFabric = global.nativeFabricUIManager != null

    const demoReactotron = React.useMemo(
      () => async () => {
        if (__DEV__) {
          console.tron.display({
            name: "DISPLAY",
            value: {
              appId: Application.applicationId,
              appName: Application.applicationName,
              appVersion: Application.nativeApplicationVersion,
              appBuildVersion: Application.nativeBuildVersion,
              hermesEnabled: usingHermes,
            },
            important: true,
          })
        }
      },
      [],
    )

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
