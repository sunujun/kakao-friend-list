import React from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabButton = ({
    isSelected,
    onPress,
    activeIconName,
    inactiveIconName,
    isIonicons,
}: {
    isSelected: boolean;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    activeIconName: string;
    inactiveIconName: string;
    isIonicons: boolean;
}) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
            {isIonicons ? (
                <Ionicons name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />
            ) : (
                <MaterialCommunityIcons name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />
            )}
        </TouchableOpacity>
    );
};

const TabBar = ({
    selectedTabIndex,
    setSelectedTabIndex,
}: {
    selectedTabIndex: number;
    setSelectedTabIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                flexDirection: 'row',
                width: '100%',
                height: 50,
                paddingBottom: insets.bottom,
                borderTopWidth: 0.5,
                borderTopColor: 'grey',
            }}>
            <TabButton
                isSelected={selectedTabIndex === 0}
                onPress={() => setSelectedTabIndex(0)}
                activeIconName="person"
                inactiveIconName="person-outline"
                isIonicons={true}
            />
            <TabButton
                isSelected={selectedTabIndex === 1}
                onPress={() => setSelectedTabIndex(1)}
                activeIconName="chatbubble"
                inactiveIconName="chatbubble-outline"
                isIonicons={true}
            />
            <TabButton
                isSelected={selectedTabIndex === 2}
                onPress={() => setSelectedTabIndex(2)}
                activeIconName="purse"
                inactiveIconName="purse-outline"
                isIonicons={false}
            />
            <TabButton
                isSelected={selectedTabIndex === 3}
                onPress={() => setSelectedTabIndex(3)}
                activeIconName="ellipsis-horizontal"
                inactiveIconName="ellipsis-horizontal-outline"
                isIonicons={true}
            />
        </View>
    );
};

export default TabBar;
