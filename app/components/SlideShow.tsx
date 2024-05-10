import React from "react";
import { View, Dimensions, Image, ViewStyle, ImageStyle } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

interface SlideShowProps {
  images: string[];
}

const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
  return (
    <View style={$container}>
      <Swiper showsButtons={false} autoplay>
        {images.map((imageUri, index) => (
          <View key={index} style={$slide}>
            <Image source={{ uri: imageUri }} style={$image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const $container: ViewStyle = {
  height: 300,
};

const $slide: ViewStyle = {
  alignItems: "center",
  flex: 1,
  justifyContent: "center",
};

const $image: ImageStyle = {
  borderRadius: 5,
  height: 300,
  width,
};

export default SlideShow;
