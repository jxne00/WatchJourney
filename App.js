import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import MainAppStack from './navigation/MainAppStack';

const App = () => {
    // load fonts from fonts folder
    const [fontsLoaded] = useFonts({
        // src: https://fonts.google.com/specimen/Bangers
        'Bangers-Regular': require('./assets/fonts/Bangers-Regular.ttf'),
        // src: https://fonts.google.com/specimen/Poppins
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <MainAppStack />
        </NavigationContainer>
    );
};

export default App;
