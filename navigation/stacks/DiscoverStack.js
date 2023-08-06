import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from './StackScreenOptions';

import DiscoverScreen from '../../screens/discover/Discover';
import ShowDetails from '../../components/showDetails';

const DiscoverStack = createNativeStackNavigator();

const DiscoverStackNav = () => (
  <DiscoverStack.Navigator>
    <DiscoverStack.Screen
      name="Discover"
      component={DiscoverScreen}
      options={{ headerShown: false }}
    />
    <DiscoverStack.Screen
      name="ShowDetailsPage"
      component={ShowDetails}
      options={{
        title: 'Details',
        ...SCREEN_OPTIONS,
      }}
    />
  </DiscoverStack.Navigator>
);

export default DiscoverStackNav;
