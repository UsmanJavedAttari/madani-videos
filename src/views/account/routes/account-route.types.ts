import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AccountRouteList = {
    Videos: undefined;
};

export type AccountRouteProps<T extends keyof AccountRouteList> = {
    navigation: StackNavigationProp<AccountRouteList, T>;
    route: RouteProp<AccountRouteList, T>;
};
