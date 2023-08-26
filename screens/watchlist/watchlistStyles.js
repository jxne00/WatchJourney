import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';
import setColor from '../../constants/colors';
import { ThemeContext } from '../../data/ThemeContext';

const WatchlistStyles = () => {
  const { theme } = useContext(ThemeContext);
  const { PRIMARY_COL, SECONDARY_COL } = setColor(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: SECONDARY_COL,
    },
    emptyListMsg: {
      fontSize: 16,
      alignSelf: 'center',
      color: '#5b5a5a',
      marginVertical: '30%',
      fontFamily: Constants.POPPINS_REGULAR_FONT,
    },

    // ------- styles for view choosing button ------- //
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 5,
    },
    flatlistTitle: {
      marginRight: 10,
      fontSize: 20,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      color: theme === 'light' ? '#000' : '#fff',
    },
    chosenBtnCont: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 10,
    },
    chosenBtn: {
      backgroundColor: PRIMARY_COL,
      borderRadius: 10,
      padding: 10,
      marginVertical: 3,
      alignSelf: 'center',
      width: '40%',
    },
    notChosenBtn: {
      backgroundColor: PRIMARY_COL,
      opacity: 0.6,
      borderRadius: 10,
      padding: 10,
      marginVertical: 3,
      alignSelf: 'center',
      width: '40%',
    },
    buttonText: {
      color: Constants.SECONDARY_COL,
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      fontSize: 16,
      textAlign: 'center',
    },

  });
};

export default WatchlistStyles;
