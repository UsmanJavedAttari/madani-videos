import React from 'react';
import { AuthenticationRoutes } from './src/views';
import { useFonts } from 'expo-font';

export default function App() {
    const [loaded] = useFonts({
        'Montserrat-Regular': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return <AuthenticationRoutes />;
}
