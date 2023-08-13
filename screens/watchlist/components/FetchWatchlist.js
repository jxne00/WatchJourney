import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fetch_API_Data } from '../../../data/API';
import { auth } from '../../../data/Firebase';

/**
 * @description Get the firebase userID of current loggedin user
 */
const getUserId = async () => {
  try {
    const user = await auth.currentUser;
    return user.uid;
  } catch (err) {
    console.error('getUserId(): ', err);
  }
};

/**
 * @description The function first fetches movie IDs stored in AsyncStorage using key,
 * then returns movie details from API using those movie IDs.
 */
const FetchMovies = async (key, setListState) => {
  try {
    const userID = await getUserId();

    const storedMovies =
      JSON.parse(await AsyncStorage.getItem(`@${userID}_${key}_movielist`)) ||
      [];
    const promises = storedMovies.map((movie_id) =>
      Fetch_API_Data(`/movie/${movie_id}`),
    );
    const data = await Promise.all(promises);
    setListState(data);
  } catch (error) {
    console.error(error);
  }
};

/**
 * @description The function first fetches tvshow IDs stored in AsyncStorage using key,
 * then returns the show details from API using those tv IDs.
 */
const FetchTvShows = async (key, setListState) => {
  try {
    const storedTvShows =
      JSON.parse(await AsyncStorage.getItem(`@${userID}_${key}_tvlist`)) || [];
    const promises = storedTvShows.map((tv_id) =>
      Fetch_API_Data(`/tv/${tv_id}`),
    );
    const data = await Promise.all(promises);
    setListState(data);
  } catch (error) {
    console.error(error);
  }
};

export { FetchMovies, FetchTvShows };
