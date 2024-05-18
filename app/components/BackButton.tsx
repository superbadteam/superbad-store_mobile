import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TextStyle, TouchableOpacity } from "react-native";

interface BackButtonProps {
  tintColor: string;
}

const BackButton: React.FC<BackButtonProps> = ({ tintColor }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={$iconContainer} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color={tintColor} />
    </TouchableOpacity>
  );
};

const $iconContainer: TextStyle = {
  padding: 0,
};

export default BackButton;
