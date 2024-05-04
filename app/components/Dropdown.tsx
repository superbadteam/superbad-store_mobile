/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
  import React, { useState } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

  interface DropdownComponentProps {
    data?: any;
    search?: boolean;
    labelField?: string;
    valueField?: string;
    placeholder?: string;
    searchPlaceholder?: string;
    value?: any;
    onFocus?: () => void;
    onBlur?: () => void;
    onChange?: (item: any) => void;
    renderLeftIcon?: () => void;
  }

export const DropdownComponent = (props: DropdownComponentProps) => {
    const { data, placeholder } = props;
    const [value, setValue] = useState<any>(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
      <View style={styles.container}>
        {/* {renderLabel()} */}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="name"
          valueField="id"
          placeholder={!isFocus ? placeholder : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: '100%',
    },
    dropdown: {
      borderColor: 'gray',
      borderRadius: 8,
      borderWidth: 0.5,
      height: 50,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    iconStyle: {
      height: 20,
      width: 20,
    },
    inputSearchStyle: {
      fontSize: 16,
      height: 40,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
  });