import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import { auth } from '../../data/Firebase';
import styles from './LoginStyles';

const LoginScreen = ({ navigation }) => {
  const [logoLoaded, setLogoLoaded] = useState(false);
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
          setShowPassword(false);
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
      <LinearGradient
        // linear gradient background
        colors={['rgb(220, 60, 130)', 'rgb(130, 160, 245)']}
        style={styles.background}
        start={{ x: 0.7, y: 0 }}
      />

      <KeyboardAvoidingView behavior="padding">
        <StatusBar style="light" />

        {!logoLoaded && <ActivityIndicator size="large" color="white" />}

        {/* app logo */}
        <Image
          source={require('../../assets/images/app-icon.png')}
          style={styles.appicon}
          onLoad={() => setLogoLoaded(true)}
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

            {/* icon to show/hide password input text */}
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
