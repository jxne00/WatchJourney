import AsyncStorage from '@react-native-async-storage/async-storage';
import Fetch_API_Data from '../../../data/api';

/**
 * @description The function first fetches movie IDs stored in AsyncStorage using key,
 * then returns movie details from API using those movie IDs.
 */
const FetchMovies = async (key, setListState) => {
    try {
        const storedMovies =
            JSON.parse(await AsyncStorage.getItem(`@${key}_movielist`)) || [];
        const promises = storedMovies.map((movie_id) =>
            Fetch_API_Data(`/movie/${movie_id}`),
        );
        const data = await Promise.all(promises);
        setListState(data);
    } catch (error) {
        console.error(error);
    }
};

export default FetchMovies;
