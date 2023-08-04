import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import GradientText from '../../components/GradientText';
import styles from './LoginStyles';

const LoginScreen = ({ navigation }) => {
  return (
    // hide keyboard when user clicks the screen
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/login-bg.jpg')}
          style={styles.imgbg}
        />
        <StatusBar style="light" />

        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Welcome to</Text>

          <GradientText
            style={styles.appname}
            colors={['#5ab9f1', '#849bef', '#d39ffd']}>
            WatchJourney!
          </GradientText>
        </View>

        {/* sign in area */}
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.contentContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AppScreens')}
              style={styles.loginTextCont}>
              <MaterialIcons name="login" size={24} color="white" />
              <Text style={styles.login}> Login to continue</Text>
            </TouchableOpacity>
            {/* username and password input */}
            <TextInput
              placeholder="Username"
              placeholderTextColor={'#8d8d8d'}
              style={styles.input}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor={'#8d8d8d'}
              secureTextEntry
              style={styles.input}
            />

            {/* login button */}
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate('AppScreens')}>
              <Text style={styles.loginBtnText}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* sign up link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signup}>Don't have an account?</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.signupBtn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
