import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeView, SignInView, SignUpView } from '../views';
import { AuthRouteList } from './authentication-route.types';

const Stack = createStackNavigator<AuthRouteList>();

export const AuthenticationRoutes = () => (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ header: () => null }}
    >
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Sign In" component={SignInView} />
        <Stack.Screen name="Sign Up" component={SignUpView} />
    </Stack.Navigator>
);
