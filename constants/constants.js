import { Dimensions } from 'react-native';

// contains variables used throughout the app
const Constants = {
  PRIMARY_COL: '#74369D',
  SECONDARY_COL: '#D7DCEA',
  DARK_PRIMARY_COL: '#21A0A0',
  DARK_SECONDARY_COL: '#075E8D',
  BANGER_FONT: 'Bangers-Regular',
  POPPINS_REGULAR_FONT: 'Poppins-Regular',
  POPPINS_SEMIBOLD_FONT: 'Poppins-SemiBold',
  POPPINS_ITALIC_FONT: 'Poppins-Italic',

  // screen dimensions
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,

  // API paths
  POSTER_BASE_PATH: 'https://image.tmdb.org/t/p/',

  // watchlist keys for AsyncStorage
  WATCHLISTS: ['Watched', 'Watching Now', 'Watch Later'],
};

export default Constants;
