import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WatchedList from '../../screens/watchlist/Watched';
import WatchingNow from '../../screens/watchlist/WatchingNow';
import WatchLater from '../../screens/watchlist/WatchLater';

const WatchedStackNav = createNativeStackNavigator();
const WatchingStackNav = createNativeStackNavigator();
const IntendStackNav = createNativeStackNavigator();

/**
 * @description stack navigator for the "Watched" screen
 */
const WatchedStack = () => (
    <WatchedStackNav.Navigator>
        <WatchedStackNav.Screen
            name="Watched"
            component={WatchedList}
            options={{ headerShown: false }}
        />
    </WatchedStackNav.Navigator>
);

/**
 * @description stack navigator for the "Watching Now" screen
 */
const WatchingNowStack = () => {
    return (
        <WatchingStackNav.Navigator screenOptions={{ headerShown: false }}>
            <WatchingStackNav.Screen
                name="WatchingNow"
                component={WatchingNow}
            />
        </WatchingStackNav.Navigator>
    );
};

/**
 * @description stack navigator for the "Intend to watch" screen
 */
const WatchLaterStack = () => (
    <IntendStackNav.Navigator screenOptions={{ headerShown: false }}>
        <IntendStackNav.Screen name="WatchLater" component={WatchLater} />
    </IntendStackNav.Navigator>
);

export { WatchedStack, WatchingNowStack, WatchLaterStack };
