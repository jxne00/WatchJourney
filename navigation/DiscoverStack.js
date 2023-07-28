import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from './StackScreenOptions';

import DiscoverScreen from '../screens/Discover';

const DiscoverStack = createNativeStackNavigator();

// Discover screen stack navigation
const DiscoverScreenStack = () => {
    return (
        <DiscoverStack.Navigator screenOptions={SCREEN_OPTIONS}>
            <DiscoverStack.Screen
                name="Discover Page"
                component={DiscoverScreen}
            />
        </DiscoverStack.Navigator>
    );
};

export default DiscoverScreenStack;
