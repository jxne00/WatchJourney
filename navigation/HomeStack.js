import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from './StackScreenOptions';

import HomeScreen from '../screens/Home';

const HomeStack = createNativeStackNavigator();

// Homescreen stack navigation
const HomescreenStack = () => {
    return (
        <HomeStack.Navigator screenOptions={SCREEN_OPTIONS}>
            <HomeStack.Screen name="Homepage" component={HomeScreen} />
        </HomeStack.Navigator>
    );
};

export default HomescreenStack;
