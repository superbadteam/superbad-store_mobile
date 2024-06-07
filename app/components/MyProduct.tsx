import { spacing } from "app/theme";
import React from "react";
import { View, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { AutoImage } from "./AutoImage";
import { Text } from "./Text";

export interface Product {
    id: number;
    name: string;
    sold: number;
    imageUrl: string;
}

export interface MyProductProps {
    product: Product;
}
const MyProduct = (props: MyProductProps) => {
    const { name, imageUrl, sold} = props.product;
    return (
        <View style={$container}>
            <AutoImage maxWidth={190} maxHeight={190} source={{ uri: imageUrl }} style={$image} />

            <View style={$infor}>
                <View>
                    <Text style={$productName} text={name} />
                </View>
                <View style={$soldContainer}>
                    <Text text={`Sold: ${sold}`} size="md" />
                </View>
            </View>
        </View>
    );
};

const $container: ViewStyle = {
    flex: 1,
    padding: spacing.sm,
};

const $image: ViewStyle & ImageStyle = {
    borderRadius: 15,
    marginBottom: spacing.xs,
};

const $infor: ViewStyle = {
    alignItems: "flex-start",
};

const $productName: TextStyle = {
    fontWeight: "normal",
    marginBottom: spacing.xxs,
    textAlign: "left",
};

const $soldContainer: TextStyle = {
    alignItems: "center",
    flexDirection: "row",
};

export default MyProduct;
