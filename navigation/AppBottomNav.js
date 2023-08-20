import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Constants from '../constants/constants';
import { ThemeContext } from '../data/ThemeContext';
import setColor from '../constants/colors';
import ProfileScreenStack from './stacks/ProfileStack';
import WatchlistStackNav from './stacks/WatchlistStack';
import DiscoverScreen from '../screens/discover/Discover';
import HomeScreen from '../screens/home/Home';

const BottomTab = createBottomTabNavigator();

/**
 * @description bottom navigation bar that links to the main screens of the app.
 */
const MainScreensNav = () => {
  const { theme } = useContext(ThemeContext);
  const { PRIMARY_COL, SECONDARY_COL } = setColor(theme);

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#979CC3',
        tabBarInactiveTintColor: theme === 'light' ? SECONDARY_COL : '#e0e0e0',
        tabBarStyle: {
          display: route.name === 'ShowDetailsPage' ? 'none' : 'flex',
          backgroundColor: theme === 'light' ? PRIMARY_COL : '#400142',
          paddingTop: 5,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
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
        },
        tabBarLabel: ({ color }) => {
          let labelName;
          switch (route.name) {
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
          return (
            <Text style={[{ color: color }, styles.labelStyle]}>
              {labelName}
            </Text>
          );
        },
      })}>
      {/* Home Screen Tab */}
      <BottomTab.Screen name="HomeBottomTab" component={HomeScreen} />

      {/* Discover Screen Tab */}
      <BottomTab.Screen name="DiscoverBottomTab" component={DiscoverScreen} />

      {/* Watchlist Screen Tab */}
      <BottomTab.Screen
        name="WatchlistBottomTab"
        component={WatchlistStackNav}
      />

      {/* Settings Screen Tab */}
      <BottomTab.Screen
        name="ProfileBottomTab"
        component={ProfileScreenStack}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
  },
});

export default MainScreensNav;
