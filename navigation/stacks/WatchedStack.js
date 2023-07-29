import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WatchedList from '../../screens/watchlist/Watched';
import ShowDetails from '../../screens/watchlist/ShowDetails';

/**
 * @description stack navigator for the "Watched" screen
 */
const Stack = createNativeStackNavigator();

const WatchedStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Watched" component={WatchedList} />
        <Stack.Screen name="Details" component={ShowDetails} />
    </Stack.Navigator>
);

export default WatchedStack;
