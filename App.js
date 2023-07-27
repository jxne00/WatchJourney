import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';

// import constants
import Constants from './Constants/constants';

// import main screens
import HomeScreen from './Screens/Home';
import DiscoverScreen from './Screens/Discover';
import SettingsScreen from './Screens/Settings';
import WatchlistScreen from './Screens/Watchlists';

// bottom tab navigator
const BottomTab = createBottomTabNavigator();

function App() {
    // load fonts from fonts folder
    const [fontsLoaded] = useFonts({
        // src: https://fonts.google.com/specimen/Bangers
        'Bangers-Regular': require('./assets/fonts/Bangers-Regular.ttf'),
        // src: https://fonts.google.com/specimen/Poppins
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                // set options for all tabs
                screenOptions={({ route }) => ({
                    headerShown: true,
                    headerTintColor: Constants.SECONDARY_COL,
                    headerStyle: {
                        backgroundColor: Constants.PRIMARY_COL,
                    },
                    tabBarActiveTintColor: '#979CC3',
                    tabBarInactiveTintColor: Constants.SECONDARY_COL,
                    tabBarStyle: {
                        backgroundColor: Constants.PRIMARY_COL,
                    },
                    tabBarIcon: ({ color, size }) => {
                        let ioniconName;
                        switch (route.name) {
                            case 'Home':
                                ioniconName = 'home';
                                break;
                            case 'Discover':
                                ioniconName = 'compass';
                                break;
                            case 'My Watchlists':
                                ioniconName = 'tv';
                                break;
                            case 'Settings':
                                ioniconName = 'settings';
                                break;
                            default:
                                break;
                        }
                        return (
                            <Ionicons
                                name={ioniconName}
                                color={color}
                                size={size}
                            />
                        );
                    },
                })}>
                {/* Home Screen Tab */}
                <BottomTab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                    }}
                />
                {/* Discover Screen Tab */}
                <BottomTab.Screen
                    name="Discover"
                    component={DiscoverScreen}
                    options={{
                        tabBarLabel: 'Discover',
                    }}
                />
                {/* Watchlist Screen Tab */}
                <BottomTab.Screen
                    name="My Watchlists"
                    component={WatchlistScreen}
                    options={{
                        tabBarLabel: 'Watchlists',
                    }}
                />
                {/* Settings Screen Tab */}
                <BottomTab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Settings',
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

export default App;
