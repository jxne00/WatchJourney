import AsyncStorage from '@react-native-async-storage/async-storage';

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

export { printAsyncKeyContent, printAllAsyncContent };
