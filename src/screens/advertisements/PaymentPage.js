import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, I18nManager} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import giftstyles from '../gifts/styles';
import SaveButton from '../../components/save-button';
import {ScrollView} from 'react-native-gesture-handler';
import ad_styles from './styles';
import commonstyles from '../../styles/defultStyles';
import {strings} from '../../i18n';

const PaymentPage = props => {
	const {item} = props.route.params;

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

	const [enableBlur, setEnableBlur] = React.useState(false);
	const [paymentLink, setPaymentLink] = useState(undefined);
	const [price, setPrice] = useState(0);

	useEffect(() => {
		if (item) {
			setPaymentLink(item.payment_link);
			setPrice(item.price);
		}
	}, [item]);

	return (
		<View
			style={[
				giftstyles.container,
				{
					opacity: enableBlur ? 0.2 : 1,
				},
			]}>
			<ScrollView>
				<View>
					<View style={[giftstyles.formView, {marginTop: 24}]}>
						{/* <View style={ad_styles.totalView}>
							<View style={{flex: 0.5}}>
								<Text style={ad_styles.paymentTxt}>{strings('Advertisment Price')}</Text>
							</View>
							<View style={{flex: 0.5, flexDirection: 'row-reverse'}}>
								<Text style={ad_styles.paymentTxt}>AED</Text>
								<Text style={[ad_styles.paymentTxt, ad_styles.currency]}>{parseFloat(price).toFixed(2)}</Text>
							</View>
						</View> */}
						{/* <View style={ad_styles.totalView}>
							<View style={{flex: 0.5}}>
								<Text style={ad_styles.paymentTxt}>Pop Up Total</Text>
							</View>
							<View style={{flex: 0.5, flexDirection: 'row-reverse'}}>
								<Text style={ad_styles.paymentTxt}>AED</Text>
								<Text style={[ad_styles.paymentTxt, ad_styles.currency]}>20.00</Text>
							</View>
						</View> */}
						{/* <View style={ad_styles.hr}></View> */}
						<View style={ad_styles.totalView}>
							<View style={{flex: 0.5}}>
								<Text style={[ad_styles.paymentTxt, ad_styles.total]}>{strings('Advertisment Price')}</Text>
							</View>
							<View style={{flex: 0.5, flexDirection: 'row-reverse'}}>
								<Text style={[ad_styles.paymentTxt, {}]}>AED</Text>
								<Text style={[ad_styles.paymentTxt, ad_styles.total]}>{parseFloat(price).toFixed(2)}</Text>
							</View>
						</View>
					</View>
					<View style={[giftstyles.formView, {paddingBottom: 48}]}>
						<Text style={ad_styles.paymentMethodTxt}>Payment Method</Text>
						<Text style={[ad_styles.paymentTxt, commonstyles.mb16]}>Credit / Debit Card</Text>
						<View style={{flexDirection: 'row'}}>
							<Image style={ad_styles.paymentImgs} source={require('../../../assets/images/visa.png')} />
							<Image style={ad_styles.paymentImgs} source={require('../../../assets/images/paypal.png')} />
							<Image style={ad_styles.paymentImgs} source={require('../../../assets/images/apple-pay.png')} />
						</View>
					</View>
					<SaveButton
						label={strings('Pay now')}
						handlePress={() => props.navigation.navigate('OnlinePayment', {link: item.payment_link})}
					/>
					{/* <SaveButton label="Payment Failed" handlePress={() => props.navigation.navigate('PaymentFailed')} /> */}
				</View>
			</ScrollView>
		</View>
	);
};

export default PaymentPage;
