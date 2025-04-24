import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, I18nManager, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import SubHeader from '../../components/partials/Subheader';
import Form from './Form';

import giftstyles from '../gifts/styles';
import {strings} from '../../i18n';

const CreateAd = props => {
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
						{strings('Create Ad')}
					</Text>
				</TouchableOpacity>
			),
			headerRight: () => null,
		});
	}, []);

	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView>
				<View style={[giftstyles.container, {}]}>
					<SubHeader title={strings('Create Advertisement')} subtitle="Home / Advertisement / Create" />
					<Form navigation={props.navigation} />
					{/* <SaveButton
						label="Go For Payment"
						handlePress={() => props.navigation.navigate('PaymentPage')}
					/>
					<SaveButton label="Back" />
					<ApprovedButtons
						handlePress={() => props.navigation.navigate('Approved')}
					/>
					<PendingButtons
						handlePress={() => props.navigation.navigate('Pending')}
					/>
					<DeclinedButtons /> */}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CreateAd;
