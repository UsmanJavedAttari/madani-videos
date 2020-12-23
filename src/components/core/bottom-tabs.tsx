import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface BottomTabsProps {
    index: number;
}

export const BottomTabs: React.FC<BottomTabsProps> = ({ index }) => {
    return (
        <View
            style={{
                backgroundColor: '#5840ff',
                padding: 10,
                margin: 5,
                borderRadius: 20,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
            }}
        >
            <Ionicons
                name={index === 0 ? 'md-home' : 'md-home-outline'}
                size={25}
                color="white"
                style={{
                    ...(index !== 0 ? { opacity: 0.2 } : {}),
                }}
            />
            <Ionicons
                name={index === 1 ? 'md-search' : 'md-search-outline'}
                size={25}
                color="white"
                style={{
                    ...(index !== 1 ? { opacity: 0.2 } : {}),
                }}
            />
        </View>
    );
};
