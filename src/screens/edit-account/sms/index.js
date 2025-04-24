import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, I18nManager, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../edit-product-details/styles';
import commonstyles from '../../../styles/defultStyles';
import SubHeader from '../../../components/partials/Subheader';
import {ScrollView} from 'react-native-gesture-handler';
import SaveButton from '../../../components/save-button';
import Textarea from '../../../components/common/Textarea';
import APIKit from '../../../utils/APIKit';
import {strings} from '../../../i18n';
import Toast from 'react-native-toast-message';

let SMS = props => {
	const {shop} = props.route.params;

	const [isLoading, setIsLoading] = useState(true);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const [sms, setSMS] = useState('');
	const [smsEN, setSMSEN] = useState('');

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
						{strings('Notification content')}
					</Text>
				</TouchableOpacity>
			),
			headerRight: () => (
				<React.Fragment>{isLoading ? <ActivityIndicator size={'small'} color={'#000'} /> : null}</React.Fragment>
			),
		});
	}, [isLoading]);

	const fetchGeneralData = async () => {
		try {
			setIsLoading(true);
			const response = await APIKit.get(`shopapi/shops_app/account/shops/${shop.id}`);
			if (response && response.data) {
				setSMS(response.data.data.sms);
				setSMSEN(response.data.data.sms_en);

				setIsLoading(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (shop) {
			fetchGeneralData();
		}
	}, [shop]);

	const onSubmit = async () => {
		try {
			const postData = {
				sms: sms,
				sms_en: smsEN,
			};

			setIsSubmitting(true);
			await APIKit.post(`shopapi/shops_app/account/shops/update/general/${shop.id}`, postData);

			Toast.show({
				type: 'success',
				text1: strings('Data has been updated successfully'),
			});

			setIsSubmitting(false);
		} catch (error) {
			console.log(error);
			setIsSubmitting(false);
		}
	};

	return (
		<View style={[styles.container]}>
			<ScrollView>
				<SubHeader
					title={strings('Notification content')}
					subtitle={`Home / Edit Shop Details / ${shop.name} / Notification content`}
				/>
				<View style={styles.formView}>
					{!isLoading ? (
						<React.Fragment>
							<View style={commonstyles.mb16}>
								<Text style={styles.productName}>{strings('Order Conformation SMS')}</Text>
								<Textarea value={sms} onChangeText={txt => setSMS(txt)} />
							</View>
							<View style={commonstyles.mb16}>
								<Text style={styles.productName}>{strings('Order Conformation En')}</Text>
								<Textarea value={smsEN} onChangeText={txt => setSMSEN(txt)} />
							</View>
							<SaveButton isLoading={isSubmitting} handlePress={onSubmit} />
						</React.Fragment>
					) : null}
				</View>
			</ScrollView>
		</View>
	);
};

export default SMS;
