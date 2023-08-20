import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';
import setColor from '../../constants/colors';
import { ThemeContext } from '../../data/ThemeContext';

const ProfileStyles = () => {
  const { theme } = useContext(ThemeContext);
  const { PRIMARY_COL, SECONDARY_COL } = setColor(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: SECONDARY_COL,
    },
    profile: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      padding: 14,
      backgroundColor: theme === 'light' ? '#c8d6e8' : PRIMARY_COL,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 16,
      shadowColor: '#000',
      elevation: 4,
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
      color: theme === 'light' ? '#090909' : '#fff',
    },
    profileUsername: {
      fontSize: 16,
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      letterSpacing: 1,
      color: theme === 'light' ? '#090909' : '#e4e4e4',
    },

    darkModeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '5%',
      marginBottom: '2%',
      alignSelf: 'center',
      width: '100%',
      borderBottomWidth: 1,
      borderColor: theme === 'light' ? '#000000' : '#fff',
      backgroundColor: SECONDARY_COL,
      paddingVertical: 12,
    },
    darkmodeText: {
      color: theme === 'light' ? '#000000' : '#fff',
      fontSize: 20,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      paddingLeft: '5%',
    },
    themeSwitch: {
      paddingRight: '5%',
    },

    optionContainer: {
      marginVertical: '2%',
      alignSelf: 'center',
      width: '100%',
      borderBottomWidth: 1,
      borderColor: theme === 'light' ? '#000000' : '#fff',
      backgroundColor: SECONDARY_COL,
      paddingVertical: 12,
    },
    optionBtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: '5%',
    },
    optionText: {
      color: theme === 'light' ? '#000000' : '#fff',
      fontSize: 20,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    },
    optionDesc: {
      color: theme === 'light' ? '#000000' : '#fff',
      fontSize: 16,
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      maxWidth: '90%',
    },

    signout: {
      marginVertical: 24,
    },
    signoutBtn: {
      alignSelf: 'center',
      alignItems: 'center',
      width: '80%',
      paddingVertical: 12,
      borderRadius: 23,
      backgroundColor: PRIMARY_COL,
    },
    SignoutBtnText: {
      color: '#fff',
      fontSize: 16,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    },
  });
};

export default ProfileStyles;
