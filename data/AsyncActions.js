import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import * as Haptics from 'expo-haptics';
import Fetch_API_Data from './API';
import { getUserId } from './Firebase';

/**
 * @description Print the contents of a key in AsyncStorage
 */
const printAsyncKeyContent = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(`Key: ${key} | Contains: ${value}`);
  } catch (err) {
    console.error(`Error reading value from ${key}: `, err);
  }
};

/**
 * @description Print contents of all keys in AsyncStorage
 */
const printAllAsyncContent = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);

    console.log('AsyncStorage contents:');
    result.forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  } catch (err) {
    console.error('printAllAsyncContent(): ', err);
  }
};

/**
 * @description clear all contents of AsyncStorage
 */
const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    Alert.alert('AsyncStorage successfully cleared!');
  } catch (err) {
    Alert.alert('Failed to clear AsyncStorage');
  }
};

/**
 * @description fetch data from API using movie_id from AsyncStorage
 * @param key - key for AsyncStorage
 */
const fetchFromAsyncStorage = async (key) => {
  try {
    const storedMovies = JSON.parse(await AsyncStorage.getItem(key)) || [];
    const promises = storedMovies.map((movie_id) =>
      Fetch_API_Data(`/movie/${movie_id}`),
    );
    const data = await Promise.all(promises);
    return data;
  } catch (err) {
    console.error('fetchFromAsyncStorage(): ', err);
  }
};

/**
 * @description Add ID of TV show/movie to AsyncStorage
 * @param watchlist - the watchlist to add to
 * @param type - 'movie' or 'tv'
 * @param id - id of movie/tv show
 */
const addShowToAsync = async (watchlist, type, id, setModalVisible) => {
  try {
    // get user id
    const userID = await getUserId();

    const asyncKey =
      type === 'movie'
        ? `@${userID}_${watchlist}_movielist`
        : `@${userID}_${watchlist}_tvlist`;

    // get data from AsyncStorage
    let currentList = JSON.parse(
      (await AsyncStorage.getItem(asyncKey)) || '[]',
    );

    // check for duplicates
    if (currentList.includes(id)) {
      type === 'movie'
        ? Alert.alert('This movie is already in the list')
        : Alert.alert('This TV Show is already in the list');
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setModalVisible(false);
      return;
    }

    // add id to list and store back to AsyncStorage
    currentList.push(id);
    await AsyncStorage.setItem(asyncKey, JSON.stringify(currentList));
    console.log(id, 'added to', asyncKey);

    // success haptic feedback
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    printAsyncKeyContent(asyncKey);

    // close modal after adding to list
    setModalVisible(false);
  } catch (err) {
    console.log('addShowToAsync(): ', err);
  }
};

/**
 * @description The function first fetches IDs stored in AsyncStorage,
 * then returns details from API using those IDs.
 * @param key - key for AsyncStorage
 * @param setListState - state to update
 * @param type - 'movie' or 'tv'
 */
const FetchAPIwithAsync = async (key, setListState, type) => {
  try {
    const userID = await getUserId();

    const storedIDs =
      JSON.parse(await AsyncStorage.getItem(`@${userID}_${key}_${type}list`)) ||
      [];
    const promises = storedIDs.map((id) => Fetch_API_Data(`/${type}/${id}`));
    const data = await Promise.all(promises);
    setListState(data);
  } catch (err) {
    console.error('FetchAPIwithAsync(): ', err);
  }
};

/**
 * @description The function first fetches movie IDs stored in AsyncStorage using key,
 * then returns movie details from API using those movie IDs.
 */
const FetchMovies = async (key, setListState) => {
  try {
    const userID = await getUserId();

    const storedMovies =
      JSON.parse(await AsyncStorage.getItem(`@${userID}_${key}_movielist`)) ||
      [];
    const promises = storedMovies.map((movie_id) =>
      Fetch_API_Data(`/movie/${movie_id}`),
    );
    const data = await Promise.all(promises);
    setListState(data);
  } catch (error) {
    console.error(error);
  }
};

/**
 * @description The function first fetches tvshow IDs stored in AsyncStorage using key,
 * then returns the show details from API using those tv IDs.
 */
const FetchTvShows = async (key, setListState) => {
  try {
    const storedTvShows =
      JSON.parse(await AsyncStorage.getItem(`@${userID}_${key}_tvlist`)) || [];
    const promises = storedTvShows.map((tv_id) =>
      Fetch_API_Data(`/tv/${tv_id}`),
    );
    const data = await Promise.all(promises);
    setListState(data);
  } catch (error) {
    console.error(error);
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

export {
  printAsyncKeyContent,
  printAllAsyncContent,
  clearAsyncStorage,
  fetchFromAsyncStorage,
  addShowToAsync,
  FetchAPIwithAsync,
  FetchMovies,
  FetchTvShows,
  removeIDfromList,
};
