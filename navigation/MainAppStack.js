import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreensNav from './AppBottomNav';
import LoginStack from './stacks/LoginStack';

const MainStack = createNativeStackNavigator();

/**
 * @description  The main stack navigator linking the login screen
 * to the bottom tab navigator of the main app screens
 */
const MainAppStack = () => (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Login" component={LoginStack} />
        <MainStack.Screen name="AppScreens" component={MainScreensNav} />
    </MainStack.Navigator>
);

export default MainAppStack;
