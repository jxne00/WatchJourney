import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WatchingNow from '../../screens/watchlist/WatchingNow';
import ShowDetails from '../../screens/watchlist/ShowDetails';

const Stack = createNativeStackNavigator();

const WatchingNowStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WatchingNow" component={WatchingNow} />
            <Stack.Screen name="Details" component={ShowDetails} />
        </Stack.Navigator>
    );
};

export default WatchingNowStack;
