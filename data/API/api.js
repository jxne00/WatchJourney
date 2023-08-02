// API key & access token (docs: https://developer.themoviedb.org/docs)
const TMDB_API_KEY = 'c13e2b2ef81e2b4c693abcfcff67a5c0';
const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTNlMmIyZWY4MWUyYjRjNjkzYWJjZmNmZjY3YTVjMCIsInN1YiI6IjY0YjhkNDEwNmFhOGUwMDEwZWM4MWY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8o7LHlXJ2Xo6zB04egK1aF1pmNeG-CLI0NXucCBlv9o';

// options for fetch
const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
};

// API base path
const BASE_PATH = 'https://api.themoviedb.org/3';

/**
 * @description Fetch data from TMDB API using API key
 * @param url - API endpoint
 * @returns response data in JSON format
 */
const Fetch_API_Data = async (url) => {
    try {
        console.log(`Fetch_API_Data() fetching from: ${BASE_PATH}${url}`);

        // fetch data from API
        const response = await fetch(
            `${BASE_PATH}${url}?api_key=${TMDB_API_KEY}`,
        );
        // convert response to JSON
        return await response.json();
    } catch (err) {
        // exception handling
        console.log('Fetch_API_Data(): ', err);
    }
};

/**
 * @description Fetch data from TMDB API using access token
 * @param url - API endpoint with filters
 * @returns response data in JSON format
 */
const fetch_API_with_param = async (url) => {
    try {
        console.log(
            `fetch_API_with_Options() fetching from: ${BASE_PATH}${url}`,
        );
        // fetch data using access token
        const response = await fetch(`${BASE_PATH}${url}`, OPTIONS);
        // convert response to JSON
        return await response.json();
    } catch (err) {
        // exception handling
        console.log('fetch_API_with_param(): ', err);
    }
};

export { Fetch_API_Data, fetch_API_with_param };
