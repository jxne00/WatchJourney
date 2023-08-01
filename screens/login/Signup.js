import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// import stylesheets
import styles from './SignupStyles';
import globalStyles from '../../constants/GlobalStyles';

const SignupScreen = () => {
    return (
        <SafeAreaView style={globalStyles.safeArea}>
            <View style={globalStyles.container}>
                <StatusBar style="auto" />
                <Text style={globalStyles.textStyle}>
                    This is the sign up screen.
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SignupScreen;
