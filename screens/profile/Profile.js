import React from 'react';
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
} from '../../components/AsyncActions';
import Constants from '../../constants/constants';
import styles from './ProfileStyle';

const ProfileScreen = ({ navigation }) => {
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
          <Text style={styles.profileName}>Demo</Text>
          <Text style={styles.profileUsername}>@kayatoast1234</Text>
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
          onPress={() =>
            // show confirmation alert when sign out button is pressed
            Alert.alert('Confirmation', 'Are you sure you want to sign out?', [
              {
                // back to settings screen if "Cancel" pressed
                text: 'Cancel',
                onPress: () => '',
                style: 'cancel',
              },
              {
                // go to login screen if "Yes" pressed
                text: 'Yes',
                onPress: () => navigation.navigate('Login'),
              },
            ])
          }
          colors={[Constants.PRIMARY_COL, Constants.PRIMARY_COL]}>
          <Text style={styles.SignoutBtnText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
