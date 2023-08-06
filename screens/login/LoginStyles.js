import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
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
    top: '18%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    fontSize: 28,
    color: Constants.SECONDARY_COL,
  },
  appname: {
    fontFamily: Constants.BANGER_FONT,
    fontSize: 38,
    letterSpacing: 2,
  },
  contentContainer: {
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 13,
    backgroundColor: '#282828',
    shadowColor: '#000000',
    shadowOffset: { width: -4, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
  },
  loginTextCont: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  login: {
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    color: Constants.SECONDARY_COL,
    marginLeft: 5,
    fontSize: 18,
  },
  loginBtn: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '40%',
    borderRadius: 20,
    backgroundColor: Constants.PRIMARY_COL,
    marginTop: 10,
    marginBottom: 20,
  },
  loginBtnText: {
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    fontSize: 16,
    color: Constants.SECONDARY_COL,
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: Constants.SECONDARY_COL,
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
    color: '#70b2f4',
  },
});

export default styles;
