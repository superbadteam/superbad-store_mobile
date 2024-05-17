import React, { useState } from "react";
import { View, TouchableOpacity, Modal, Dimensions, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SortByScreen from "./SortByScreen";
import { colors, spacing } from "app/theme";
import { Text } from "app/components";

const FilterSortByScreen = () => {
  const [isShowSortByModal, setIsShowSortByModal] = useState(false);

  const handleFilterPress = () => {
    console.log("Filter button pressed");
  };

  const handleSortByPress = () => {
    setIsShowSortByModal(true);
  };

  const handleCloseModal = () => {
    setIsShowSortByModal(false);
  };

  return (
    <View style={$container}>
      <View style={$iconContainer}>
        <TouchableOpacity onPress={handleFilterPress} style={$iconContainer}>
          <Ionicons name="options" size={20} color="#9494b8" />
          <Text tx="FilterProductsScreen.title.filter" />
        </TouchableOpacity>
      </View>
      <View style={$iconContainer}>
        <TouchableOpacity onPress={handleSortByPress} style={$iconContainer}>
          <Ionicons name="filter" size={20} color={colors.gray} />
          <Text tx="FilterProductsScreen.title.sortBy" />
        </TouchableOpacity>

        <Modal
          visible={isShowSortByModal}
          animationType="slide"
          transparent={true}
          onRequestClose={handleCloseModal}
        >
          <TouchableOpacity style={$modalBackground} onPress={handleCloseModal}>
            <View style={[$modalContainer, { top: windowHeight / 2 }]}>
              <SortByScreen />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;
const $container: ViewStyle = {
  alignItems: "center",
  backgroundColor: colors.palette.white,
  flexDirection: "row",
  justifyContent: "space-around",
  paddingHorizontal: spacing.xs,
  paddingVertical: spacing.xxs,
  zIndex: 1000,
};

const $iconContainer: ViewStyle = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
};

const $modalBackground: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.matte,
  justifyContent: "center",
  alignItems: "center",
};

const $modalContainer: ViewStyle = {
  backgroundColor: colors.palette.white,
  borderRadius: 10,
  elevation: 5,
  height: windowHeight / 2,
  padding: 20,
  position: "absolute",
  width: "100%",
};

export default FilterSortByScreen;
