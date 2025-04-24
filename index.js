/**
 * @format
 */

import {
	saveDeviceTokenToStorage,
	saveNewOrdersCount,
	setOrderReceivedAlert,
	updateOrderBadgeCount,
	setOrderStatusChangedAlert,
	deductNewOrdersCount,
} from './src/mutils';

import {AppRegistry, Linking, Platform} from 'react-native';
import App from './App';
// import App from './App';
import NotificationInitialize from './NotificationInitialize';
import {name as appName} from './app.json';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

AppRegistry.registerComponent(appName, () => NotificationInitialize);
