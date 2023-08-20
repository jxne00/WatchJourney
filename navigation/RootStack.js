import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOptions from './stacks/StackScreenOptions';
import MainScreensNav from './AppBottomNav';

import LoginStack from './stacks/LoginStack';
import Reviews from '../screens/reviews/Reviews';
import ShowDetails from '../components/showDetails';
import SearchScreen from '../screens/home/Search';
// provider for a list of genres
import { GenresProvider } from '../data/GenresContext';

const MainStack = createNativeStackNavigator();

/**
 * @description the main stack navigator linking the login screen to the main screens
 */
const RootStack = () => {
  const SCREEN_OPTIONS = ScreenOptions();

  return (
    <GenresProvider>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Login" component={LoginStack} />

        <MainStack.Screen
          name="AppScreens"
          component={MainScreensNav}
          options={{ gestureEnabled: false }}
        />

        <MainStack.Screen
          name="ShowDetailsPage"
          component={ShowDetails}
          options={{
            title: 'Details',
            ...SCREEN_OPTIONS,
            tabBarVisible: false,
          }}
        />

        <MainStack.Screen
          name="SearchResultsPage"
          component={SearchScreen}
          options={{
            title: 'Search',
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
    </GenresProvider>
  );
};

export default RootStack;
