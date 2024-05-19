import React, { ViewStyle, View } from "react-native";
import { ImagePicker, AutoImage, TextField, Button, Icon } from "../";
import { spacing, colors } from "../../theme";
import type { ProductItemType } from "app/types";
const { v4 } = require("uuid");

interface SelectImageGroupProps {
  itemType: ProductItemType[];
  setItemType: (types: ProductItemType[]) => void;
}
export const SelectImageGroup = (props: SelectImageGroupProps) => {
  const { itemType, setItemType } = props;
  const selectedImage = (image: string) => {
    setItemType([
      ...itemType,
      {
        id: v4(),
        imageUrl: image,
        name: "",
        price: 0,
        quantity: 0,
      },
    ]);
  };

  const resetData = () => {
    setItemType([]);
  };

  const removeItem = (id: string) => {
    const newItems = itemType.filter((item) => item.id !== id);
    setItemType(newItems);
  };

  function onChangeName(text: string, id: string) {
    const newItems = itemType.map((item) => {
      if (item.id === id) {
        return { ...item, name: text };
      }
      return item;
    });
    setItemType(newItems);
  }

  function onChangePrice(text: string, id: string) {
    const newItems = itemType.map((item) => {
      if (item.id === id) {
        return { ...item, price: Number(text) };
      }
      return item;
    });
    setItemType(newItems);
  }

  function onChangeQuantity(text: string, id: string) {
    const newItems = itemType.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Number(text) };
      }
      return item;
    });
    setItemType(newItems);
  }

  return (
    <View style={$container}>
      <ImagePicker type="gallery" titleTx="common.selectImage" onSelectedImage={selectedImage} />
      {itemType.length > 0 && <Button tx="common.removeAll" onPress={resetData} />}
      {itemType.map((item) => {
        return (
          item.imageUrl && (
            <View key={item.id} style={$itemContainer}>
              <AutoImage
                maxWidth={300}
                maxHeight={200}
                resizeMode="contain"
                source={{ uri: item.imageUrl }}
              />
              <View style={$itemContainerField}>
                <View style={$itemContainerFieldInput}>
                  <TextField
                    value={item.name}
                    onChangeText={(text) => onChangeName(text, item.id)}
                    containerStyle={$textField}
                    labelTx="common.type"
                    placeholderTx="DemoCreateProductScreen.placeholder.itemType"
                  />
                  <View style={$itemContainerFieldInput}>
                    <TextField
                      value={String(item.price)}
                      onChangeText={(text) => onChangePrice(text, item.id)}
                      containerStyle={$textField}
                      labelTx="DemoCreateProductScreen.label.price"
                      placeholderTx="DemoCreateProductScreen.placeholder.price"
                    />
                    <TextField
                      value={String(item.quantity)}
                      onChangeText={(text) => onChangeQuantity(text, item.id)}
                      containerStyle={$textField}
                      labelTx="DemoCreateProductScreen.label.quantity"
                      placeholderTx="DemoCreateProductScreen.placeholder.quantity"
                    />
                  </View>
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
