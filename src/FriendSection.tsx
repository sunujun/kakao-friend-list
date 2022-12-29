import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FriendSection = (props: {
    friendProfileLength: number;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>친구 {props.friendProfileLength}</Text>
            <TouchableOpacity onPress={props.onPress}>
                <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default FriendSection;
