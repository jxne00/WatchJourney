import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Constants.SECONDARY_COL,
  },
  scrollview: {
    paddingBottom: 140,
    backgroundColor: Constants.SECONDARY_COL,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Constants.SECONDARY_COL,
  },
  headerText: {
    fontSize: 36,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    marginTop: '30%',
    marginBottom: '10%',
  },
  input: {
    height: 40,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginTop: '6%',
    fontSize: 16,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginTop: '6%',
  },
  passwordInput: {
    fontSize: 16,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
  },
  signUpBtn: {
    height: 50,
    width: '75%',
    backgroundColor: Constants.PRIMARY_COL,
    borderRadius: 10,
    marginTop: '10%',
    justifyContent: 'center',
  },
  signUpText: {
    color: Constants.SECONDARY_COL,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
