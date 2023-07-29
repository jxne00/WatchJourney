import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Alert,
    ScrollView,
    Image,
    TouchableOpacity,
    Switch,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import Constants from '../../constants/constants';
import CustomBtn from '../../components/CustomBtn';

import OPTIONS from '../../data/SettingsOptions';

// renders a row within a category section
const CategoryOptionCell = ({
    item,
    toggleState,
    setToggleState,
    navigation,
}) => {
    const handleSwitchChange = useCallback(
        (value) => {
            setToggleState((prevToggleState) => ({
                ...prevToggleState,
                [item.id]: value,
            }));
        },
        [setToggleState, item.id],
    );

    return (
        <View style={styles.OptionCellContainer}>
            <TouchableOpacity
                onPress={() => {
                    if (item.id === 'faq') {
                        // go to the FAQ screen if "FAQ" option pressed
                        navigation.navigate('FaqPage');
                    } else {
                        console.log(item.label, 'Pressed');
                    }
                }}>
                <View style={styles.row}>
                    <MaterialIcons
                        color="#4b4b4b"
                        name={item.icon}
                        style={styles.rowIcon}
                        size={22}
                    />
                    {/* Name of the option */}
                    <Text style={styles.rowLabel}>{item.label}</Text>
                    <View style={styles.rowSpacer} />

                    {/* add text if item type is 'select' */}
                    {item.type === 'select' && (
                        <Text style={styles.rowValue}>
                            {toggleState[item.id]}
                        </Text>
                    )}

                    {/* add a '>' if item type is 'more' or 'select' */}
                    {(item.type === 'select' || item.type === 'more') && (
                        <MaterialIcons
                            color="#ababab"
                            name="chevron-right"
                            size={22}
                        />
                    )}

                    {/* add a switch component if item type is 'toggle' */}
                    {item.type === 'toggle' && (
                        <Switch
                            value={toggleState[item.id]}
                            onValueChange={handleSwitchChange}
                        />
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

// renders a category section
const CategoryCell = ({
    category,
    toggleState,
    setToggleState,
    navigation,
}) => {
    return (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.categoryNameText}>{category.name}</Text>
            </View>
            <View style={styles.sectionBody}>
                {category.items.map((item) => (
                    <CategoryOptionCell
                        key={item.id}
                        item={item}
                        toggleState={toggleState}
                        setToggleState={setToggleState}
                        navigation={navigation}
                    />
                ))}
            </View>
        </View>
    );
};

const SettingsScreen = ({ navigation }) => {
    // set the initial states
    const [toggleState, setToggleState] = useState({
        lang: 'English',
        theme: false,
        notif: false,
    });
    return (
        <SafeAreaView style={styles.SafeAreaContainer}>
            <StatusBar style="auto" />
            <ScrollView>
                <View style={styles.profile}>
                    <Image
                        source={require('../../assets/images/profile-avatar.jpeg')}
                        style={styles.profileAvatar}
                    />
                    <Text style={styles.profileName}>June</Text>
                    <Text style={styles.profileUsername}>@kayatoast1234</Text>
                </View>
                {OPTIONS.map((category) => (
                    <CategoryCell
                        key={category.name}
                        category={category}
                        toggleState={toggleState}
                        setToggleState={setToggleState}
                        navigation={navigation}
                    />
                ))}
                <View style={styles.signout}>
                    <CustomBtn
                        text="Sign Out"
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
                                        onPress: () =>
                                            navigation.navigate('Login'),
                                    },
                                ],
                            )
                        }
                        colors={[Constants.PRIMARY_COL, Constants.PRIMARY_COL]}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    SafeAreaContainer: {
        flex: 1,
        backgroundColor: Constants.SECONDARY_COL,
    },
    section: {
        paddingTop: 12,
    },
    sectionHeader: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    categoryNameText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#a7a7a7',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    },
    sectionBody: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
    },
    profile: {
        padding: 16,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
    },
    profileAvatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#aeaeae',
    },
    profileName: {
        marginTop: 12,
        fontSize: 20,
        fontWeight: '600',
        color: '#090909',
    },
    profileUsername: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '400',
        color: '#848484',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 24,
        height: 50,
    },
    OptionCellContainer: {
        paddingLeft: 24,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#e3e3e3',
    },
    rowIcon: {
        marginRight: 12,
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000',
    },
    rowValue: {
        fontSize: 17,
        color: '#616161',
        marginRight: 4,
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    signout: {
        marginTop: 20,
    },
});

export default SettingsScreen;
