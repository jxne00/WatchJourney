import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_OPTIONS from '../components/StackScreenOptions';

import LoginScreen from '../../screens/login/Login';
import SignupScreen from '../../screens/login/Signup';

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
                options={{ ...SCREEN_OPTIONS, title: 'Sign Up' }}
            />
        </Stack.Navigator>
    );
};

export default LoginStack;
