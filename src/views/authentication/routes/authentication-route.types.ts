import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AuthRoutes = {
    Home: undefined;
    'Sign In': undefined;
    'Sign Up': undefined;
};

export type AuthRouteProps<T extends keyof AuthRoutes> = {
    navigation: StackNavigationProp<AuthRoutes, T>;
    route: RouteProp<AuthRoutes, T>;
};
