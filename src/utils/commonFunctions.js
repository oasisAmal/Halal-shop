import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from './AsyncStorageKeys';
import {Dimensions} from 'react-native';

export const fetchAuthToken = async () => {
  try {
    const value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.AuthToken);
    if (value !== null) {
      console.log('current token is ' + value);
      return value;
    } else {
      return 'null_token';
    }
  } catch (e) {
    return 'error_token';
  }
};

export const fullWidth = Dimensions.get('window').width;
export const fullHeight = Dimensions.get('window').height;
