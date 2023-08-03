import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Constants.SECONDARY_COL,
  },
  title: {
    fontSize: 24,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    marginVertical: 10,
    marginLeft: 10,
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
  author: {
    fontSize: 20,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
    marginLeft: 10,
  },
  username: {
    fontSize: 16,
    fontFamily: Constants.POPPINS_ITALIC_FONT,
    marginLeft: 10,
    marginTop: -2,
    color: '#575757',
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
  },
  content: {
    fontSize: 16,
    marginVertical: 5,
    fontFamily: Constants.POPPINS_REGULAR_FONT,
  },
  horizontalLine: {
    borderBottomColor: '#474747',
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
  },
});

export default styles;
