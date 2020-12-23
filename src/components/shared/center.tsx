import React from 'react';
import { StyleProp, TextStyle, View } from 'react-native';

interface CenterProps {
    style?: StyleProp<TextStyle>;
}

export const Center: React.FC<CenterProps> = ({ children, style }) => {
    return (
        <View
            style={[
                {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                style,
            ]}
        >
            {children}
        </View>
    );
};
