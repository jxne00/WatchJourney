import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import { Fetch_API_Data } from '../data/API/api';

/**
 * @description Print the content of a key in AsyncStorage
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

const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    Alert.alert('AsyncStorage successfully cleared!');
  } catch (error) {
    console.log(error);
    Alert.alert('Failed to clear AsyncStorage');
  }
};

const fetchFromAsyncStorage = async (key) => {
  try {
    const storedMovies = JSON.parse(await AsyncStorage.getItem(key)) || [];
    const promises = storedMovies.map((movie_id) =>
      Fetch_API_Data(`/movie/${movie_id}`),
    );
    const data = await Promise.all(promises);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export {
  printAsyncKeyContent,
  printAllAsyncContent,
  clearAsyncStorage,
  fetchFromAsyncStorage,
};
