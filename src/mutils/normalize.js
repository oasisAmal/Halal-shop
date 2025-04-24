import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../utils/AsyncStorageKeys';
import {theme_color as theme_color1} from '../../config';

export const theme_color = theme_color1;
export const screenwidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const drawerWidth = screenwidth - 56;
export const opacityEnabledColor = '#00000033';
import {useSelector, useDispatch} from 'react-redux';

export const setOrderReceivedAlert = async value => {
	try {
		await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.OrderReceivedAlert, value);
	} catch (e) {
		alert('Failed to save the data to the storage');
	}
};

export const removeOrderStatusChangedAlert = async () => {
	try {
		await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.OrderStatusChanged);
	} catch (e) {
		alert('Failed to remove');
	}
};

export const setOrderStatusChangedAlert = async value => {
	try {
		await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.OrderStatusChanged, value);
	} catch (e) {
		alert('Failed to save the data to the storage');
	}
};

export const getOrderReceivedAlert = async () => {
	try {
		return await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.OrderReceivedAlert);
	} catch (e) {
		alert('Failed to save the data to the storage');
	}
};

export const loadLanguageSettings = async key => {
	try {
		//alert('Data successfully saved');
	} catch (e) {
		alert('Failed to remove');
	}
};

export const saveDeviceTokenToStorage = async value => {
	try {
		await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.DeviceToken, value);
	} catch (e) {
		alert('Failed to save the data to the storage');
	}
};

export const saveNewOrdersCount = async value => {
	//const dispatch = useDispatch();
	try {
		// ===============================================
		// check for current order count, if there increse it by 1
		let value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.OrderBadgeCount);
		if (value !== null) {
			let newCount = parseInt(value) + 1;
			//alert(value + ' value ' + newCount + ' newcount ');
			await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.OrderBadgeCount, newCount.toString());
			//dispatch(updateOrderBadgeCount(newCount.toString()));
		} else {
			//  dispatch(updateOrderBadgeCount(1));
			await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.OrderBadgeCount, '1');
		}
		// value = '';
		// newCount = '';
		//alert('success count saved ');
	} catch (e) {
		alert('Failed to save the data to the storage');
	}
};
export const updateOrderBadgeCount = async value => {
	//const dispatch = useDispatch();
	// const counter = useSelector((state) => state.counter)

	try {
		// ===============================================
		// check for current order count, if there increse it by 1
		let value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.OrderBadgeCount);
		if (value !== null && parseInt(value) > 0) {
			let newCount = parseInt(value) + 1;
			//alert(value + ' value ' + newCount + ' newcount ');

			await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.OrderBadgeCount, newCount.toString());
			// dispatch(updateOrderBadgeCount(newCount.toString()));
		} else {
			//dispatch(updateOrderBadgeCount('1'));
			await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.OrderBadgeCount, '1');
		}
		value = '';
		newCount = '';
		// alert('success count saved ');
	} catch (e) {
		alert('Failed to save the data to the storage');
	}
};

export const deductNewOrdersCount = async value => {
	try {
		// const dispatch = useDispatch();
		// alert('im called deductNewOrdersCount');
		// ===============================================
		// check for current order count, if there increse it by 1
		let value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.OrderBadgeCount);
		if (value !== null) {
			let newCount = parseInt(value) - 1;
			if (newCount < 0) {
				alert('cannot deduct more ');
			} else {
				await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.OrderBadgeCount, newCount.toString());
				// dispatch(updateOrderBadgeCount(newCount.toString()));
			}
			//alert(value + ' value ' + newCount + ' newcount ');
		} else {
			// await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.NewOrdersCount, '1');
		}
		value = '';
		newCount = '';
		//alert('success count saved ');
	} catch (e) {
		alert('Failed to save the data to the storage');
	}
};

export const removeNewOrdersCount = async () => {
	try {
		await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.NewOrdersCount);
		//alert('success count saved ');
	} catch (e) {
		//alert('Failed to save the data to the storage');
	}
};
