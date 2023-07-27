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
            <BottomTab.Navigator screenOptions={{ headerShown: false }}>
                {/* Home Screen Tab */}
                <BottomTab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        // use Ionicon's home icon
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" color={color} size={size} />
                        ),
                    }}
                />
                {/* Discover Screen Tab */}
                <BottomTab.Screen
                    name="Discover"
                    component={DiscoverScreen}
                    options={{
                        tabBarLabel: 'Discover',
                        // use Ionicon's settings icon
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="compass"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                {/* Watchlist Screen Tab */}
                <BottomTab.Screen
                    name="MyLists"
                    component={WatchlistScreen}
                    options={{
                        tabBarLabel: 'Watchlists',
                        // use Ionicon's settings icon
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="tv" color={color} size={size} />
                        ),
                    }}
                />
                {/* Settings Screen Tab */}
                <BottomTab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Settings',
                        // use Ionicon's settings icon
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="settings"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

export default App;
