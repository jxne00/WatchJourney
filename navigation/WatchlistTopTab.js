import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet } from 'react-native';

import Constants from '../constants/constants';

// import screens
import WatchedList from '../screens/watchlist/Watched';
import WatchingNow from '../screens/watchlist/WatchingNow';
import WatchLater from '../screens/watchlist/WatchLater';

const TopTab = createMaterialTopTabNavigator();

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
      tabBarIndicatorStyle: {
        backgroundColor: Constants.PRIMARY_COL,
      },
    }}>
    {/* "Watching now" screen stack */}
    <TopTab.Screen
      name="WatchingTopTab"
      component={WatchingNow}
      options={{
        tabBarLabel: 'Watching Now',
      }}
    />

    {/* "Intend to watch" screen stack */}
    <TopTab.Screen
      name="WatchlaterTopTab"
      component={WatchLater}
      options={{
        tabBarLabel: 'Watch Later',
      }}
    />

    {/* "Watched" screen stack */}
    <TopTab.Screen
      name="WatchedTopTab"
      component={WatchedList}
      options={{
        tabBarLabel: 'Watched',
      }}
    />
  </TopTab.Navigator>
);

/**
 * @description Make the tab navigator start
 * slightly below the top of the screen
 */
const WatchlistMain = () => (
  <View style={styles.container}>
    <View style={styles.header}></View>
    <WatchlistTopTab />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: Constants.PRIMARY_COL,
  },
});

export default WatchlistMain;
