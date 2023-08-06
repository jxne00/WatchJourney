import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import { fetch_API_with_param, Fetch_API_Data } from '../data/API/api';

/**
 * @description Print the contents of a key in AsyncStorage
 */
const printAsyncKeyContent = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(`Key: ${key} | Contains: ${value}`);
  } catch (error) {
    console.error(`Error reading value from ${key}: `, error);
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
  } catch (error) {
    console.error('Error reading AsyncStorage:', error);
  }
};

/**
 * @description clear all contents of AsyncStorage
 */
const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    Alert.alert('AsyncStorage successfully cleared!');
  } catch (error) {
    console.log(error);
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
      fetch_API_with_param(`/movie/${movie_id}`),
    );
    const data = await Promise.all(promises);
    return data;
  } catch (error) {
    console.error(error);
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
    const asyncKey =
      type === 'movie' ? `@${watchlist}_movielist` : `@${watchlist}_tvlist`;

    // get data from AsyncStorage
    let currentList = JSON.parse(
      (await AsyncStorage.getItem(asyncKey)) || '[]',
    );

    // check for duplicates
    if (currentList.includes(id)) {
      type === 'movie'
        ? Alert.alert('This movie is already in the list')
        : Alert.alert('This TV Show is already in the list');
      setModalVisible(false);
      return;
    }

    // add id to list and store back to AsyncStorage
    currentList.push(id);
    await AsyncStorage.setItem(asyncKey, JSON.stringify(currentList));

    console.log(id, 'added to', asyncKey);
    printAsyncKeyContent(asyncKey);

    // close modal after adding to list
    setModalVisible(false);
  } catch (error) {
    console.log(error);
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
    const storedIDs =
      JSON.parse(await AsyncStorage.getItem(`@${key}_${type}list`)) || [];
    const promises = storedIDs.map((id) => Fetch_API_Data(`/${type}/${id}`));
    const data = await Promise.all(promises);
    setListState(data);
  } catch (error) {
    console.error(error);
  }
};

export {
  printAsyncKeyContent,
  printAllAsyncContent,
  clearAsyncStorage,
  fetchFromAsyncStorage,
  addShowToAsync,
  FetchAPIwithAsync,
};
