import React from 'react';
import { ScrollView, View } from 'react-native';
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
    return props.isOpened ? (
        <ScrollView showsVerticalScrollIndicator={false}>
            {props.data.map((data, index) => (
                <View key={index.toString()}>
                    <Profile uri={data.uri} name={data.name} introduction={data.introduction} isMe={false} />
                    <Margin height={13} />
                </View>
            ))}
        </ScrollView>
    ) : (
        <></>
    );
};

export default FriendList;
