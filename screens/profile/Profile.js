import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  Alert,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  clearAsyncStorage,
  printAllAsyncContent,
} from '../../data/AsyncActions';
import { auth, db } from '../../data/Firebase';
import Constants from '../../constants/constants';
import styles from './ProfileStyle';

const ProfileScreen = ({ navigation }) => {
  const [loggedinUser, setLoggedinUser] = useState('');

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      const userRef = db.collection('users').doc(currentUser.uid);
      userRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            setLoggedinUser(doc.data());
          } else {
            console.log('No such document!');
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error);
        });
    }
  }, []);

  // confirms if user wants to clear async storage
  const confirmAsyncClear = () => {
    Alert.alert(
      'Confirmation',
      'This will clear all contents stored in async storage. Do you want to proceed?',
      [
        {
          // dont clear if "Cancel" pressed
          text: 'Cancel',
          onPress: () => '',
          style: 'cancel',
        },
        {
          // clear if "Yes" pressed
          text: 'Yes',
          onPress: () => clearAsyncStorage(),
        },
      ],
    );
  };

  // signout user
  const handleSignout = () => {
    auth
      .signOut()
      .then(() => {
        console.log('User signed out successfully.');
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
      <View style={styles.profile}>
        <Image
          source={require('../../assets/images/profile-avatar.jpeg')}
          style={styles.profileAvatar}
        />
        <View style={styles.profileTexts}>
          <Text style={styles.profileName}>{loggedinUser.name}</Text>
          <Text style={styles.profileUsername}>{loggedinUser.email}</Text>
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
        <TouchableOpacity style={styles.optionBtn} onPress={confirmAsyncClear}>
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
        <TouchableOpacity
          style={styles.signoutBtn}
          onPress={handleSignout}
          colors={[Constants.PRIMARY_COL, Constants.PRIMARY_COL]}>
          <Text style={styles.SignoutBtnText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
