import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, I18nManager, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import giftstyles from '../gifts/styles';

import SaveButton from '../../components/save-button';
import SubHeader from '../../components/partials/Subheader';
import {ApprovedButtons, DeclinedButtons, PendingButtons} from '../../components/common/PaymentButtons';
import Form from './Form';
import {GET_AD} from '../../services/AdsService';
import {strings} from '../../i18n';

const CheckDetails = props => {
	const {item} = props.route.params;

	const [adDetails, setAdDetails] = useState(undefined);

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
						{strings('Update Ad')}
					</Text>
				</TouchableOpacity>
			),
			headerRight: () => null,
		});
	}, []);

	const fetchAd = () => {
		GET_AD(item.id, response => {
			setAdDetails(response.data.data);
		});
	};

	useEffect(() => {
		if (item) {
			fetchAd();
		}
	}, [item]);

	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView>
				<View style={[giftstyles.container, {}]}>
					<SubHeader title={`${strings(`Advertisement Id:`)} ${item ? item.id : ''}`} subtitle="Home / Advertisement" />
					<Form adDetails={adDetails} navigation={props.navigation} />
					{/* {status == 'Approved' && (
						<ApprovedButtons
						handlePress={() => props.navigation.navigate('Approved')}
						/>
					)}
					{status == 'declined' && <DeclinedButtons />}
					{status == 'pending' && (
						<PendingButtons
						handlePress={() => props.navigation.navigate('Pending')}
						/>
					)}

					<SaveButton
						label="Back"
						handlePress={() => props.navigation.navigate('AdvertisementMain')}
					/> */}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CheckDetails;
