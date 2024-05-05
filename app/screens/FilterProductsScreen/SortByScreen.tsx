import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SortByScreen = () => {


    return (
        <>
            <View>
                <Text style={styles.title}>Sort By</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.sortItem}>
                    <Text style={styles.sortText}>Price - High to Low</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sortItem}>
                    <Text style={styles.sortText}>Price Low to High</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sortItem}>
                    <Text style={styles.sortText}>Popularity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sortItem}>
                    <Text style={styles.sortText}>Discount</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sortItem}>
                    <Text style={styles.sortText}>Customer Rating</Text>
                </TouchableOpacity>
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    sortItem: {
        padding: 20,
    },
    sortText: {
        fontSize: 18,
    },
});

export default SortByScreen;
