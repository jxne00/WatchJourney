import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

// import constants
import Constants from '../constants/constants';

// import screen stacks
import HomescreenStack from './stacks/HomeStack';
import DiscoverScreenStack from './stacks/DiscoverStack';
import ProfileScreenStack from './stacks/ProfileStack';
import WatchlistMain from './WatchlistTopTab';

const BottomTab = createBottomTabNavigator();

/**
 * @description Sets the icon for each tab of
 * the bottom navigation bar
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
 * @description Sets the text label for each tab of
 * the bottom navigation bar
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
    return (
        <Text style={[{ color: color }, styles.labelStyle]}>{labelName}</Text>
    );
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
            tabBarLabel: ({ color }) =>
                setLabel({ color, routeName: route.name }),
        })}>
        {/* Home Screen Tab */}
        <BottomTab.Screen name="HomeBottomTab" component={HomescreenStack} />
        {/* Discover Screen Tab */}
        <BottomTab.Screen
            name="DiscoverBottomTab"
            component={DiscoverScreenStack}
        />
        {/* Watchlist Screen Tab */}
        <BottomTab.Screen name="WatchlistBottomTab" component={WatchlistMain} />
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
