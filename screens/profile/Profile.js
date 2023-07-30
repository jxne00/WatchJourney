import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    Alert,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

import Constants from '../../constants/constants';
import styles from './styles/ProfileStyle';

const SettingsScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.profile}>
                <Image
                    source={require('../../assets/images/profile-avatar.jpeg')}
                    style={styles.profileAvatar}
                />
                <View style={styles.profileTexts}>
                    <Text style={styles.profileName}>June</Text>
                    <Text style={styles.profileUsername}>@kayatoast1234</Text>
                </View>
            </View>

            <View style={styles.signout}>
                <TouchableOpacity
                    style={styles.signoutBtn}
                    onPress={() =>
                        // show confirmation alert when button is pressed
                        Alert.alert(
                            'Confirmation',
                            'Are you sure you want to sign out?',
                            [
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
                            ],
                        )
                    }
                    colors={[Constants.PRIMARY_COL, Constants.PRIMARY_COL]}>
                    <Text style={styles.SignoutBtnText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SettingsScreen;
