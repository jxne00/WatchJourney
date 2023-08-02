import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from '../components/StackScreenOptions';

import LoginScreen from '../../screens/login/Login';
import SignupScreen from '../../screens/login/Signup';
import Constants from '../../constants/constants';

const Stack = createNativeStackNavigator();

/**
 * @description stack navigator for the "Home" screen
 */
const LoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignupScreen}
                options={{
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTitle: '',
                    headerTintColor: Constants.PRIMARY_COL,
                }}
            />
        </Stack.Navigator>
    );
};

export default LoginStack;
