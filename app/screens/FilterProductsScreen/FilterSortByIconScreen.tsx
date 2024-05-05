import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SortByScreen from './SortByScreen';

const FilterSortByScreen = () => {
    const [isShowSortByModal, setIsShowSortByModal] = useState(false);

    const handleFilterPress = () => {

        console.log('Filter button pressed');
    };

    const handleSortByPress = () => {
        setIsShowSortByModal(true);
    };

    const handleCloseModal = () => {
        setIsShowSortByModal(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={handleFilterPress} style={styles.iconButton}>
                    <Ionicons name="options" size={40} color="#9494b8" />
                    <Text>Filter</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={handleSortByPress} style={styles.iconButton}>
                    <Ionicons name="filter" size={40} color="#9494b8" />
                    <Text>Srort By</Text>
                </TouchableOpacity>

                <Modal
                    visible={isShowSortByModal}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={handleCloseModal}
                >
                    <TouchableOpacity style={styles.modalBackground} onPress={handleCloseModal}>
                        <View style={[styles.modalContainer, { top: windowHeight / 2 }]}>
                            <SortByScreen />
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        </View>
    )
};

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        zIndex: 1000,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
    },
    iconButton: {

    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu nền mờ của modal
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        position: 'absolute',
        height: windowHeight / 2,
        width: '100%',
    },
});

export default FilterSortByScreen;
