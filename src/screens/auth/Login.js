import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import loginstyles from './styles';
import SaveButton from '../../components/save-button';
import myColors from '../../styles/myColors';
import Username from '../../components/common/Username';
import PasswordInput from '../../components/common/PasswordInput';
import {LoginService} from '../../services/Auth';
import {theme_color} from '../../mutils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ASYNC_STORAGE_KEYS from '../../utils/AsyncStorageKeys';
import {connect} from 'react-redux';
import {setToken, setOrders, setShops} from '../../store/reducers';
import CustomActivityIndicator from '../../components/common/CustomActivityIndicator';
import APIKit from '../../utils/APIKit';
import {setClientToken, setAppLanguage} from '../../utils/APIKit';
import {strings} from '../../i18n';
import I18n from 'react-native-i18n';
import {UpdateFCMTokenService} from '../../services/NotificationService';
import orders from '../../components/orders';
import {toastMessage} from '../../components/utils/functions/commonFunctions';

let Login = props => {
	const [isFilled, setFilled] = React.useState(false);
	// const [username, setUsername] = React.useState('z chicken');
	// const [password, setPassword] = React.useState('456456456');
	// const [username, setUsername] = React.useState('farah');
	// const [password, setPassword] = React.useState('123456');
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [loading, setLoading] = React.useState(false);

	let checkAllFilled = () => {
		if (username == '' || password == '') {
			setFilled(false);
		} else {
			setFilled(true);
		}
	};

	let onSuccess = async response => {
		//alert('success ' + response.data);

		if (response?.data?.status == 200) {
			setClientToken(response.data.data.token);
			props.setToken(response.data.data.token);
			props.setShops(response.data.data.shops);

			// check current language available , if so set it to that

			//setAppLanguage('en');

			try {
				await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.AuthToken, response.data.data.token);
				//props.navigation.push('Orders');
			} catch (e) {
				alert('Failed to save the data to the storage');
			}
			updateDeviceToken();
			setLoading(false);
		} else {
			setLoading(false);
			toastMessage(strings('Incorrect username password details'));
		}

		//loadOrders();
	};

	let loadOrders = async () => {
		try {
			const response = await APIKit.post(`shops_app/orders`);
			props.setOrders(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	// update the device token
	let updateDeviceToken = async () => {
		try {
			let value = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.DeviceToken);
			if (value !== null) {
				//alert(value + ' DeviceToken value ');
				UpdateFCMTokenService(
					value,
					() => toastMessage('success token updated '),
					// () => console.log('success token updated '),
					() => console.log('token update failed'),
				);
			} else {
				alert('no value for device token ');
			}

			//props.navigation.push('Orders');
		} catch (e) {
			alert('Failed to save the data to the storage');
		}
	};

	let onFailure = error => {
		//alert(error);
		setLoading(false);
		console.log(error);
		toastMessage(strings('Incorrect username password details'));
	};
	React.useEffect(() => {
		//I18n.locale = 'ar';
		checkAllFilled();
	}, [username, password]);

	const handleLogin = () => {
		setLoading(true);
		props.setOrders([]);
		let fd = {
			username: username,
			password: password,
		};
		LoginService(fd, onSuccess, onFailure);
	};
	if (loading) {
		return <CustomActivityIndicator />;
	} else {
		return (
			<View style={loginstyles.container}>
				<Image source={require('../../../assets/images/HalalLogo.png')} style={loginstyles.logo} />
				<Text style={loginstyles.headTxt}>{strings('Good to see you') + '!'}</Text>
				<Text style={loginstyles.subTxt}>{strings('Let us continue the journey')}.</Text>
				<View style={loginstyles.formView}>
					<Username handlePress={username => setUsername(username)} username={username} />
					<PasswordInput handlePress={password => setPassword(password)} password={password} />

					<Text style={[loginstyles.forgotTxt, loginstyles.mb40]} onPress={() => props.navigation.push('ForgotPassword')}>
						{`${strings('Forgot Password')}?`}
					</Text>

					<Pressable>
						<SaveButton
							label={strings('Sign In')}
							bgcolor={isFilled ? theme_color : myColors.slate400}
							handlePress={() => handleLogin()}
							disabled={isFilled ? false : true}
						/>
					</Pressable>
				</View>
			</View>
		);
	}
};

const mapStateToProps = state => {
	return {
		token: state.token,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		setToken: token => dispatch(setToken(token)),
		setOrders: latestOrders => dispatch(setOrders(latestOrders)),
		setShops: shops => dispatch(setShops(shops)),
	};
}

export default Login = connect(mapStateToProps, mapDispatchToProps)(Login);
