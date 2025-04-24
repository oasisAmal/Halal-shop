import APIKit from '../utils/APIKit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../utils/AsyncStorageKeys';

//branch_id,
export const LoginService = async (formData, onSuccess, onFailure) => {
	try {
		console.log('form data login =>>>>>>>>>>>>>>>>>> ');
		console.log(formData);
		const response = await APIKit.post(`shopapi/shops_app/login`, formData);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};

export const LogoutService = async (onSuccess, onFailure) => {
	try {
		let authToken = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.AuthToken);
		const response = await APIKit.get(`shopapi/shops_app/logout?token=${authToken}`);
		onSuccess && onSuccess(response);
	} catch (error) {
		onFailure && onFailure(error);
	}
};
