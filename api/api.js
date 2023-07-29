// API key for TMDB API
// API docs: https://developer.themoviedb.org/docs
const TMDB_API_KEY = 'c13e2b2ef81e2b4c693abcfcff67a5c0';

const BASE_PATH = 'https://api.themoviedb.org/3';
const POSTER_PATH = 'https://image.tmdb.org/t/p/';

/**
 * @description Fetch data from TMDB API
 * @param url - API endpoint
 * @returns data in JSON format
 */
const Fetch_API_Data = async (url) => {
    try {
        const response = await fetch(
            `${BASE_PATH}${url}?api_key=${TMDB_API_KEY}`,
        );
        const json_data = await response.json();
        return json_data;
    } catch (error) {
        console.log(error);
    }
};

export default Fetch_API_Data;
