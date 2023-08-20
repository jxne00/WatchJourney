import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';
import setColor from '../../constants/colors';
import { ThemeContext } from '../../data/ThemeContext';

const ShowsListStyles = () => {
  const { theme } = useContext(ThemeContext);
  const { PRIMARY_COL, SECONDARY_COL } = setColor(theme);

  return StyleSheet.create({
    header: {
      fontSize: 22,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      color: theme === 'light' ? '#000' : '#fff',
      paddingBottom: 5,
      textAlign: 'center',
    },
    loadingScreen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Constants.SECONDARY_COL,
    },
    contentContainer: {
      paddingTop: 5,
      paddingBottom: 10,
      backgroundColor: SECONDARY_COL,
    },
    showContainer: {
      flexDirection: 'row',
      padding: 6,
      backgroundColor: SECONDARY_COL,
      borderWidth: 1,
      borderColor: theme === 'light' ? PRIMARY_COL : '#9c9c9c',
      borderRadius: 10,
      shadowOffset: { width: -3, height: 3 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 2,
      marginBottom: 10,
    },
    posterContainer: {
      borderRightColor: theme === 'light' ? PRIMARY_COL : '#9c9c9c',
      borderRightWidth: 1,
      marginRight: 6,
    },
    posterImage: {
      resizeMode: 'cover',
      width: 70,
      height: 85,
      borderRadius: 6,
      marginRight: 6,
    },
    showDetails: {
      flex: 1,
    },
    showTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 2,
      color: theme === 'light' ? '#000' : '#fff',
    },
    showOverview: {
      fontSize: 14,
      lineHeight: 16,
      color: theme === 'light' ? '#727272' : '#bdbdbd',
    },
    readMore: {
      color: '#0480a2',
      fontFamily: Constants.POPPINS_ITALIC_FONT,
      fontStyle: 'italic',
      alignSelf: 'flex-end',
      fontSize: 12,
    },

    // --------------- footer styles ---------------
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 10,
    },
    pageNum: {
      color: theme === 'light' ? '#000' : '#fff',
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      fontSize: 15,
    },
    addToListBtn: {
      backgroundColor: PRIMARY_COL,
      borderRadius: 10,
      padding: 5,
      alignContent: 'center',
      alignSelf: 'center',
      position: 'absolute',
      bottom: -5,
      left: -5,
    },
    addToListIcon: {
      color: Constants.SECONDARY_COL,
    },
  });
};

export default ShowsListStyles;
