import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { friendProfiles, myProfile } from './data';
import Division from './Division';
import FriendList from './FriendList';
import FriendSection from './FriendSection';
import Header from './Header';
import Margin from './Margin';
import Profile from './Profile';

const Page = () => {
    const [isOpened, setIsOpened] = useState(true);
    const insets = useSafeAreaInsets();
    const onPressArrow = () => {
        setIsOpened(prev => !prev);
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <Header />
            <Margin height={10} />
            <Profile uri={myProfile.uri} name={myProfile.name} introduction={myProfile.introduction} />
            <Margin height={15} />
            <Division />
            <Margin height={12} />
            <FriendSection friendProfileLength={friendProfiles.length} onPress={onPressArrow} isOpened={isOpened} />
            <FriendList data={friendProfiles} isOpened={isOpened} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
    },
});

export default Page;
