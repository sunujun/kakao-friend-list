import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton = (props: { name: string }) => {
    return (
        <View style={{ paddingHorizontal: 6 }}>
            <Ionicons name={props.name} size={24} color="black" />
        </View>
    );
};

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>친구</Text>
            <View style={{ flexDirection: 'row' }}>
                <IconButton name="search-outline" />
                <IconButton name="person-add-outline" />
                <IconButton name="md-musical-notes-outline" />
                <IconButton name="ios-settings-outline" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default Header;
