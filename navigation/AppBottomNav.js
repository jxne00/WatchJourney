import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Constants from '../constants/constants';

// import screens and stacks
import DiscoverScreen from '../screens/discover/Discover';
import HomeScreen from '../screens/home/Home';
import ProfileScreenStack from './stacks/ProfileStack';
import WatchlistMain from './WatchlistTopTab';

const BottomTab = createBottomTabNavigator();

/**
 * @description set the icon for each tab of the bottom bar
 */
const setIcon = ({ color, size, routeName }) => {
  let iconName;
  switch (routeName) {
    case 'HomeBottomTab':
      iconName = 'home';
      break;
    case 'DiscoverBottomTab':
      iconName = 'auto-awesome';
      break;
    case 'WatchlistBottomTab':
      iconName = 'format-list-bulleted';
      break;
    case 'ProfileBottomTab':
      iconName = 'account-circle';
      break;
    default:
      break;
  }
  return <MaterialIcons name={iconName} color={color} size={size} />;
};

/**
 * @description set the text label for each tab of the bottom bar
 */
const setLabel = ({ color, routeName }) => {
  let labelName;
  switch (routeName) {
    case 'HomeBottomTab':
      labelName = 'Home';
      break;
    case 'DiscoverBottomTab':
      labelName = 'Discover';
      break;
    case 'WatchlistBottomTab':
      labelName = 'Watchlist';
      break;
    case 'ProfileBottomTab':
      labelName = 'Profile';
      break;
    default:
      break;
  }
  return <Text style={[{ color: color }, styles.labelStyle]}>{labelName}</Text>;
};

/**
 * @description The bottom navigation bar that links to
 * the main screens of the app
 */
const MainScreensNav = () => (
  <BottomTab.Navigator
    // set options for all tabs
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#979CC3',
      tabBarInactiveTintColor: Constants.SECONDARY_COL,
      tabBarStyle: {
        backgroundColor: Constants.PRIMARY_COL,
        paddingTop: 5,
      },
      tabBarIcon: ({ color, size }) =>
        setIcon({ color, size, routeName: route.name }),
      tabBarLabel: ({ color }) => setLabel({ color, routeName: route.name }),
    })}>
    {/* Home Screen Tab */}
    <BottomTab.Screen name="HomeBottomTab" component={HomeScreen} />

    {/* Discover Screen Tab */}
    <BottomTab.Screen name="DiscoverBottomTab" component={DiscoverScreen} />

    {/* Watchlist Screen Tab */}
    <BottomTab.Screen name="WatchlistBottomTab" component={WatchlistMain} />

    {/* Settings Screen Tab */}
    <BottomTab.Screen name="ProfileBottomTab" component={ProfileScreenStack} />
  </BottomTab.Navigator>
);

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
  },
});

export default MainScreensNav;
