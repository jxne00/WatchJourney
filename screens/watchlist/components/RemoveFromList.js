import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchFromAsyncStorage } from '../../../components/AsyncActions';

/**
 * @description Remove a movie or TV show ID from a watchlist in AsyncStorage
 * @param watchlist - the watchlist to remove from
 * @param id - the ID of the movie/TV show to remove
 * @param setStateItem - the state item to update
 * @param type - 'movie' or 'tv'
 */
const removeIDfromList = async (watchlist, id, setStateItem, type) => {
  try {
    // Retrieve the current list of IDs
    const storedIDs =
      JSON.parse(await AsyncStorage.getItem(`@${watchlist}_${type}list`)) || [];

    // Filter out the ID to remove
    const updatedIDs = storedIDs.filter((storedID) => storedID !== id);

    // Store the updated list back in AsyncStorage
    await AsyncStorage.setItem(
      `@${watchlist}_${type}list`,
      JSON.stringify(updatedIDs),
    );

    // Fetch the updated list of IDs from AsyncStorage
    const updatedList = await fetchFromAsyncStorage(
      `@${watchlist}_${type}list`,
    );
    setStateItem(updatedList);

    console.log(id, 'removed from', `@${watchlist}_${type}list`);
  } catch (err) {
    type === 'movie'
      ? console.log(`Error removing movie from ${watchlist} list: `, err)
      : console.log(`Error removing TV show from ${watchlist} list: `, err);
  }
};

export default removeIDfromList;
