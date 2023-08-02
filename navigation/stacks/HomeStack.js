import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from '../components/StackScreenOptions';

import HomeScreen from '../../screens/home/Home';
import SearchResults from '../../screens/home/SearchRes';

const HomeStack = createNativeStackNavigator();

/**
 * @description stack navigator for the "Home" screen
 */
const HomescreenStack = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Homepage"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
        </HomeStack.Navigator>
    );
};

export default HomescreenStack;
