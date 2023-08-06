import { Share, Alert } from 'react-native';

/**
 * @description Share the titles of movies/tv shows in the watchlist
 * @param type - 'movie' or 'tv'
 * @param data - the state containing the movies/tv shows
 * @param watchlist - 'Watched', 'WatchLater', or 'WatchingNow'
 */
const ShareWatchlist = async (type, data, watchlist) => {
  // get all the titles of the movies/tv shows and combine into a string
  const titles =
    type === 'movie'
      ? data.map((movie) => movie.title).join(', ')
      : data.map((tvShow) => tvShow.name).join(', ');

  const name = type === 'movie' ? 'movies' : 'TV shows';

  try {
    let msg;
    if (watchlist == 'Watched') {
      msg = `Check out ${name} I've watched!\n${titles}`;
    } else if (watchlist == 'WatchLater') {
      msg = `Check out ${name} I'm planning to watch!\n${titles}`;
    } else {
      msg = `Check out ${name} I'm watching now!\n${titles}`;
    }

    // open share dialog with message
    const result = await Share.share({
      message: msg,
    });

    if (result.action === Share.sharedAction) {
      // message shared
      console.log('shared: ', result);
    } else if (result.action === Share.dismissedAction) {
      // share dismissed
      console.log('dismissed');
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};

export default ShareWatchlist;
