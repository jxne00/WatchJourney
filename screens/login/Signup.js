import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

// import stylesheets
import styles from './SignupStyles';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /**
   * @description handles what happens when "Sign up" button is pressed
   */
  const handleSignup = () => {
    Alert.alert('Notice', 'This function has not been implemented yet.', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      // navigate back to login when "Sign up" is pressed
      { text: 'OK', onPress: () => navigation.navigate('LoginScreen') },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView behavior="padding">
        <ScrollView style={styles.scrollview}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Create Account</Text>
            {/* "Name" input box */}
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="gray"
              value={name}
              onChangeText={(text) => setName(text)}
              autoFocus={true}
              autoCompleteType={'off'}
              textContentType={'none'}
            />

            {/* "Username" input box */}
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="gray"
              value={username}
              onChangeText={(text) => setUsername(text)}
              // no auto complete
              autoCompleteType={'off'}
              textContentType={'none'}
            />

            {/* "Password" input box */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="gray"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              textContentType="password"
              autoCompleteType={'off'}
            />

            {/* "Sign up" button */}
            <TouchableOpacity style={styles.signUpBtn} onPress={handleSignup}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupScreen;
