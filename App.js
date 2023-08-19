import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/RootStack';

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

  // show loading if font is still loading
  if (!fontsLoaded) {
    return (
      <ActivityIndicator size="small" color="black" animating={fontsLoaded} />
    );
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
