import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
} from 'react-native';
import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  interpolate,
} from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';

import {
  clearAsyncStorage,
  printAllAsyncContent,
} from '../../data/AsyncActions';
import { auth, db } from '../../data/Firebase';
import ProfileStyles from './ProfileStyle';
import { ThemeContext } from '../../data/ThemeContext';

const ProfileScreen = ({ navigation }) => {
  const styles = ProfileStyles();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [loggedinUser, setLoggedinUser] = useState('');
  const [detailsLoaded, setDetailsLoaded] = useState(false);
  const rotate = useSharedValue(0); // for rotation animation

  // get details of logged in user from firestore
  useEffect(() => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      const userRef = db.collection('users').doc(currentUser.uid);

      userRef
        .get()
        .then((doc) => {
          if (doc.exists) setLoggedinUser(doc.data());
        })
        .then(() => setDetailsLoaded(true))
        .catch((err) => {
          console.log('Error getting document:', err);
        });
    }
  }, []);

  // animation style object for profile card
  const animationStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      rotate.value, // input value
      [0, 360, 1080], // input range
      [1, 0.5, 1], // output range (scale to 0.5 and back)
    );

    return {
      // rotate along z-axis
      transform: [{ rotateZ: `${rotate.value}deg` }, { scale }],
    };
  });

  const rotationAnimation = () => {
    // rotate 360deg for 0.5s, then 1080deg for 0.5s
    rotate.value = withSequence(
      withTiming(360, { duration: 500, easing: Easing.inOut(Easing.ease) }),
      withTiming(1080, { duration: 500, easing: Easing.inOut(Easing.ease) }),
    );
  };

  // signout user
  const handleSignout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate('LoginScreen');
      })
      .catch((error) => {
        console.log('Error signing out: ', error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      {/* profile card */}
      <TouchableOpacity onPress={rotationAnimation}>
        <Animated.View style={[styles.profile, animationStyle]}>
          <Image
            source={require('../../assets/images/profile-avatar.jpeg')}
            style={styles.profileAvatar}
          />

          <View style={styles.profileTexts}>
            {/* show loading indicator if details not loaded */}
            {!detailsLoaded && (
              <ActivityIndicator
                size="small"
                color={theme === 'light' ? '#74369D' : '#D7DCEA'}
              />
            )}
            <Text style={styles.profileName}>{loggedinUser.name}</Text>
            <Text style={styles.profileUsername}>{loggedinUser.email}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>

      {/* switch to toggle theme */}
      <View style={styles.darkModeContainer}>
        <View>
          <Text style={styles.darkmodeText}>Dark mode</Text>
        </View>

        <View style={styles.themeSwitch}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={theme === 'light' ? '#f4f3f4' : '#000'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={theme === 'dark'}
          />
        </View>
      </View>

      {/* FAQ button - navigate to FAQ page when clicked */}
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={styles.optionBtn}
          onPress={() => navigation.navigate('FaqPage')}>
          <View>
            <Text style={styles.optionText}>FAQ</Text>
            <Text style={styles.optionDesc}>
              Frequently asked questions about the app.
            </Text>
          </View>

          <MaterialIcons name="arrow-forward-ios" size={22} color="#616162" />
        </TouchableOpacity>
      </View>

      {/* print all contents of async storage */}
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={styles.optionBtn}
          onPress={printAllAsyncContent}>
          <View>
            <Text style={styles.optionText}>Print stored async content</Text>
            <Text style={styles.optionDesc}>
              Prints all async storage stored content into the console.
            </Text>
          </View>

          <MaterialIcons name="arrow-forward-ios" size={22} color="#616162" />
        </TouchableOpacity>
      </View>

      {/* clear all contents of async storage */}
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionBtn} onPress={clearAsyncStorage}>
          <View>
            <Text style={styles.optionText}>Clear async storage</Text>
            <Text style={styles.optionDesc}>
              Clears all contents currenty stored in async storage.
            </Text>
          </View>

          <MaterialIcons name="arrow-forward-ios" size={22} color="#616162" />
        </TouchableOpacity>
      </View>

      <View style={styles.signout}>
        <TouchableOpacity style={styles.signoutBtn} onPress={handleSignout}>
          <Text style={styles.SignoutBtnText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
