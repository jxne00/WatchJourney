import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchFromAsyncStorage } from '../../../components/AsyncActions';
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
 * @description Remove a movie or TV show ID from a watchlist in AsyncStorage
 * @param watchlist - the watchlist to remove from
 * @param id - the ID of the movie/TV show to remove
 * @param setStateItem - the state item to update
 * @param type - 'movie' or 'tv'
 */
const removeIDfromList = async (watchlist, id, setStateItem, type) => {
  try {
    userID = await getUserId();

    // Retrieve the current list of IDs
    const storedIDs =
      JSON.parse(
        await AsyncStorage.getItem(`@${userID}_${watchlist}_${type}list`),
      ) || [];

    // Filter out the ID to remove
    const updatedIDs = storedIDs.filter((storedID) => storedID !== id);

    // Store the updated list back in AsyncStorage
    await AsyncStorage.setItem(
      `@${userID}_${watchlist}_${type}list`,
      JSON.stringify(updatedIDs),
    );

    // Fetch the updated list of IDs from AsyncStorage
    const updatedList = await fetchFromAsyncStorage(
      `@${userID}_${watchlist}_${type}list`,
    );
    setStateItem(updatedList);

    console.log(id, 'removed from', `@${userID}_${watchlist}_${type}list`);
  } catch (err) {
    type === 'movie'
      ? console.log(
          `Error removing movie from "${userID}_${watchlist}" list: `,
          err,
        )
      : console.log(
          `Error removing TV show from "${userID}_${watchlist}" list: `,
          err,
        );
  }
};

export default removeIDfromList;
