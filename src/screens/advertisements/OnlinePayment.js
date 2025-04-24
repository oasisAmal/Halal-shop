import React, {useEffect, useRef} from 'react';
import {SafeAreaView, View, I18nManager, TouchableOpacity, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';

import {strings} from '../../i18n';

// import {StackActions} from '@react-navigation/native';

const OnlinePayment = props => {
	const {link} = props.route.params;

	// let webView = useRef();

	useEffect(() => {
		props.navigation.setOptions({
			headerTitle: () => null,
			headerLeft: () => (
				<TouchableOpacity
					activeOpacity={0.8}
					style={{
						paddingStart: 16,
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row',
					}}
					onPress={() => {
						props.navigation.goBack();
					}}>
					<Icon name={I18nManager.isRTL ? 'arrow-forward-outline' : 'arrow-back-outline'} size={32} color="black" />
					<View style={{width: 10}} />
					<Text
						style={{
							//: 700,
							fontSize: 20,
							color: '#03050D',
						}}>
						{strings('Payment')}
					</Text>
				</TouchableOpacity>
			),
			headerRight: () => null,
		});
	}, []);

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
			{link !== '' && (
				<WebView
					// ref={webView}
					style={{flex: 1, backgroundColor: '#FFFFFF'}}
					source={{uri: `${link}`}}
					// onNavigationStateChange={_onNavigationStateChange}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					// onMessage={event => _onMessage(event)}
					enableApplePay={true}
					//injectedJavaScript={jsCode ? jsCode : undefined}
				/>
			)}
		</SafeAreaView>
	);
};

export default OnlinePayment;
