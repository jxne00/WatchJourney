import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from './stacks/StackScreenOptions';
import MainScreensNav from './AppBottomNav';
import LoginStack from './stacks/LoginStack';
import Reviews from '../screens/reviews/Reviews';

const MainStack = createNativeStackNavigator();

/**
 * @description the main stack navigator linking the login screen to the main screens
 */
const RootStack = () => (
  <MainStack.Navigator screenOptions={{ headerShown: false }}>
    <MainStack.Screen name="Login" component={LoginStack} />

    <MainStack.Screen
      name="AppScreens"
      component={MainScreensNav}
      options={{ gestureEnabled: false }}
    />

    <MainStack.Screen
      name="ReviewsPage"
      component={Reviews}
      options={{
        title: 'Reviews',
        ...SCREEN_OPTIONS,
      }}
    />
  </MainStack.Navigator>
);

export default RootStack;
