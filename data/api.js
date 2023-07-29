// API key for TMDB API
// API docs: https://developer.themoviedb.org/docs
const TMDB_API_KEY = 'c13e2b2ef81e2b4c693abcfcff67a5c0';

// popular movies: movie/popular
// upcoming movies: movie/upcoming
// popular tv shows: tv/popular
// upcoming tv shows: tv/upcoming
// movie details: movie/{movie_id}
// tv show details: tv/{tv_id}
// reviews: review/{review_id}

const BASE_PATH = 'https://api.themoviedb.org/3';

// poster: https://image.tmdb.org/t/p/{size}/{poster_path}
const POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/';

/**
 * @description Fetch data from TMDB API
 * @param url - API endpoint
 * @returns data in JSON format
 */
const Fetch_API_Data = async (url) => {
    try {
        // fetch data from API
        const response = await fetch(
            `${BASE_PATH}${url}?api_key=${TMDB_API_KEY}`,
        );
        // convert response to JSON
        return await response.json();
    } catch (error) {
        // exception handling
        console.log(error);
    }
};

export default Fetch_API_Data;
