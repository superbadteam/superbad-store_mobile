import { Text } from "app/components";
import { colors, spacing } from "app/theme";
import React from "react";
import { View, TouchableOpacity, ViewStyle } from "react-native";

const SortByScreen = () => {
  return (
    <View style={$container}>
      <View>
        <Text
          style={{ marginBottom: spacing.sm }}
          size="xl"
          weight="bold"
          tx="FilterProductsScreen.title.sortBy"
        />
      </View>
      <View>
        <TouchableOpacity style={$item}>
          <Text size="md" tx="FilterProductsScreen.sortBy.priceHighToLow" />
        </TouchableOpacity>
        <TouchableOpacity style={$item}>
          <Text tx="FilterProductsScreen.sortBy.priceLowToHigh" />
        </TouchableOpacity>
        <TouchableOpacity style={$item}>
          <Text tx="FilterProductsScreen.sortBy.popularity" />
        </TouchableOpacity>
        <TouchableOpacity style={$item}>
          <Text tx="FilterProductsScreen.sortBy.discount" />
        </TouchableOpacity>
        <TouchableOpacity style={$item}>
          <Text tx="FilterProductsScreen.sortBy.customerRating" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const $container: ViewStyle = {
  backgroundColor: colors.palette.white,
  padding: spacing.md,
  borderRadius: spacing.sm,
  height: "100%",
};

const $item: ViewStyle = {
  padding: spacing.lg,
};
export default SortByScreen;
