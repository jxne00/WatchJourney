import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from '../components/StackScreenOptions';

// import screens
import SettingsScreen from '../../screens/settings/Settings';
import FaqScreen from '../../screens/settings/CategoryOptions/Faq';

/**
 * @description stack navigator for the "Settings" screen
 */
const SettingsStack = createNativeStackNavigator();
const SettingsScreenStack = () => {
    return (
        <SettingsStack.Navigator screenOptions={SCREEN_OPTIONS}>
            <SettingsStack.Screen
                name="SettingsPage"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                }}
            />
            <SettingsStack.Screen
                name="FaqPage"
                component={FaqScreen}
                options={{
                    title: 'FAQ',
                }}
            />
        </SettingsStack.Navigator>
    );
};

export default SettingsScreenStack;
