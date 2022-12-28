import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { myProfile } from './data';
import Header from './Header';
import Margin from './Margin';
import MyProfile from './MyProfile';

const Page = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <Header />
            <Margin height={10} />
            <MyProfile uri={myProfile.uri} name={myProfile.name} introduction={myProfile.introduction} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Page;
