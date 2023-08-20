import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';
import setColor from '../../constants/colors';
import { ThemeContext } from '../../data/ThemeContext';

const FaqStyles = () => {
  const { theme } = useContext(ThemeContext);
  const { PRIMARY_COL, SECONDARY_COL } = setColor(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: SECONDARY_COL,
    },
    title: {
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      color: theme === 'light' ? PRIMARY_COL : '#dfdfdf',
      fontSize: 22,
      marginTop: 20,
      marginBottom: 10,
      alignSelf: 'center',
    },
    horizontalLine: {
      borderBottomColor: '#696969',
      borderBottomWidth: 1,
      marginTop: 5,
      width: '60%',
      alignSelf: 'center',
    },
    contentContainer: {
      marginVertical: 10,
      marginTop: '10%',
      backgroundColor: theme === 'light' ? '#f3f3f3' : PRIMARY_COL,
      padding: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: -3, height: 3 },
      shadowRadius: 4,
      shadowOpacity: 0.4,
      elevation: 5,
    },
    touchable: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    question: {
      marginHorizontal: 10,
      color: theme === 'light' ? '#000' : '#dfdfdf',
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      fontSize: 20,
    },
    answer: {
      marginTop: 5,
      color: theme === 'light' ? '#444343' : '#c3c0c0',
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      paddingHorizontal: 5,
      fontSize: 16,
    },
  });
};

export default FaqStyles;
