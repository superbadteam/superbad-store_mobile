import React, { useState } from "react";
import { ViewStyle, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TextProps } from "./Text";
import { translate } from "../i18n";

interface DropdownComponentProps {
  data?: any;
  search?: boolean;
  labelField?: string;
  valueField?: string;
  placeholder?: string;
  placeholderTx?: TextProps["tx"];
  searchPlaceholder: TextProps["tx"];
  value?: any;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (item: any) => void;
  renderLeftIcon?: () => void;
  maxHeight?: number;
}

export const DropdownComponent = (props: DropdownComponentProps) => {
  const { data, placeholder, placeholderTx, searchPlaceholder, maxHeight } = props;
  const [value, setValue] = useState<any>(null);
  const [isFocus, setIsFocus] = useState(false);
  const contentTx = placeholderTx && translate(placeholderTx);
  const searchPlaceholderTx = searchPlaceholder && translate(searchPlaceholder);

  return (
    <View style={$container}>
      <Dropdown
        style={$dropdown}
        inputSearchStyle={$inputSearchStyle}
        data={data}
        search
        maxHeight={maxHeight || 300}
        labelField="name"
        valueField="id"
        placeholder={!isFocus ? contentTx ?? placeholder : "..."}
        searchPlaceholder={searchPlaceholderTx}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign style={$icon} color={isFocus ? "blue" : "black"} name="Safety" size={20} />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const $container: ViewStyle = {
  width: "100%",
};
const $dropdown: ViewStyle = {
  borderRadius: 8,
  borderWidth: 0.5,
  height: 50,
  paddingHorizontal: 8,
};
const $icon: ViewStyle = {
  marginRight: 5,
};
const $inputSearchStyle: ViewStyle = {
  height: 40,
};
