import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ImageBackground,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';

import Constants from '../../constants/constants';
import CustomBtn from '../../components/CustomBtn';
import GradientText from '../../components/GradientText';

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
                <CustomBtn
                    text="Login"
                    onPress={() => navigation.navigate('AppScreens')}
                    align={'flex-end'}
                    textColor={'#343434'}
                    colors={['#828282', '#c2c2c2', '#e1e0e0']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1.5 }}
                />
                <View style={styles.signUpContainer}>
                    <Text style={styles.signup}>Don't have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text style={styles.signupBtn}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    imgbg: {
        resizeMode: 'cover',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.9,
    },
    welcomeContainer: {
        marginBottom: 20,
        paddingHorizontal: 20,
        position: 'absolute',
        top: '15%',
    },
    title: {
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        fontSize: 26,
        color: Constants.SECONDARY_COL,
    },
    appname: {
        fontFamily: Constants.BANGER_FONT,
        fontSize: 36,
        letterSpacing: 2,
        color: '#5cb8ed',
    },
    contentContainer: {
        marginHorizontal: 10,
        padding: 20,
        borderRadius: 13,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    login: {
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        color: Constants.SECONDARY_COL,
        fontSize: 18,
        marginBottom: 20,
        color: '#ffffff',
    },
    input: {
        height: 40,
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: '#edecec',
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 16,
        textAlign: 'center',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    signup: {
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 14,
        marginRight: 5,
        color: '#fff',
    },
    signupBtn: {
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 14,
        color: '#5cb8ed',
    },
});

export default LoginScreen;
