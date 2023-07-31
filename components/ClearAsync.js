import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const clearAsyncStorage = async () => {
    try {
        await AsyncStorage.clear();
        Alert.alert('AsyncStorage successfully cleared!');
    } catch (error) {
        console.log(error);
        Alert.alert('Failed to clear AsyncStorage');
    }
};

export default clearAsyncStorage;
