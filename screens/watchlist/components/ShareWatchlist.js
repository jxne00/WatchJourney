import { Share, Alert } from 'react-native';

/**
 * @description Share the titles of movies/tv shows in the watchlist
 * @param type - 'movie' or 'tv'
 * @param data - the state containing the movies/tv shows
 */
const ShareWatchlist = async (type, data) => {
  // get all the titles of the movies/tv shows and combine into a string
  const titles =
    type === 'movie'
      ? data.map((movie) => movie.title).join(', ')
      : data.map((tvShow) => tvShow.name).join(', ');

  const name = type === 'movie' ? 'movies' : 'TV shows';

  try {
    const result = await Share.share({
      message: `Check out ${name} I'm watching now!\n${titles}`,
    });
    if (result.action === Share.sharedAction) {
      console.log('shared: ', result);
    } else if (result.action === Share.dismissedAction) {
      console.log('dismissed');
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};

export default ShareWatchlist;
