import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.SECONDARY_COL,
  },
  title: {
    fontSize: 22,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    marginLeft: 5,
    marginBottom: 5,
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  release: {
    fontSize: 16,
    fontFamily: Constants.POPPINS_ITALIC_FONT,
    color: '#565656',
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
    color: Constants.PRIMARY_COL,
  },
  overview: {
    fontSize: 16,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  horizontalLine: {
    borderBottomColor: '#919191',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
  },
  
  // ---- poster image ----
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
    width: Constants.WIDTH * 0.95,
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
    backgroundColor: Constants.SECONDARY_COL,
    borderWidth: 1,
    borderColor: Constants.PRIMARY_COL,
    margin: 5,
  },
  genreText: {
    paddingHorizontal: 5,
    fontSize: 16,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
    color: '#000',
  },
  
  // ---- adding to list ----
  addToListBtn: {
    backgroundColor: Constants.PRIMARY_COL,
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
    backgroundColor: Constants.PRIMARY_COL,
    borderRadius: 5,
    width: '45%',
    height: 45,
    padding: 10,
    marginVertical: 10,
    marginLeft: 10,
    alignContent: 'center',
    alignSelf: 'left',
  },
  reviewLink: {
    textAlign: 'center',
    color: Constants.SECONDARY_COL,
    fontSize: 16,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
  },
});

export default styles;
