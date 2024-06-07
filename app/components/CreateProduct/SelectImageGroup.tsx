import React, { ViewStyle, View } from "react-native";
import { ImagePicker, AutoImage, TextField, Button, Icon } from "../";
import { spacing, colors } from "../../theme";
import type { ProductItemType } from "app/types";
import { v4 } from "uuid";
import { Text } from "../Text";

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


  function onChangeData(text: string, id: string, type: string) {
    const newItems = itemType.map((item) => {
      if (item.id === id) {
        return type === "price" ? { ...item, price: Number(text) } : { ...item, quantity: Number(text) };
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
                  <Text weight="medium" tx="common.type" />
                  <View style={$inpField}>
                    <TextField
                      value={item.name}
                      onChangeText={(text) => onChangeName(text, item.id)}
                      containerStyle={$textField}
                      placeholderTx="DemoCreateProductScreen.placeholder.itemType"
                    />
                  </View>
                  <View style={$itemContainerFieldInput}>
                    <Text weight="medium" tx="DemoCreateProductScreen.label.price" />
                    <View style={$inpField}>
                      <TextField
                        value={String(item.price)}
                        onChangeText={(text) => onChangeData(text, item.id, "price")}
                        containerStyle={$textField}
                        placeholderTx="DemoCreateProductScreen.placeholder.price"
                      />
                    </View>
                    <Text weight="medium" tx="DemoCreateProductScreen.label.quantity" />
                    <View style={$inpField}>
                      <TextField
                        value={String(item.quantity)}
                        onChangeText={(text) => onChangeData(text, item.id, "quantity")}
                        containerStyle={$textField}
                        placeholderTx="DemoCreateProductScreen.placeholder.quantity"
                      />
                    </View>
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

const $inpField: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 2,
  borderColor: colors.palette.neutral300,
  borderRadius: spacing.xs,
  minHeight: spacing.xxl,
};
