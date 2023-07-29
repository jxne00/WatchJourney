import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WatchlistScreen from '../../screens/watchlist/Watchlists';
import ShowDetails from '../../screens/watchlist/ShowDetails';

/**
 * @description stack navigator for the "Watchlist" screen
 */
const Stack = createNativeStackNavigator();
const WatchlistStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyWatchlist" component={WatchlistScreen} />
        <Stack.Screen name="Details" component={ShowDetails} />
    </Stack.Navigator>
);

export default WatchlistStack;
