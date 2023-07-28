import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Pressable,
    TextInput,
} from 'react-native';

import Constants from '../constants/constants';
import CustomBtn from '../components/CustomBtn';

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.welcomeContainer}>
                    <Text style={styles.title}>Welcome to</Text>
                    <Text style={styles.appname}>WatchJourney!</Text>
                </View>
                <TextInput placeholder="Username" style={styles.input} />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    style={styles.input}
                />
                <CustomBtn
                    text="Login"
                    onPress={() => navigation.navigate('AppScreens')}
                    align={'flex-end'}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: Constants.SECONDARY_COL,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Constants.SECONDARY_COL,
        paddingHorizontal: 20,
    },
    welcomeContainer: {
        marginBottom: 20,
    },
    title: {
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        fontSize: 26,
    },
    appname: {
        fontFamily: Constants.BANGER_FONT,
        fontSize: 36,
        letterSpacing: 2,
    },
    input: {
        height: 40,
        borderColor: '#464646',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 20,
    },
});

export default LoginScreen;
