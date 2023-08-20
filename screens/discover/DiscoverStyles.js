import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';
import setColor from '../../constants/colors';
import { ThemeContext } from '../../data/ThemeContext';

const DiscoverStyles = () => {
  const { theme } = useContext(ThemeContext);
  const { PRIMARY_COL, SECONDARY_COL } = setColor(theme);

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: SECONDARY_COL,
    },
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: SECONDARY_COL,
      paddingBottom: 50,
    },
    chosenBtnCont: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 5,
    },
    chosenBtn: {
      backgroundColor: PRIMARY_COL,
      borderRadius: 10,
      padding: 10,
      marginVertical: 5,
      alignSelf: 'center',
      width: '40%',
    },
    notChosenBtn: {
      backgroundColor: SECONDARY_COL,
      borderColor: theme === 'light' ? '#000000' : '#9c9c9c',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      marginVertical: 5,
      alignSelf: 'center',
      width: '40%',
    },
    btnText: {
      color: theme === 'light' ? '#000000' : '#9c9c9c',
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      fontSize: 16,
      textAlign: 'center',
    },
    chosenBtnText: {
      color: '#ffffff',
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      fontSize: 16,
      textAlign: 'center',
    },
  });
};

export default DiscoverStyles;
