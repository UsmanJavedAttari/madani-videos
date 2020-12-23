import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Text } from 'react-native';
import { Center } from './components';
import { AuthenticationRoutes } from './views';
import { AccountRoutes } from './views/account';

export const Main = ({}) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({ name: 'Usman' });

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size={40} color="#5840ff" />
                <Text
                    style={{
                        fontFamily: 'Montserrat-Medium',
                        fontSize: 15,
                        color: '#5840ff',
                    }}
                >
                    Loading...
                </Text>
            </Center>
        );
    }

    return (
        <NavigationContainer>
            {!user ? <AuthenticationRoutes /> : <AccountRoutes />}
        </NavigationContainer>
    );
};
