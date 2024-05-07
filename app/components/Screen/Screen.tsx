import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

interface ScreenProps {
  customStyles?: any;
  children?: ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ customStyles, children }) => {
  return <View style={[styles.container, customStyles]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
