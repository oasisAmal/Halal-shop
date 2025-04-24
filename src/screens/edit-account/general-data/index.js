import React, {useEffect, useState} from 'react';
import {View, Text, I18nManager, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import styles from '../../edit-product-details/styles';
import genDataStyles from './styles';
import SubHeader from '../../../components/partials/Subheader';
import PlaceInformation from './PlaceInformation';
import MenuInformation from './MenuInformation';
import {toggleBlur} from '../../../store/reducers';
import Form from './Form';
import Appointment from './Appointment';
import {strings} from '../../../i18n';

let GeneralData = props => {
	const {shop} = props.route.params;

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
						{strings('General Data')}
					</Text>
				</TouchableOpacity>
			),
			headerRight: () => null,
		});
	}, []);

	return (
		<ScrollView>
			<View
				style={[
					styles.container,
					{
						marginBottom: 40,
						opacity: props.enableBlur ? 0.2 : 1,
					},
				]}>
				<SubHeader title={strings('General Data')} subtitle={`Home  /  Edit Shop Details / ${shop.name} / General Data`} />
				<Form shop={shop} />

				<View style={{marginBottom: 12}}>
					<Text
						style={[
							genDataStyles.title,
							{
								marginLeft: 4,
							},
						]}>
						{strings('Information About The Place')}
					</Text>
				</View>
				<PlaceInformation shop={shop} toggleBlur={props.toggleBlur} />

				<View style={{marginBottom: 12}}>
					<Text
						style={[
							genDataStyles.title,
							{
								marginLeft: 4,
							},
						]}>
						{strings('Menu')}
					</Text>
				</View>
				<MenuInformation shop={shop} toggleBlur={props.toggleBlur} />

				{/* <HomePageSection /> */}

				<View style={{marginBottom: 12}}>
					<Text
						style={[
							genDataStyles.title,
							{
								marginLeft: 4,
							},
						]}>
						{strings('Appointments')}
					</Text>
				</View>
				<Appointment shop={shop} />
			</View>
		</ScrollView>
	);
};

const mapStateToProps = state => {
	return {
		enableBlur: state.enableBlur,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		toggleBlur: cart_item => dispatch(toggleBlur(cart_item)),
	};
}

export default GeneralData = connect(mapStateToProps, mapDispatchToProps)(GeneralData);
