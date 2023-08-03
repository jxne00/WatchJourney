import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

/**
 * @description stylesheet for settings screen
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.SECONDARY_COL,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 14,
    backgroundColor: '#c8d6e8',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: -3, height: 3 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#404040',
  },
  profileTexts: {
    marginLeft: 14,
  },
  profileName: {
    fontSize: 22,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    color: '#090909',
  },
  profileUsername: {
    fontSize: 16,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
    letterSpacing: 1,
    color: '#6a6a6a',
  },

  // "sign out" button styles
  signout: {
    marginVertical: 24,
  },
  signoutBtn: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 23,
    backgroundColor: Constants.PRIMARY_COL,
  },
  SignoutBtnText: {
    color: Constants.SECONDARY_COL,
    fontSize: 16,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
  },

  optionContainer: {
    marginVertical: 20,
    alignSelf: 'center',
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000000',
    backgroundColor: Constants.SECONDARY_COL,
    paddingVertical: 12,
  },
  optionBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  optionText: {
    color: '#000000',
    fontSize: 20,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
  },
});

export default styles;
