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
import TabBar from './TabBar';

const Page = () => {
    const [isOpened, setIsOpened] = useState(true);
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const insets = useSafeAreaInsets();
    const onPressArrow = () => {
        setIsOpened(prev => !prev);
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <Header />
                <Margin height={10} />
                <Profile uri={myProfile.uri} name={myProfile.name} introduction={myProfile.introduction} />
                <Margin height={15} />
                <Division />
                <Margin height={12} />
                <FriendSection friendProfileLength={friendProfiles.length} onPress={onPressArrow} isOpened={isOpened} />
                <FriendList data={friendProfiles} isOpened={isOpened} />
            </View>
            <TabBar selectedTabIndex={selectedTabIndex} setSelectedTabIndex={setSelectedTabIndex} />
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
