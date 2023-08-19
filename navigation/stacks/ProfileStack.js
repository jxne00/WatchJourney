import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from './StackScreenOptions';
import ProfileScreen from '../../screens/profile/Profile';
import FaqScreen from '../../screens/profile/Faq';

const ProfileStack = createNativeStackNavigator();

/**
 * @description stack navigator containing profile and faq screen
 */
const ProfileScreenStack = () => (
  <ProfileStack.Navigator
    screenOptions={SCREEN_OPTIONS}
    initialRouteName="ProfilePage">
    <ProfileStack.Screen
      name="ProfilePage"
      component={ProfileScreen}
      options={{
        title: 'Profile',
      }}
    />
    <ProfileStack.Screen
      name="FaqPage"
      component={FaqScreen}
      options={{
        title: 'FAQ',
      }}
    />
  </ProfileStack.Navigator>
);

export default ProfileScreenStack;
