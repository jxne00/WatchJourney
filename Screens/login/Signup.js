import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import Constants from '../../constants/constants';

const SignupScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.textStyle}>
                    This is the sign up screen.
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constants.SECONDARY_COL,
    },
    textStyle: {
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 14,
    },
});

export default SignupScreen;
