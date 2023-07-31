import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SCREEN_OPTIONS from '../components/StackScreenOptions';
import DiscoverScreen from '../../screens/discover/Discover';

/**
 * @description stack navigator for the "Discover" screen
 */
const DiscoverStack = createNativeStackNavigator();
const DiscoverScreenStack = () => {
    return (
        <DiscoverStack.Navigator screenOptions={SCREEN_OPTIONS}>
            <DiscoverStack.Screen
                name="DiscoverPage"
                component={DiscoverScreen}
                options={{
                    title: 'Discover',
                }}
            />
        </DiscoverStack.Navigator>
    );
};

export default DiscoverScreenStack;
