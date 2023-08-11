import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Constants from '../constants/constants';
import ProfileScreenStack from './stacks/ProfileStack';
import WatchlistStackNav from './stacks/WatchlistStack';
import HomeStackNav from './stacks/HomeStack';
import DiscoverStackNav from './stacks/DiscoverStack';

const BottomTab = createBottomTabNavigator();

/**
 * @description The bottom navigation bar that links to the main screens of the app
 */
const MainScreensNav = () => (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#979CC3',
        tabBarInactiveTintColor: Constants.SECONDARY_COL,
        tabBarStyle: {
          backgroundColor: Constants.PRIMARY_COL,
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
      <BottomTab.Screen name="HomeBottomTab" component={HomeStackNav} />

      {/* Discover Screen Tab */}
      <BottomTab.Screen name="DiscoverBottomTab" component={DiscoverStackNav} />

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

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
  },
});

export default MainScreensNav;
