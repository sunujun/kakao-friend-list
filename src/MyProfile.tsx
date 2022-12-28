import React from 'react';
import { Image, Text, View } from 'react-native';
import Margin from './Margin';

const MyProfile = (props: { uri: string; name: string; introduction: string }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: props.uri }} style={{ width: 50, height: 50, borderRadius: 20 }} />
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{props.name}</Text>
                <Margin height={6} />
                <Text style={{ color: 'grey', fontSize: 12 }}>{props.introduction}</Text>
            </View>
        </View>
    );
};

export default MyProfile;
