import React from 'react';
import { useFonts } from 'expo-font';
import { Main } from './src/main';
import { StatusBar } from 'react-native';

export default function App() {
    const [loaded] = useFonts({
        'Montserrat-Regular': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <>
            <StatusBar backgroundColor="#5840ff" />
            <Main />
        </>
    );
}
