import React, {NativeModules} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ASYNC_STORAGE_KEYS from './AsyncStorageKeys';
import I18n from 'react-native-i18n';
import {useDispatch} from 'react-redux';
import {setToken} from '../store/reducers';
import RNRestart from 'react-native-restart';

// import I18n from 'i18n-js';
//let isTestingMode = true;
export let isTestingMode = false;
// Create axios client, pre-configured with baseURL
const APIKit = axios.create({
	// baseURL: 'https://testing.zabehaty.uae.zabe7ti.website/api/',
	timeout: 160000,
	//adminURL: 'https://testing.zabehaty.uae.zabe7ti.website/',
	// isTestingMode: isTestingMode,
});
// let token = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.AuthToken);
// APIKit.defaults.headers.common.Authorization = `Bearer ${token}`;

export const changeURL = async (country, appType = 'ZABEHA') => {
	// if (appType == 'ZABEHA') {

	// let testAPIUrl = 'https://testing.zabehaty.uae.zabe7ti.website/api/';
	let testAdminUrl = 'https://testing.zabehaty.uae.zabe7ti.website/';

	// let testAdminUrl = 'http://3.20.6.42/elsouq_asem_test/zabehaty/public/';
	let testAPIUrl = testAdminUrl;
	let testPublicAPIUrl = testAdminUrl;

	let liveAdminUrl = '';
	let countryCode = '';
	let liveUrl = '';
	//alert('input country is ' + country + ' --- ');
	switch (country) {
		case 1:
			countryCode = 'om';

			break;
		case 2:
			countryCode = 'sa';
			break;

		case 3:
			countryCode = 'uae';

		default:
			countryCode = 'uae';

			break;
	}
	// alert('input country is ' + country + ' --- ' + countryCode);
	liveUrl = 'https://zabehaty.' + countryCode + '.zabe7ti.website/';

	liveAdminUrl = 'https://zabehaty.' + countryCode + '.zabe7ti.website/';
	//console.log(liveUrl);

	let base_url = isTestingMode ? testAPIUrl : testAPIUrl; //liveUrl;
	//alert(base_url);
	try {
		//await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.CurrentCountry);
		// console.log('emoved item before ');
		await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.BaseURL, base_url);
		// props.navigation.push('Login');
	} catch (e) {
		alert('Failed to save CurrentCountry to the storage');
	}

	base_url = '';
	testAPIUrl = '';
	testAdminUrl = '';
	liveAdminUrl = '';
	countryCode = '';
	liveUrl = '';
	testPublicAPIUrl = '';
	//alert(APIKit.defaults.baseURL);
};

export const getURL = () => {
	return APIKit.defaults.baseURL;
};
export const getadminURL = () => {
	return APIKit.defaults.adminURL;
};

const GOOGLE_MAPS_APIKEY = 'AIzaSyBFCnlrpNKXtVn8YROYBO8N52SRzOhP8JA';
// Set JSON Web Token in Client to be included in all calls
export const setClientToken = token => {
	console.log(token + ' token ');
	APIKit.defaults.headers.common.Authorization = `Bearer ${token}`;
	APIKit.defaults.headers.common.Version = '6.4';
	APIKit.defaults.headers.common['App-Version'] = '6.4';
	APIKit.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

	APIKit.interceptors.request.use(function (config) {
		config.headers.Authorization = `Bearer ${token}`;
		return config;
	});
};
export const setAppLanguage = language => {
	APIKit.defaults.headers.common.lang = `${language}`;
	//I18n.locale = language;
};
export const setBranchId = branchId => {
	APIKit.defaults.headers.common['branch-id'] = branchId;
};

export const removeBranchId = () => {
	APIKit.defaults.headers.common['branch-id'] = undefined;
};

export const setEmirateId = emirateId => {
	APIKit.defaults.headers.common['emirate-id'] = emirateId;
};

export const removeEmirateId = () => {
	APIKit.defaults.headers.common['emirate-id'] = undefined;
};

export const setRegionId = regionId => {
	APIKit.defaults.headers.common['region-id'] = regionId;
};

export const removeRegionId = () => {
	APIKit.defaults.headers.common['region-id'] = undefined;
};

export const clearCache = async () => {
	setClientToken('');
	try {
		await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.DeviceToken);
		await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.AuthToken);
	} catch (e) {
		console.log(e);
	}

	RNRestart.Restart();
};

APIKit.interceptors.response.use(
	response => {
		//  console.log('Interceptors response ===> ', response);
		return response;
	},
	error => {
		if (error.response && error.response.status === 401) {
			clearCache();
		}
		console.log('Interceptors error ===> ', error.response);
		return Promise.resolve({error});
	},
);

APIKit.interceptors.request.use(async function (config) {
	let url = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.BaseURL);
	let token = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.AuthToken);

	// config.baseURL = url ? url : 'https://zabehaty.uae.zabe7ti.website/';
	config.baseURL = url ? url : 'https://testing.zabehaty.uae.zabe7ti.website/';
	if (token != null) {
		//console.log('token is available=>>>>' + token);
		config.headers.Authorization = `Bearer ${token}`;
	}
	// console.log(
	//   ' im config.baseURL ===============================================',
	// );
	// console.log(config.baseURL);
	url = '';
	token = '';
	return config;
});

export default APIKit;
