import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

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
        top: '20%',
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // shadowColor: '#000000',
        // shadowOffset: { width: -4, height: 4 },
        // shadowRadius: 4,
        // shadowOpacity: 0.4,
    },
    login: {
        fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
        color: Constants.SECONDARY_COL,
        fontSize: 18,
        marginBottom: 20,
        color: '#ffffff',
    },
    loginBtn: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '40%',
        borderRadius: 20,
        backgroundColor: '#7368bf',
        marginBottom: 20,
    },
    loginBtnText: {
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 16,
        color: '#fff',
    },
    input: {
        height: 40,
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 16,
        textAlign: 'center',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    signup: {
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 16,
        marginRight: 5,
        color: '#fff',
    },
    signupBtn: {
        fontFamily: Constants.POPPINS_REGULAR_FONT,
        fontSize: 14,
        color: '#6cadee',
    },
});

export default styles;
