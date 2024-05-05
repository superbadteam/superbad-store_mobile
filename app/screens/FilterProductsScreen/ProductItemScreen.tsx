import { Ionicons } from "@expo/vector-icons"
import { spacing } from 'app/theme';
import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    rating: number;
    isFavorite: boolean;
    discount: number;
}

interface ProductItemScreenProps {
    item: Product,
}
const ProductItemScreen = (props: ProductItemScreenProps) => {
    const { id, name, price, imageUrl, description, rating, isFavorite, discount } = props.item;
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.image}
            />

            <View style={styles.favoriteContainer}>
                <TouchableOpacity onPress={() => {
                    console.log('Favorite button pressed');
                }} style={styles.favoriteButton}>
                    <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color={isFavorite ? "red" : "black"} />
                </TouchableOpacity>
            </View>


            <View style={styles.infor}>
                <View>
                    <Text style={styles.productName}>{name}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.discountedPrice}>${price - price * discount / 100}</Text>
                    <Text style={styles.originalPrice}>${price}</Text>
                    <Text style={styles.discountAmount}>{discount}% OFF</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star-outline" size={20} color="gold" />
                    <Text style={styles.productRating}> {rating} (100)</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    image: {
        width: 200,
        height: 240,
        marginBottom: spacing.xs,
        borderRadius: 20,
    },
    favoriteContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderBlockColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    favoriteButton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infor: {
        alignItems: 'flex-start',
    },
    productName: {
        fontSize: 15,
        fontWeight: 'normal',
        marginBottom: spacing.xxs,
        textAlign: 'left',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    discountedPrice: {
        fontSize: 16,
        color: 'green',
        marginRight: spacing.xxs
    },
    originalPrice: {
        fontSize: 14,
        color: 'gray',
        textDecorationLine: 'line-through',
        marginRight: spacing.xxs,
    },
    discountAmount: {
        fontSize: 14,
        color: 'red',
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    productRating: {
        fontSize: 18
    },
    buttonStyle: {
        width: spacing.xl,
        height: spacing.xl,
        borderRadius: spacing.xl / 2,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'red',
    },
    iconStyle: {
        marginLeft: 5,
    }
});

export default ProductItemScreen;
