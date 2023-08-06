import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from './StackScreenOptions';
import ProfileScreen from '../../screens/profile/Profile';
import FaqScreen from '../../screens/profile/Faq';

/**
 * @description stack navigator for the "Settings" screen
 */
const ProfileStack = createNativeStackNavigator();
const ProfileScreenStack = () => {
  return (
    <ProfileStack.Navigator screenOptions={SCREEN_OPTIONS}>
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
};

export default ProfileScreenStack;
