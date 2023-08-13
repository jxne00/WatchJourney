import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { auth } from '../../data/Firebase';
import styles from './LoginStyles';

/**
 * @description Login page to login with email and password.
 * credentils you can use:
 * email: user@demo.com
 * password: demopass
 */
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  /**
   * @description handles login using firebase auth.
   */
  const handleLogin = () => {
    // check for empty fields
    if (!email || !password) {
      Alert.alert(
        'Oops',
        'Looks like you missed something.\nPlease fill in all fields and try again.',
      );
      return;
    }

    // sign in using firebase auth
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        if (user) {
          console.log('User ', user.email, ' logged in successfully.');
          // clear input fields
          setEmail('');
          setPassword('');
          // navigate to main screens
          navigation.navigate('AppScreens');
        }
      })
      .catch((error) => {
        const code = error.code;
        // show alert if login details are invalid.
        if (code === 'auth/invalid-email' || code === 'auth/user-not-found')
          Alert.alert(
            'Try again',
            'User does not exist. Please enter a valid email and password.',
          );
        else if (code === 'auth/wrong-password')
          Alert.alert(
            'Try again',
            'Incorrect password. Please enter a valid email and password.',
          );
        else alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/login-bg.jpg')}
        style={styles.imgbg}
      />
      <KeyboardAvoidingView behavior="padding">
        <StatusBar style="light" />
        <Image
          source={require('../../assets/images/app-icon.png')}
          style={styles.appicon}
        />

        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.loginTextCont}>
            <MaterialIcons name="login" size={24} color="white" />
            <Text style={styles.login}> Login to continue</Text>
          </TouchableOpacity>

          {/* email and password input */}
          <TextInput
            value={email}
            placeholder="Email"
            placeholderTextColor={'#8d8d8d'}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            autoCapitalize={'none'}
            autoCorrect={false}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              value={password}
              placeholder="Password"
              placeholderTextColor={'#8d8d8d'}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
            />
            <MaterialIcons
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={24}
              color="gray"
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>

          {/* login button */}
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* sign up link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signup}>Don't have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.signupBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
