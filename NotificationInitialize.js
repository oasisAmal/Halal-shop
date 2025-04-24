import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
// import {useDispatch} from 'react-redux';

// Components
import App from './App';

// Utils
import APIKit from './src/utils/APIKit';
import ASYNC_STORAGE_KEYS from './src/utils/AsyncStorageKeys';

//
import {Alert} from 'react-native';
import {notificationPermission} from './src/utils/Permissions';
import {setOrderReceivedAlert, setOrderStatusChangedAlert} from './src/mutils';
const NotificationInitialize = () => {
	// const dispatch = useDispatch();

	const [pushNotificationPermissionEnded, setPushNotificationPermissionEnded] = useState(false);
	useEffect(() => {
		notificationPermission().then(r => {
			//alert('response' + r);
			getFcmToken();
		});
		console.disableYellowBox = true;
		//requestUserPermission();
	}, []);

	useEffect(() => {
		messaging().onNotificationOpenedApp(remoteMessage => {
			console.log('onNotificationOpenedApp');
			console.log('Notification caused app to open from background state:', remoteMessage);
		});

		messaging().setBackgroundMessageHandler(async remoteMessage => {
			console.log('setBackgroundMessageHandler');
			console.log('Message handled in the background!', remoteMessage);
			handleNotificationData(remoteMessage);
		});

		messaging()
			.getInitialNotification()
			.then(async remoteMessage => {
				console.log('onNotificationOpenedApp');
				console.log('Notification caused app to open from close state:', remoteMessage);
				if (remoteMessage) {
					handleNotificationData(remoteMessage);
				}
			});

		messaging().onMessage(async remoteMessage => {
			console.log('onMessage');
			console.log(remoteMessage);
			let message_body = remoteMessage?.notification?.body;

			// Get the message title
			let message_title = remoteMessage?.notification?.title;

			handleNotificationData(remoteMessage);

			Alert.alert(message_title, message_body);
		});
	}, []);

	const handleNotificationData = notification => {
		if (notification.data?.type == 'normal' || notification.data?.type == 'thirty_min') {
			setOrderReceivedAlert('true');
		}
		if (notification.data?.type == 'change_status') {
			// saveNewOrdersCount(2);
			// updateOrderBadgeCount();
			setOrderStatusChangedAlert(JSON.stringify(notification.data));
		}
	};
	const getFcmToken = async () => {
		try {
			const fcmToken = await messaging().getToken();
			if (fcmToken) {
				//alert(fcmToken);
				try {
					await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.DeviceToken, fcmToken);
				} catch (e) {
					// saving error
					console.log(e);
				}

				setPushNotificationPermissionEnded(true);

				console.log(fcmToken);
				console.log('Your Firebase Token is:', fcmToken);
			} else {
				console.log('Failed', 'No token received');
			}
		} catch (e) {
			// saving error
			console.log(e);

			setPushNotificationPermissionEnded(true);
		}
	};

	return <React.Fragment>{pushNotificationPermissionEnded ? <App /> : null}</React.Fragment>;
};

export default NotificationInitialize;
