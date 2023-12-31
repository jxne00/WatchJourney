import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';
import setColor from '../../constants/colors';
import { ThemeContext } from '../../data/ThemeContext';

const SearchStyles = () => {
  const { theme } = useContext(ThemeContext);
  const { SECONDARY_COL } = setColor(theme);

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: SECONDARY_COL,
    },
    searchInputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: '5%',
      backgroundColor: '#ffffff',
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 30,
      width: '95%',
      height: 50,
    },
    searchInput: {
      fontSize: 18,
      flex: 1,
      marginLeft: '4%',
      fontFamily: Constants.POPPINS_REGULAR_FONT,
    },
    searchIcon: {
      marginLeft: '6%',
      color: '#000000',
    },
    clearIcon: {
      marginLeft: 8,
      fontSize: 20,
      color: '#232323',
    },
    resultsFound: {
      fontSize: 16,
      marginLeft: '6%',
      marginTop: '2%',
      marginBottom: '3%',
      fontFamily: Constants.POPPINS_ITALIC_FONT,
      color: theme === 'light' ? '#343434' : '#898989',
    },
    searchResultsContainer: {
      flex: 1,
      alignSelf: 'center',
      width: '90%',
    },
    searchResult: {
      height: 70,
      paddingVertical: 10,
    },
    borderBottom: {
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
    },
    title: {
      fontSize: 18,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      color: theme === 'light' ? '#000000' : '#ffffff',
    },
    releaseRating: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    releaseDate: {
      fontSize: 16,
      fontFamily: Constants.POPPINS_ITALIC_FONT,
      color: theme === 'light' ? '#303030' : '#9a9a9a',
      marginRight: '3%',
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      right: 5,
    },
    ratingIcon: {
      color: '#d88928',
      marginRight: '2%',
    },
    ratingNumber: {
      fontSize: 15,
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      color: theme === 'light' ? '#000000' : '#ffffff',
      paddingVertical: 5,
    },

    // ------ SegmentedControl buttons ------
    segBtnStyle: {
      marginHorizontal: 20,
      height: 40,
    },
    segBtnTextStyle: {
      fontSize: 16,
      color: theme === 'light' ? '#000000' : '#3b3b3b',
    },
    segBtnActiveTextStyle: {
      fontSize: 16,
      color: Constants.SECONDARY_COL,
    },
  });
};

export default SearchStyles;
