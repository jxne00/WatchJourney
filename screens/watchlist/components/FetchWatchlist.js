import AsyncStorage from '@react-native-async-storage/async-storage';
import Fetch_API_Data from '../../../data/api';
import { printAsyncKeyContent } from '../../../components/PrintAsyncContent';

fetchMoviesFromAsync = async (key) => {
    try {
        const data = await AsyncStorage.getItem(`@${key}_movielist`);
        console.log(`data: ${data}`);

        if (data) {
            console.log(`No movies in ${key}_movielist`);
            return '[]';
        } else {
            const movieIDs = JSON.parse(data);
            console.log(`movieIDs: ${movieIDs}`);
            if (movieIDs.length === 0) {
                console.log(`No movies in ${key}_movielist`);
            }
            console.log(`movieIDs: ${movieIDs}`);
            return movieIDs;
        }
    } catch (err) {
        console.log('fetchMoviesFromAsync(): ', err);
    }
};

/**
 * @description The function first fetches movie IDs stored in AsyncStorage using key,
 * then returns movie details from API using those movie IDs.
 */
FetchMovieWatchlist = async (key, setListState) => {
    // get stored movie IDs from AsyncStorage
    let movieIDs = await fetchMoviesFromAsync(key);
    try {
        // fetch movie data from API using movie_id
        // API endpoint: https://api.themoviedb.org/3/movie/{movie_id}
        let fetchDetails = movieIDs.map((movie_id) => {
            Fetch_API_Data(`/movie/${movie_id}`);
        });

        setListState(fetchDetails);
    } catch (err) {
        console.log('FetchMovieWatchlist(): ', err);
    }
};

export default FetchMovieWatchlist;
