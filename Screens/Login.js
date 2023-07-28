import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Button,
    TextInput,
} from 'react-native';

import Constants from '../constants/constants';

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.title}>Welcome to</Text>
                    <Text style={styles.title}>WatchJourney!</Text>
                </View>
                <TextInput placeholder="Username" style={styles.input} />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    style={styles.input}
                />
                <Button
                    title="Login"
                    style={styles.button}
                    onPress={() => navigation.navigate('AppScreens')}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    welcomeContainer: {
        marginBottom: 20,
    },
    title: {
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        fontSize: 24,
    },
    input: {
        height: 40,
        borderColor: '#464646',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 20,
    },
    button: {
        borderRadius: 20,
    },
});

export default LoginScreen;
