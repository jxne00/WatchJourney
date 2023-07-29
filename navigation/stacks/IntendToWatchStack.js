import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntendToWatch from '../../screens/watchlist/IntendToWatch';
import ShowDetails from '../../screens/watchlist/ShowDetails';

/**
 * @description stack navigator for the "Intend to watch" screen
 */
const Stack = createNativeStackNavigator();

const IntendToWatchStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intend to Watch" component={IntendToWatch} />
        <Stack.Screen name="Details" component={ShowDetails} />
    </Stack.Navigator>
);

export default IntendToWatchStack;
