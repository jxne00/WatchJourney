import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';
import setColor from '../../constants/colors';
import { ThemeContext } from '../../data/ThemeContext';

const ReviewsStyles = () => {
  const { theme } = useContext(ThemeContext);
  const { SECONDARY_COL } = setColor(theme);

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: SECONDARY_COL,
    },
    title: {
      fontSize: 24,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      marginVertical: 10,
      marginLeft: 10,
      color: theme === 'light' ? '#000000' : '#ffffff',
    },
    reviewContainer: {
      marginVertical: 5,
      marginHorizontal: 10,
    },
    authorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatarImage: {
      width: 40,
      height: 40,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#000000',
    },
    userIcon: {
      color: theme === 'light' ? '#000000' : '#d3d3d3',
    },
    author: {
      fontSize: 20,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      marginLeft: 10,
      color: theme === 'light' ? '#000000' : '#ffffff',
    },
    username: {
      fontSize: 16,
      fontFamily: Constants.POPPINS_ITALIC_FONT,
      marginLeft: 10,
      marginTop: -2,
      color: theme === 'light' ? '#575757' : '#a2a2a2',
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingRight: 10,
    },
    ratingText: {
      fontSize: 18,
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      marginLeft: 5,
      color: theme === 'light' ? '#000000' : '#ffffff',
    },
    content: {
      fontSize: 16,
      marginVertical: 5,
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      color: theme === 'light' ? '#000000' : '#ffffff',
    },
    horizontalLine: {
      borderBottomColor: theme === 'light' ? '#474747' : '#7d7d7d',
      width: '95%',
      alignSelf: 'center',
      borderBottomWidth: 1,
      marginVertical: 10,
    },
    noReviews: {
      fontSize: 18,
      fontFamily: Constants.POPPINS_ITALIC_FONT,
      marginVertical: '10%',
      textAlign: 'center',
      color: theme === 'light' ? '#000000' : '#ffffff',
    },
  });
};

export default ReviewsStyles;
