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
import { MaterialIcons } from '@expo/vector-icons';
import { auth, db } from '../../data/Firebase';
import styles from './SignupStyles';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // sign up with firebase auth and firestore
  const handleSignup = () => {
    // check for empty fields
    if (!email || !password || !name) {
      Alert.alert(
        'Oops',
        'Looks like you missed something.\nPlease fill in all fields and try again.',
      );
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        // store into firestore collection
        db.collection('users').doc(user.uid).set({
          name: name,
          avatar: '../../assets/images/profile-avatar.jpeg',
          email: email,
        });

        if (user) {
          console.log('Successful signup of user: ', user.email);
          // clear input fields
          setEmail('');
          setPassword('');
          setName('');
          // navigate back to login page
          navigation.navigate('LoginScreen');
        }
      })
      .catch((error) => {
        // check for existing email error
        if (error.code === 'auth/email-already-in-use')
          alert('Email is already is use.');
        else alert(error.message);
      });
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
              value={name}
              placeholder="Name"
              placeholderTextColor="gray"
              onChangeText={(text) => setName(text)}
              autoFocus={true}
              autoCapitalize={'none'}
              autoCorrect={false}
              autoCompleteType={'off'}
              textContentType={'none'}
            />

            {/* "Email" input box */}
            <TextInput
              style={styles.input}
              value={email}
              placeholder="Email"
              placeholderTextColor="gray"
              onChangeText={(text) => setEmail(text)}
              autoCapitalize={'none'}
              autoCorrect={false}
              autoCompleteType={'off'}
              textContentType={'none'}
            />

            {/* "Password" input box */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                value={password}
                placeholder="Password"
                placeholderTextColor="gray"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={!showPassword}
                textContentType="password"
                autoCapitalize={'none'}
                autoCorrect={false}
                autoCompleteType={'off'}
              />
              <MaterialIcons
                name={showPassword ? 'visibility' : 'visibility-off'}
                size={24}
                color="gray"
                onPress={() => setShowPassword(!showPassword)}
              />
            </View>

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
