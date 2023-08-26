import { useContext } from 'react';
import { StyleSheet, Platform } from 'react-native';
import Constants from '../../constants/constants';
import setColor from '../../constants/colors';
import { ThemeContext } from '../../data/ThemeContext';

const ShowDetailsStyles = () => {
  const { theme } = useContext(ThemeContext);
  const { PRIMARY_COL, SECONDARY_COL } = setColor(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: SECONDARY_COL,
    },
    title: {
      fontSize: 22,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      marginBottom: 5,
      alignSelf: 'center',
      flexWrap: 'wrap',
      color: theme === 'light' ? '#000' : '#fff',
    },
    subtitle: {
      fontSize: 20,
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      textAlign: 'center',
      marginTop: -3,
      marginBottom: 5,
      color: theme === 'light' ? '#000' : '#fff',
    },
    release: {
      fontSize: 16,
      fontFamily: Constants.POPPINS_ITALIC_FONT,
      color: theme === 'light' ? '#565656' : '#c2c2c2',
      alignSelf: 'center',
    },
    dateShowType: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginHorizontal: 10,
      marginVertical: 5,
    },
    showType: {
      fontSize: 16,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      color: '#d64545',
      marginLeft: 5,
    },
    ratingContainer: {
      backgroundColor: Constants.SECONDARY_COL,
      borderRadius: 10,
      width: 60,
      height: 35,
      padding: 5,
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
    rating: {
      fontSize: 18,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      color: Constants.PRIMARY_COL,
    },
    sectionTitle: {
      fontSize: 20,
      fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
      marginHorizontal: 10,
      color: theme === 'light' ? PRIMARY_COL : '#c99fde',
    },
    overview: {
      fontSize: 16,
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      marginHorizontal: 10,
      marginVertical: 5,
      color: theme === 'light' ? '#000000' : '#ffffff',
    },
    horizontalLine: {
      borderBottomColor: theme === 'light' ? '#919191' : '#b1b1b1',
      borderBottomWidth: 1,
      width: '90%',
      alignSelf: 'center',
      marginVertical: 15,
    },

    // ---- poster image ----
    loadingIndicator: {
      paddingTop: Constants.HEIGHT * 0.2,
    },
    ImageBg: {
      width: Constants.WIDTH,
      height: Constants.HEIGHT * 0.44,
      resizeMode: 'cover',
      justifyContent: 'center',
      marginBottom: 10,
    },
    darkOverlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    posterImage: {
      resizeMode: 'contain',
      width:
        Platform.OS === 'ios' ? Constants.WIDTH * 0.95 : Constants.WIDTH * 0.6,
      height: Constants.HEIGHT * 0.42,
      borderRadius: Constants.HEIGHT * 0.04,
      alignSelf: 'center',
    },

    // ---- genres section ----
    genresContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 5,
      justifyContent: 'center',
    },
    genre: {
      fontSize: 16,
      borderRadius: 8,
      padding: 5,
      backgroundColor: SECONDARY_COL,
      borderWidth: 1,
      borderColor: theme === 'light' ? PRIMARY_COL : '#b1b1b1',
      margin: 5,
    },
    genreText: {
      paddingHorizontal: 5,
      fontSize: 16,
      fontFamily: Constants.POPPINS_REGULAR_FONT,
      color: theme === 'light' ? '#000000' : '#ffffff',
    },

    // ---- adding to list ----
    addToListBtn: {
      backgroundColor: PRIMARY_COL,
      borderRadius: 5,
      padding: 5,
      alignContent: 'center',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 5,
      left: 10,
    },
    addToListIcon: {
      color: Constants.SECONDARY_COL,
    },

    // ---- reviews section ----
    seeReviewsBtn: {
      backgroundColor: PRIMARY_COL,
      borderRadius: 5,
      width: '45%',
      height: 45,
      padding: 10,
      marginVertical: 10,
      marginLeft: 10,
      alignContent: 'center',
    },
    reviewLink: {
      textAlign: 'center',
      color: Constants.SECONDARY_COL,
      fontSize: 16,
      fontFamily: Constants.POPPINS_REGULAR_FONT,
    },
  });
};

export default ShowDetailsStyles;
