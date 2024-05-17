import React, { FC } from "react";
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native";
import { ListItem, Screen, Text } from "../components";
import { DemoTabScreenProps } from "../navigators/DemoNavigator";
import { spacing } from "../theme";


export const DemoCommunityScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function DemoCommunityScreen(_props) {
    return (
      <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        {
          <Text>
            Well come to vietnamese
          </Text>
        }
      </Screen>
    );
  };

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
};
