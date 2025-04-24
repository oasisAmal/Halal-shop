import {screenHeight} from '../../../mutils';
import {Platform, ToastAndroid} from 'react-native';

export const startPointVerticallyCentered = viewHeight => {
	const avgMargin = (screenHeight - viewHeight) / 2;
	return avgMargin - 20;
};
export function toastMessage(message) {
	if (Platform.OS === 'android') {
		ToastAndroid.show(message, ToastAndroid.SHORT);
	} else {
		alert(message);
	}
}
