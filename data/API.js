// TMDB API key (docs: https://developer.themoviedb.org/docs)
const API_KEY = 'c13e2b2ef81e2b4c693abcfcff67a5c0';

// base path of endpoints
const BASE_PATH = 'https://api.themoviedb.org/3';

/**
 * @description Fetch data from TMDB API using API key
 * @param url - API endpoint
 * @param param - any additional parameters
 * @returns response data in JSON format
 */
const Fetch_API_Data = async (url, param) => {
  try {
    const endpoint = param
      ? `${BASE_PATH}${url}?api_key=${API_KEY}&${param}`
      : `${BASE_PATH}${url}?api_key=${API_KEY}`;

    const response = await fetch(endpoint);

    // convert response to JSON
    return await response.json();
  } catch (err) {
    alert(err);
  }
};

export default Fetch_API_Data;
