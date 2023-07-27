import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// import main screens
import HomeScreen from './Screens/Home';
import DiscoverScreen from './Screens/Discover';
import SettingsScreen from './Screens/Settings';
import WatchlistScreen from './Screens/Watchlists';

// bottom tab navigator
const BottomTab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: true,
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
