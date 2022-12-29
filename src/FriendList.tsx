import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Margin from './Margin';
import Profile from './Profile';

const FriendList = (props: {
    data: {
        uri: string;
        name: string;
        introduction: string;
    }[];
    isOpened: boolean;
}) => {
    const insets = useSafeAreaInsets();

    return props.isOpened ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: insets.bottom }}>
            {props.data.map((data, index) => (
                <View>
                    <Profile key={index.toString()} uri={data.uri} name={data.name} introduction={data.introduction} />
                    <Margin height={13} />
                </View>
            ))}
        </ScrollView>
    ) : (
        <></>
    );
};

export default FriendList;
