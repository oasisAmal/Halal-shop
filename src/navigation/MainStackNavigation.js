import React from 'react';
import {I18nManager, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../utils/AsyncStorageKeys';
import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './Drawer';
import AuthStack from './Stacks/AuthStack';
import CountyStack from './Stacks/CountyStack';
import {connect} from 'react-redux';
import {setToken, setOrders} from '../store/reducers';
import PushNotification from 'react-native-push-notification';
import I18n from 'react-native-i18n';
import {setAppLanguage} from '../utils/APIKit';
import CustomActivityIndicator from '../components/common/CustomActivityIndicator';
import APIKit from '../utils/APIKit';

const linking = {
	prefixes: ['zabehatyshopapp://'],
	config: {
		//initialRouteName: 'Home',
		screens: {
			Orders: 'orders',
		},
	},
};
const MainStackNavigation = props => {
	return (
		<NavigationContainer linking={linking}>
			<MyDrawer setAuthenticated={props.setAuthenticated} />
		</NavigationContainer>
	);
};

let Main = props => {
	const [authenticated, setAuthenticated] = React.useState(false);
	const [countrySelected, setCountrySelected] = React.useState(false);
	const [selectedLanguage, setSelectedLanguage] = React.useState('');

	const [localToken, setlocalToken] = React.useState('');
	const [localCountry, setlocalCountry] = React.useState('');

	const [isLoading, setisLoading] = React.useState(true);

	//

	const checkCountryStatus = async () => {
		//alert('im checking for  CurrentCountry  ');
		//await AsyncStorage.clear();
		try {
			const value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.CurrentCountry);
			// console.log('value of CurrentCountry ' + value);
			if (value !== null) {
				setCountrySelected(true);
				//setisLoading(false);
				// alert('current CurrentCountry is ' + value);
				// fetch user details and set
			} else {
				setCountrySelected(false);
				// not authenticated , navigate to login
				// alert('no country chosen ');
			}
		} catch (e) {
			alert('Failed to fetch the input from storage');
		}
		//setisLoading(false);
	};

	const checkAuthStatus = async () => {
		try {
			const value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.AuthToken);
			if (value !== null) {
				//alert('current token is ' + value);
				props.setToken(value);
				//loadOrders();
				setAuthenticated(true);

				// fetch user details and set
			} else {
				// not authenticated , navigate to login
				setAuthenticated(false);
			}
		} catch (e) {
			alert('Failed to fetch the token from storage');
		}
		// setisLoading(false);
	};

	const checkLanguageSupport = async () => {
		const locale_value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.CurrentLocale);

		if (locale_value !== null) {
			//alert(locale_value + ' im local storage locale ');
			if (locale_value == 'ar') {
				I18n.locale = 'ar';
				await I18nManager.forceRTL(true);
				await I18nManager.allowRTL(true);
				setAppLanguage('ar');
			} else {
				I18n.locale = 'en';

				await I18nManager.forceRTL(false);
				await I18nManager.allowRTL(false);
				setAppLanguage('en');
			}
		} else {
			//alert('no locale found ');
			I18n.locale = 'en';
			await I18nManager.forceRTL(false);
			await I18nManager.allowRTL(false);
			await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.CurrentLocale, 'en');

			setAppLanguage('en');
		}
		setisLoading(false);
	};

	let createChannel = () => {
		PushNotification.createChannel(
			{
				channelId: 'thirty_min', // (required)
				channelName: 'thirty_min', // (required)
				channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
				playSound: true, // (optional) default: true
				soundName: 'fcm_sound.mp3', // (optional) See `soundName` parameter of `localNotification` function
				//importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
				vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
			},
			created => console.log(`createChannel thirty_min returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
		);
		PushNotification.createChannel(
			{
				channelId: 'normal', // (required)
				channelName: 'normal', // (required)
				channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
				playSound: true, // (optional) default: true
				soundName: 'android_sound.mp3', // (optional) See `soundName` parameter of `localNotification` function
				// importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
				vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
			},
			created => console.log(`createChannel normal returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
		);
		PushNotification.createChannel(
			{
				channelId: 'change_status', // (required)
				channelName: 'change_status', // (required)
				channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
				playSound: true, // (optional) default: true
				soundName: 'android_sound.mp3', // (optional) See `soundName` parameter of `localNotification` function
				// importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
				vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
			},
			created => console.log(`createChannel change_status returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
		);
	};

	React.useEffect(() => {
		//AsyncStorage.clear();
		checkCountryStatus();
		checkAuthStatus();
		createChannel();

		checkLanguageSupport();
		// do stuff while splash screen is shown
		// After having done stuff (such as async tasks) hide the splash screen
		SplashScreen.hide();
	}, []);

	React.useEffect(() => {
		if (props.country !== null && props.country !== '') {
			//alert(props.country + ' props.country is changed ');
			checkCountryStatus();
		}
	}, [props.country]);

	React.useEffect(() => {
		if (props.token !== null && props.token !== '') {
			//alert(props.token + ' props.token is changed ');
			checkAuthStatus();
		}
	}, [props.token]);

	if (isLoading) {
		// return <ActivityIndicator style={{marginTop: 200}} />;
		return <CustomActivityIndicator />;
	} else {
		if (props.token) {
			//alert(props.token + ' im country');
			return <MainStackNavigation setAuthenticated={setAuthenticated} />;
		} else {
			if (countrySelected) {
				return (
					<NavigationContainer>
						<AuthStack setAuthenticated={setAuthenticated} />
					</NavigationContainer>
				);
			} else {
				return (
					<NavigationContainer>
						<CountyStack setAuthenticated={setAuthenticated} />
					</NavigationContainer>
				);
			}
		}
	}
};

const mapStateToProps = state => {
	return {
		token: state.token,
		country: state.country,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		setToken: token => dispatch(setToken(token)),
		setOrders: latestOrders => dispatch(setOrders(latestOrders)),
	};
}

export default Main = connect(mapStateToProps, mapDispatchToProps)(Main);
