import React, { ViewStyle, View } from "react-native";
import { ImagePicker, AutoImage, TextField, Button, Icon } from "../";
import { useState } from "react";
import { spacing, colors } from "../../theme";

interface ItemType {
  id: number;
  img: string;
  name: string;
  price: number;
}
export const SelectImageGroup = () => {
  const [itemType, setItemType] = useState<ItemType[]>([]);

  const selectedImage = (image: string) => {
    // setImage(image);
    // push image to itemType
    const newId = itemType.length > 0 ? itemType[itemType.length - 1].id + 1 : 1;
    setItemType([
      ...itemType,
      {
        id: newId,
        img: image,
        name: "",
        price: 0,
      },
    ]);
    console.log("image", itemType);
  };

  const resetData = () => {
    setItemType([]);
  };

  const removeItem = (id: number) => {
    const newItems = itemType.filter((item) => item.id !== id);
    setItemType(newItems);
  };

  return (
    <View style={$container}>
      <ImagePicker type="gallery" titleTx="common.selectImage" onSelectedImage={selectedImage} />
      {itemType.length > 0 && <Button tx="common.removeAll" onPress={resetData} />}
      {itemType.map((item) => {
        return (
          item.img && (
            <View key={item.id} style={$itemContainer}>
              <AutoImage
                maxWidth={300}
                maxHeight={200}
                resizeMode="contain"
                source={{ uri: item.img }}
              />
              <View style={$itemContainerField}>
                <View style={$itemContainerFieldInput}>
                  <TextField
                    containerStyle={$textField}
                    labelTx="common.type"
                    placeholderTx="DemoCreateProductScreen.placeholder.itemType"
                  />
                  <TextField
                    containerStyle={$textField}
                    labelTx="DemoCreateProductScreen.label.price"
                    placeholderTx="DemoCreateProductScreen.placeholder.price"
                  />
                </View>
                <Button style={$recycleBinSolid} onPress={() => removeItem(item.id)}>
                  <Icon icon="recycleBinSolid" size={16} color={colors.palette.neutral100} />
                </Button>
              </View>
            </View>
          )
        );
      })}
    </View>
  );
};

const $container: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: spacing.sm,
  width: "100%",
};
const $textField: ViewStyle = {
  width: "100%",
};

const $itemContainer: ViewStyle = {
  display: "flex",
  gap: spacing.sm,
  width: "100%",
  padding: spacing.sm,
  borderRadius: spacing.sm,
  alignItems: "center",
  borderColor: colors.palette.neutral400,
  borderWidth: 1,
  position: "relative",
};

const $itemContainerField: ViewStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: spacing.sm,
  alignItems: "stretch",
};

const $itemContainerFieldInput: ViewStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: spacing.sm,
};

const $recycleBinSolid: ViewStyle = {
  backgroundColor: colors.palette.angry400,
  width: spacing.xxl,
  minHeight: spacing.xxl,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  borderWidth: 0,
  marginTop: spacing.xl,
};
