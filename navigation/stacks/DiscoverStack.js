import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SCREEN_OPTIONS from '../components/StackScreenOptions';
import DiscoverScreen from '../../screens/discover/Discover';
import MovieListView from '../../components/MovieListview';
import TvListView from '../../components/TvListView';

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
            <DiscoverStack.Screen
                name="MovieListViewPage"
                component={MovieListView}
                options={{
                    title: 'Discover',
                }}
            />
            <DiscoverStack.Screen
                name="TvListViewPage"
                component={TvListView}
                options={{
                    title: 'Discover',
                }}
            />
        </DiscoverStack.Navigator>
    );
};

export default DiscoverScreenStack;
