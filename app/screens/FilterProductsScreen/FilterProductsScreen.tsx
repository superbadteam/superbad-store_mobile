import React, { useState } from "react"
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import { FlatList, TextInput } from "react-native-gesture-handler"
import ProductItemScreen from "./ProductItemScreen"
import FilterSortByScreen from "./FilterSortByIconScreen"


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
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color={tintColor} />
    </TouchableOpacity>
  )
}

const FilterProductsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [isShowIconSearchCart, setIsShowIconSearchCart] = useState(false);
  const [totalProductFilter, setTotalProductFilter] = useState(0);
  let products = [
    {
      id: 1,
      name: "Men's T-shirt",
      price: 10.85,
      description: "White men's T-shirt, simple design, youthful style.",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.5,
      isFavorite: false,
      discount: 10,
    },
    {
      id: 2,
      name: "Women's Jeans",
      price: 19.57,
      description: "Blue women's jeans, premium denim material, slim fit.",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.5,
      isFavorite: true,
      discount: 20,
    },
    {
      id: 3,
      name: "Product 3",
      price: 8.70,
      description: "Description for Product 3",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: true,
      discount: 15,
    },
    {
      id: 4,
      name: "Product 4",
      price: 8.70,
      description: "Description for Product 4",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: true,
      discount: 15,
    },
    {
      id: 5,
      name: "Product 5",
      price: 8.70,
      description: "Description for Product 5",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: false,
      discount: 15,
    },
    {
      id: 6,
      name: "Product 6",
      price: 8.70,
      description: "Description for Product 6",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: false,
      discount: 15,
    },
    {
      id: 7,
      name: "Product 7",
      price: 8.70,
      description: "Description for Product 7",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: false,
      discount: 15,
    },
    {
      id: 8,
      name: "Product 8",
      price: 8.70,
      description: "Description for Product 8",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: true,
      discount: 15,
    },
    {
      id: 9,
      name: "Product 9",
      price: 8.70,
      description: "Description for Product 9",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: false,
      discount: 15,
    },
    {
      id: 10,
      name: "Product 10",
      price: 8.70,
      description: "Description for Product 10",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: true,
      discount: 15,
    },
    {
      id: 11,
      name: "Product 11",
      price: 8.70,
      description: "Description for Product 11",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: false,
      discount: 15,
    },
    {
      id: 12,
      name: "Product 12",
      price: 8.70,
      description: "Description for Product 12",
      imageUrl: "https://res.cloudinary.com/dufmi5tf3/image/upload/v1714918926/OIP_m7ucv9.jpg",
      rating: 4.7,
      isFavorite: false,
      discount: 15,
    },
  ];
  let count = 13;
  return (
    <>
      <View style={styles.header}>
        <BackButton tintColor={colors.text} />
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm..."

        />
        <View style={styles.rightIcons}>
          <Ionicons name="close-circle-outline" size={24} color={colors.text} style={styles.icon} />
          <Ionicons name="search" size={24} color={colors.text} style={styles.icon} />
          <Ionicons name="cart-outline" size={24} color={colors.text} style={styles.icon} />
        </View>
      </View>
      <ScrollView style={{ backgroundColor: colors.white }}>
        {
          products.length > 0
            ?
            (
              <View style={styles.container}>
                <FlatList
                  data={products}
                  renderItem={ProductItemScreen}
                  keyExtractor={item => item.id.toString()}
                  numColumns={2}
                  contentContainerStyle={styles.flatListContent}
                />
              </View>
            )
            :
            (
              <View style={styles.noResultsContainer}>
                <Text>No Results Found</Text>
              </View>
            )
        }
      </ScrollView>
      <View>
        {products.length > 0 && <FilterSortByScreen></FilterSortByScreen>}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 5,
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
    backgroundColor: 'white'
  },
  icon: {
    marginLeft: 20,
  },
  input: {
    flex: 1,
    marginLeft: 8,
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

  filterSortByContainer: {
    zIndex: 1000,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  noResultsText: {
    fontSize: 30,
    color: 'black',
  },
})

export default FilterProductsScreen;