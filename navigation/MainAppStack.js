import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SCREEN_OPTIONS from './components/StackScreenOptions';

import MainScreensNav from './AppBottomNav';
import LoginStack from './stacks/LoginStack';
import MovieDetails from '../components/MovieDetail';
import TVshowDetails from '../components/TvShowDetail';

import Reviews from '../screens/reviews/Reviews';

const MainStack = createNativeStackNavigator();

/**
 * @description  The main stack navigator linking the login screen
 * to the bottom tab navigator of the main app screens
 */
const MainAppStack = () => (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Login" component={LoginStack} />
        <MainStack.Screen
            name="AppScreens"
            component={MainScreensNav}
            options={{ gestureEnabled: false }}
        />
        <MainStack.Screen
            name="MovieDetailPage"
            component={MovieDetails}
            options={{
                title: 'Details',
                ...SCREEN_OPTIONS,
            }}
        />
        <MainStack.Screen
            name="TVshowDetailPage"
            component={TVshowDetails}
            options={{
                title: 'Details',
                ...SCREEN_OPTIONS,
            }}
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

export default MainAppStack;
