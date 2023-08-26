import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOptions from './StackScreenOptions';
import ProfileScreen from '../../screens/profile/Profile';
import FaqScreen from '../../screens/profile/Faq';

const ProfileStack = createNativeStackNavigator();

/**
 * @description stack navigator containing profile and faq screen
 */
const ProfileScreenStack = () => {
  const SCREEN_OPTIONS = ScreenOptions();

  return (
    <ProfileStack.Navigator
      screenOptions={SCREEN_OPTIONS}
      initialRouteName="ProfilePage">
      {/* profile screen */}
      <ProfileStack.Screen
        name="ProfilePage"
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />

      {/* FAQ screen */}
      <ProfileStack.Screen
        name="FaqPage"
        component={FaqScreen}
        options={{
          title: 'FAQ',
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileScreenStack;
