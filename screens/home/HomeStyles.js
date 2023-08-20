import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';
import setColor from '../../constants/colors';
import { ThemeContext } from '../../data/ThemeContext';

const HomeStyles = () => {
  const { theme } = useContext(ThemeContext);
  const { SECONDARY_COL } = setColor(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: SECONDARY_COL,
      paddingBottom: 10,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Constants.HEIGHT * 0.02,
    },
    appname: {
      fontSize: 30,
      fontFamily: Constants.BANGER_FONT,
      color: theme === 'light' ? '#854883' : '#cda7cc',
      textAlign: 'center',
      letterSpacing: 2,
    },
    themeSwitch: {
      position: 'absolute',
      right: 10,
      top: 2,
    },
    horizontalLine: {
      height: 1,
      width: '90%',
      alignSelf: 'center',
      backgroundColor: '#afafaf',
      marginTop: 10,
      marginBottom: 3,
    },

    sectionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: Constants.HEIGHT * 0.03,
      marginBottom: Constants.HEIGHT * 0.01,
      marginLeft: Constants.WIDTH * 0.05,
    },
    sectionTitle: {
      fontSize: 20,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      color: theme === 'light' ? '#000' : '#fff',
    },
    icons: {
      color: theme === 'light' ? '#000' : '#fff',
    },

    // ------ carousel ------
    scrollviewStyle: {
      paddingHorizontal: 0,
      paddingVertical: Constants.HEIGHT * 0.01,
    },

    // ------ search box ------
    searchBoxContainer: {
      backgroundColor: '#fff',
      borderRadius: 30,
      height: 50,
      marginHorizontal: 15,
      marginTop: 15,
      paddingHorizontal: 10,
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#000',
    },
    searchInput: {
      flex: 1,
      fontSize: 18,
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      color: '#000',
      paddingHorizontal: 10,
    },
    searchIcon: {
      fontSize: 30,
      color: '#000',
    },
    clearIcon: {
      fontSize: 20,
      color: '#232323',
    },
  });
};

export default HomeStyles;
