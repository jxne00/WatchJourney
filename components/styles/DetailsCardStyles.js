import { StyleSheet } from 'react-native';
import Constants from '../../constants/constants';

const styles = StyleSheet.create({
  cardContainer: {
    width: Constants.WIDTH * 0.46,
    margin: 5,
    backgroundColor: '#f1f4fc',
    borderRadius: 10,
    padding: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#181818',
    shadowOpacity: 0.3,
  },
  emptyItem: {
    backgroundColor: 'transparent',
  },

  removeItemContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1, // make button appear on top of image
  },
  removeItemBtn: {
    backgroundColor: '#efefef',
    borderWidth: 2,
    borderColor: '#f31f1f',
    borderRadius: 5,
    padding: 3,
  },

  poster: {
    height: 150,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: Constants.POPPINS_SEMIBOLD_FONT,
  },
  rating: {
    fontSize: 14,
    color: Constants.PRIMARY_COL,
    flexDirection: 'row',
    fontFamily: Constants.POPPINS_REGULAR_FONT,
  },
  starIcon: {
    color: '#ff9900',
    marginRight: 5,
  },
});

export default styles;
