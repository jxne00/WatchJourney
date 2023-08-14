import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from './StackScreenOptions';
import HomeScreen from '../../screens/home/Home';
import ShowDetails from '../../components/showDetails';
import SearchScreen from '../../screens/home/Search';

const HomeStack = createNativeStackNavigator();

const HomeStackNav = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="ShowDetailsPage"
      component={ShowDetails}
      options={{
        title: 'Details',
        ...SCREEN_OPTIONS,
      }}
    />
    <HomeStack.Screen
      name="SearchResultsPage"
      component={SearchScreen}
      options={{
        title: 'Search',
        ...SCREEN_OPTIONS,
      }}
    />
  </HomeStack.Navigator>
);

export default HomeStackNav;
