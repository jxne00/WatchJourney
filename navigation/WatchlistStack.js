import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// constant variables and screen options
import Constants from '../constants/constants';
import SCREEN_OPTIONS from './StackScreenOptions';

// import screens
import WatchlistScreen from '../screens/Watchlists';
import WatchedList from '../screens/watchlist/Watched';
import IntendToWatch from '../screens/watchlist/IntendToWatch';
import WatchingNow from '../screens/watchlist/WatchingNow';
import ShowDetails from '../screens/watchlist/ShowDetails';

// stacks for each list
const MyListsStack = createNativeStackNavigator();
const WatchedStack = createNativeStackNavigator();
const IntendToWatchStack = createNativeStackNavigator();
const WatchingNowStack = createNativeStackNavigator();

// stack for "My Watchlists" screen
const MyListStack = () => {
    return (
        <MyListsStack.Navigator screenOptions={{ headerShown: false }}>
            <MyListsStack.Screen
                name="MyWatchlist"
                component={WatchlistScreen}
            />
            <MyListsStack.Screen name="Details" component={ShowDetails} />
        </MyListsStack.Navigator>
    );
};

// stack for "Watched" list
const WatchedListStack = () => {
    return (
        <WatchedStack.Navigator screenOptions={{ headerShown: false }}>
            <WatchedStack.Screen name="Watched" component={WatchedList} />
            <WatchedStack.Screen name="Details" component={ShowDetails} />
        </WatchedStack.Navigator>
    );
};

// stack for "Intend to Watch" list
const IntendToWatchListStack = () => {
    return (
        <IntendToWatchStack.Navigator screenOptions={{ headerShown: false }}>
            <IntendToWatchStack.Screen
                name="Intend to Watch"
                component={IntendToWatch}
            />
            <WatchedStack.Screen name="Details" component={ShowDetails} />
        </IntendToWatchStack.Navigator>
    );
};

// stack for "Watching Now" list
const WatchingNowListStack = () => {
    return (
        <WatchingNowStack.Navigator screenOptions={{ headerShown: false }}>
            <WatchingNowStack.Screen
                name="Intend to Watch"
                component={WatchingNow}
            />
            <WatchedStack.Screen name="Details" component={ShowDetails} />
        </WatchingNowStack.Navigator>
    );
};

// top tab navigator for all lists
const MylistTopTab = createMaterialTopTabNavigator();

// Top tab navigator for all list stacks
const MylistsTopTabs = () => {
    return (
        <MylistTopTab.Navigator
            initialRouteName="Lists"
            screenOptions={{
                tabBarActiveTintColor: Constants.PRIMARY_COL,
                inactiveTintColor: '#000',
                labelStyle: {
                    fontFamily: Constants.POPPINS_REGULAR_FONT,
                    fontSize: 12,
                },
                swipeEnabled: true,
            }}>
            <MylistTopTab.Screen
                name="Lists"
                component={MyListStack}
                options={{ tabBarLabel: 'My Watchlists' }}
            />
            <MylistTopTab.Screen
                name="Watching Now"
                component={WatchingNowListStack}
            />
            <MylistTopTab.Screen
                name="Intend to Watch"
                component={IntendToWatchListStack}
            />
            <MylistTopTab.Screen name="Watched" component={WatchedListStack} />
        </MylistTopTab.Navigator>
    );
};

// main stack for all lists
const MyListStackMain = createNativeStackNavigator();

// main stack for all lists
const WatchlistScreenStack = () => {
    return (
        <MyListStackMain.Navigator screenOptions={SCREEN_OPTIONS}>
            <MyListStackMain.Screen
                name="MyWatchlists"
                component={MylistsTopTabs}
            />
        </MyListStackMain.Navigator>
    );
};

export default WatchlistScreenStack;
