import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Toggle } from "../components";
import { spacing } from "../theme";

export interface RadioOption {
  label: string;
  value: string;
}

export const RadioGroup = (props: {
  options: RadioOption[];
  value: RadioOption;
  onValueChange: (value: RadioOption) => void;
  style?: ViewStyle;
}) => {
  const handlePress = (option: RadioOption) => {
    props.onValueChange(option);
  };

  const styles = StyleSheet.flatten([$radioGroupContainer, props.style]);

  return (
    <View style={styles}>
      {props.options.map((option) => (
        <Toggle
          key={option.label}
          variant="radio"
          label={option.label}
          value={props.value.value === option.value}
          onPress={() => handlePress(option)}
        />
      ))}
    </View>
  );
};

export default RadioGroup;

const $radioGroupContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: spacing.lg,
  width: "100%",
  gap: spacing.lg,
};
