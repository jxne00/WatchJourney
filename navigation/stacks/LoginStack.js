import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/login/Login';
import SignupScreen from '../../screens/login/Signup';
import Constants from '../../constants/constants';

const Stack = createNativeStackNavigator();

/**
 * @description stack navigator containing login and signup screen
 */
const LoginStack = () => (
  <Stack.Navigator initialRouteName="LoginScreen">
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

export default LoginStack;
