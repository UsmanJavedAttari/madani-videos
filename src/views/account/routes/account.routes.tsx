import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountRouteList } from './account-route.types';
import { VideosView } from '../views';
import { BottomTabs } from '../../../components';

const BottomTabNavigator = createBottomTabNavigator<AccountRouteList>();

export const AccountRoutes = () => (
    <BottomTabNavigator.Navigator
        initialRouteName="Videos"
        tabBar={({ state }) => <BottomTabs index={state.index} />}
    >
        <BottomTabNavigator.Screen name="Videos" component={VideosView} />
    </BottomTabNavigator.Navigator>
);
