import React, {useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import SaveButton from '../../components/save-button';

import giftstyles from '../gifts/styles';
import ad_styles from './styles';
import {strings} from '../../i18n';

const Pending = props => {
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
					<Icon name="arrow-back-outline" size={32} color="black" />
					<View style={{width: 10}} />
					<Text
						style={{
							//: 700,
							fontSize: 20,
							color: '#03050D',
						}}>
						{strings('Create Ad')}
					</Text>
				</TouchableOpacity>
			),
			headerRight: () => null,
		});
	}, []);

	return (
		<View style={[giftstyles.container]}>
			<View style={{flex: 1}}>
				<View style={ad_styles.successGreenImg}>
					<Image source={require('../../../assets/images/pending.png')} />
				</View>
				<Text style={ad_styles.approvedTxt}>{strings('PendingWithDots')}</Text>
				<Text style={ad_styles.subTxt}>{strings('Your advertisement approval is pending')}</Text>
			</View>

			<View style={{paddingBottom: 20}}>
				<SaveButton label="Back" handlePress={() => props.navigation.navigate('AdvertisementMain')} />
			</View>
		</View>
	);
};

export default Pending;
