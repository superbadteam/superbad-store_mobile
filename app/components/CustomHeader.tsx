import { colors } from "app/theme";
import React from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "./BackButton";

interface CustomHeaderProps {
  rightContents: string[];
  leftContents: string[];
  isHasBackButton: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  rightContents,
  leftContents,
  isHasBackButton,
}) => {
  return (
    <View style={$header}>
      <View style={$rightIcons}>
        {isHasBackButton && <BackButton tintColor={colors.text} />}
        {leftContents.map((icon, index) => (
          <Ionicons
            key={index}
            name={icon as keyof typeof Ionicons.glyphMap}
            size={27}
            color={colors.text}
            style={$icon}
          />
        ))}
      </View>
      <View style={$rightIcons}>
        {rightContents.map((icon, index) => (
          <Ionicons
            key={index}
            name={icon as keyof typeof Ionicons.glyphMap}
            size={27}
            color={colors.text}
            style={$icon}
          />
        ))}
      </View>
    </View>
  );
};

const $header: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  padding: 12,
};

const $rightIcons: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
};

const $icon: TextStyle = {
  marginLeft: 20,
};

export default CustomHeader;
