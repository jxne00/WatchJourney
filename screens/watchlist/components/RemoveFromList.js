import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchFromAsyncStorage } from '../../../components/AsyncActions';

/**
 * @description Removes the movie_id from the watchlist stored in AsyncStorage
 * @param watchlist Name of the watchlist to remove the movie from
 * @param movieID movie_id to remove from the watchlist
 * @param listState State of the watchlist to update
 */
const removeMovieFromWatchlist = async (watchlist, movieID, listState) => {
    try {
        // Retrieve the current list of movie IDs
        const storedMovieIDs =
            JSON.parse(await AsyncStorage.getItem(`@${watchlist}_movielist`)) ||
            [];

        // Filter out the ID of the movie to remove
        const updatedMovieIDs = storedMovieIDs.filter((id) => id !== movieID);

        // Store the updated list back in AsyncStorage
        await AsyncStorage.setItem(
            `@${watchlist}_movielist`,
            JSON.stringify(updatedMovieIDs),
        );

        // Fetch the updated list of movies from AsyncStorage
        const updatedMovies = await fetchFromAsyncStorage(
            `@${watchlist}_movielist`,
        );

        // Update the state of the list
        listState(updatedMovies);
    } catch (error) {
        console.log('Error removing movie from watchlist: ', error);
    }
};

/**
 * @description Removes the tv_id from the watchlist stored in AsyncStorage
 * @param watchlist Name of the watchlist to remove the tv show from
 * @param movieID tv_id to remove from the watchlist
 * @param listState State of the watchlist to update
 */
const removeTvShowFromWatchlist = async (watchlist, tvID, listState) => {
    try {
        // Retrieve the current list of movie IDs
        const storedTvIDs =
            JSON.parse(await AsyncStorage.getItem(`@${watchlist}_tvlist`)) ||
            [];

        // Filter out the ID of the movie to remove
        const updatedTvIDs = storedTvIDs.filter((id) => id !== tvID);

        // Store the updated list back in AsyncStorage
        await AsyncStorage.setItem(
            `@${watchlist}_tvlist`,
            JSON.stringify(updatedTvIDs),
        );

        // Fetch the updated list of movies from AsyncStorage
        const updatedTvs = await fetchFromAsyncStorage(`@${watchlist}_tvlist`);

        // Update the state of the list
        listState(updatedTvs);
    } catch (error) {
        console.log('Error removing tv show from watchlist: ', error);
    }
};

export { removeMovieFromWatchlist, removeTvShowFromWatchlist };
