import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from '../components/StackScreenOptions';

import HomeScreen from '../../screens/home/Home';

const HomeStack = createNativeStackNavigator();

/**
 * @description stack navigator for the "Home" screen
 */
const HomescreenStack = () => {
    return (
        <HomeStack.Navigator screenOptions={SCREEN_OPTIONS}>
            <HomeStack.Screen
                name="Homepage"
                component={HomeScreen}
                options={{
                    title: 'Home',
                }}
            />
        </HomeStack.Navigator>
    );
};

export default HomescreenStack;
