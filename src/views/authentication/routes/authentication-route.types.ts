import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AuthRouteList = {
    Home: undefined;
    'Sign In': undefined;
    'Sign Up': undefined;
};

export type AuthRouteProps<T extends keyof AuthRouteList> = {
    navigation: StackNavigationProp<AuthRouteList, T>;
    route: RouteProp<AuthRouteList, T>;
};
