import React, { ViewStyle, StyleProp } from "react-native";
import { Button } from "../components";
import * as ImagePickerPlugin from "expo-image-picker";
import { TextProps } from "./Text";

export interface ImagePickerProps {
  onSelectedImage: (image: string) => void;
  type: "camera" | "gallery";
  titleTx: TextProps["tx"];
  style?: StyleProp<ViewStyle>;
}

export const ImagePicker = (props: ImagePickerProps) => {
  const { type, titleTx, onSelectedImage, style } = props;

  const pickImageFromStorage = async () => {
    const result = await ImagePickerPlugin.launchImageLibraryAsync({
      mediaTypes: ImagePickerPlugin.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onSelectedImage(result.assets[0].uri);
    }
  };

  const pickImageFromCamera = async () => {
    const result = await ImagePickerPlugin.launchCameraAsync({
      mediaTypes: ImagePickerPlugin.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onSelectedImage(result.assets[0].uri);
    }
  };

  const onPressButton = type === "camera" ? pickImageFromCamera : pickImageFromStorage;
  return <Button tx={titleTx} style={style} onPress={onPressButton} />;
};
