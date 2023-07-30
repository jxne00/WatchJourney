import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    TextInput,
    ImageBackground,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';

import GradientText from '../../components/GradientText';
import styles from './styles/LoginStyles';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* image src: https://unsplash.com/photos/A_7s4tbP6lI */}
            <ImageBackground
                source={require('../../assets/images/login-bg.jpg')}
                style={styles.imgbg}
            />
            <StatusBar style="light" />
            <View style={styles.welcomeContainer}>
                <Text style={styles.title}>Welcome to</Text>
                <GradientText
                    style={styles.appname}
                    colors={['#b092ec', '#81e4b7', '#e4c282']}>
                    WatchJourney!
                </GradientText>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.login}>Login to continue</Text>
                <KeyboardAvoidingView behavior="padding">
                    <TextInput
                        placeholder="&#128100; Username"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="&#128274; Password"
                        secureTextEntry
                        style={styles.input}
                    />
                </KeyboardAvoidingView>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => navigation.navigate('AppScreens')}>
                    <Text style={styles.loginBtnText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signUpContainer}>
                <Text style={styles.signup}>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={styles.signupBtn}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;
