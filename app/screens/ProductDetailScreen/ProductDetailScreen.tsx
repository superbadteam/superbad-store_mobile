import React from "react"
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"

import SlideShow from "./SlideShow"

const colors = {
  white: "#fff",
  text: "#000",
  green: "green",
  border: "#ccc",
}

interface BackButtonProps {
  tintColor: string
}

const BackButton: React.FC<BackButtonProps> = ({ tintColor }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color={tintColor} />
    </TouchableOpacity>
  )
}

const ProductDetailScreen = () => {
  const product = {
    id: 1,
    name: "Sample Product",
    price: 99.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://via.placeholder.com/200",
  }

  // Dummy images for the slideshow
  const images = [
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/771796",
    "https://via.placeholder.com/600/24f355",
    "https://via.placeholder.com/600/d32776",
    "https://via.placeholder.com/600/f66b97",
  ]

  return (
    <ScrollView style={{ backgroundColor: colors.white }}>
      <View style={styles.header}>
        <BackButton tintColor={colors.text} />
        <View style={styles.rightIcons}>
          <Ionicons name="heart-outline" size={24} color={colors.text} style={styles.icon} />
          <Ionicons name="share-outline" size={24} color={colors.text} style={styles.icon} />
          <Ionicons name="cart-outline" size={24} color={colors.text} style={styles.icon} />
        </View>
      </View>

      {/* SlideShow component */}
      <SlideShow images={images} />

      {/* Product details */}
      <View style={styles.container}>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        <Text style={[styles.name, { color: colors.text }]}>{product.name}</Text>
        <Text style={[styles.price, { color: colors.green }]}>${product.price}</Text>
        <Text style={[styles.description, { color: colors.text }]}>{product.description}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  icon: {
    marginLeft: 20,
  },
  iconContainer: {
    padding: 10,
  },
  image: {
    borderRadius: 10,
    height: 300,
    marginBottom: 20,
    width: "100%",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rightIcons: {
    flexDirection: "row",
  },
})

export default ProductDetailScreen
