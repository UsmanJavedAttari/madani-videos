import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeView, SignInView, SignUpView } from '../views';
import { AuthRoutes } from './authentication-route.types';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator<AuthRoutes>();

export const AuthenticationRoutes = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ header: () => null }}
        >
            <Stack.Screen name="Home" component={HomeView} />
            <Stack.Screen name="Sign In" component={SignInView} />
            <Stack.Screen name="Sign Up" component={SignUpView} />
        </Stack.Navigator>
        <StatusBar backgroundColor="#5840ff" />
    </NavigationContainer>
);
