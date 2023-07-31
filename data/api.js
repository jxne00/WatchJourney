// API key for TMDB API
// API docs: https://developer.themoviedb.org/docs
const TMDB_API_KEY = 'c13e2b2ef81e2b4c693abcfcff67a5c0';

const BASE_PATH = 'https://api.themoviedb.org/3';

/**
 * @description Fetch data from TMDB API
 * @param url - API endpoint
 * @returns data in JSON format
 */
const Fetch_API_Data = async (url) => {
    try {
        console.log(
            `Fetch_API_Data() fetching from: ${BASE_PATH}${url}?api_key=${TMDB_API_KEY}`,
        );

        // fetch data from API
        const response = await fetch(
            `${BASE_PATH}${url}?api_key=${TMDB_API_KEY}`,
        );
        // convert response to JSON
        return await response.json();
    } catch (error) {
        // exception handling
        console.log('Fetch_API_Data(): ', error);
    }
};

export default Fetch_API_Data;
