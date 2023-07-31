import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchFromAsyncStorage } from '../../../components/AsyncActions';

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

export default removeMovieFromWatchlist;
