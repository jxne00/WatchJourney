import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from './StackScreenOptions';

import SettingsScreen from '../screens/Settings';

const SettingsStack = createNativeStackNavigator();

// Setting screen stack navigation
const SettingsScreenStack = () => {
    return (
        <SettingsStack.Navigator screenOptions={SCREEN_OPTIONS}>
            <SettingsStack.Screen
                name="App Settings"
                component={SettingsScreen}
            />
        </SettingsStack.Navigator>
    );
};

export default SettingsScreenStack;
