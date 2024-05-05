import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

interface SlideShowProps {
  images: string[];
}

const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons={false} autoplay>
        {images.map((imageUri, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: imageUri }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
  image: {
    borderRadius: 5,
    height: 300,
    width,
  },
  slide: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {},
});

export default SlideShow;

