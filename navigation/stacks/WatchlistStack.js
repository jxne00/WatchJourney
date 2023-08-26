import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet } from 'react-native';

import { ThemeContext } from '../../data/ThemeContext';
import Constants from '../../constants/constants';
import setColor from '../../constants/colors';
import WatchlistScreen from '../../screens/watchlist/Watchlist';

const TopTab = createMaterialTopTabNavigator();
const WatchlistStack = createNativeStackNavigator();

/**
 * @description Top tab navigator for "watchlist" screen.
 */
const WatchlistTopTab = () => (
  <TopTab.Navigator
    initialRouteName="WatchingTopTab"
    // options to use for all tabs
    screenOptions={{
      tabBarActiveTintColor: Constants.PRIMARY_COL,
      tabBarLabelStyle: {
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        fontSize: 12,
      },
      tabBarStyle: {
        backgroundColor: Constants.SECONDARY_COL,
        height: 50,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: Constants.PRIMARY_COL,
      },
      tabBarIndicatorStyle: {
        backgroundColor: Constants.PRIMARY_COL,
      },
    }}>
    {/* "Watching now" screen stack */}
    <TopTab.Screen
      name="WatchingTopTab"
      component={WatchlistScreen}
      options={{
        tabBarLabel: 'Watching Now',
      }}
      initialParams={{ tabType: 'Watching Now' }}
    />

    {/* "Intend to watch" screen stack */}
    <TopTab.Screen
      name="WatchlaterTopTab"
      component={WatchlistScreen}
      options={{
        tabBarLabel: 'Watch Later',
      }}
      initialParams={{ tabType: 'Watch Later' }}
    />

    {/* "Watched" screen stack */}
    <TopTab.Screen
      name="WatchedTopTab"
      component={WatchlistScreen}
      options={{
        tabBarLabel: 'Watched',
      }}
      initialParams={{ tabType: 'Watched' }}
    />
  </TopTab.Navigator>
);

// let tabs start slightly below the top of the screen
const WatchlistMain = () => {
  const { theme } = useContext(ThemeContext);
  const { PRIMARY_COL } = setColor(theme);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      height: 50,
      backgroundColor: PRIMARY_COL,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <WatchlistTopTab />
    </View>
  );
};

/**
 * @description stack navigator for watchlist screen.
 */
const WatchlistStackNav = () => (
  <WatchlistStack.Navigator>
    <WatchlistStack.Screen
      name="WatchlistMain"
      component={WatchlistMain}
      options={{
        headerShown: false,
      }}
    />
  </WatchlistStack.Navigator>
);

export default WatchlistStackNav;
