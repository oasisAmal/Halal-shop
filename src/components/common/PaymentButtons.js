import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import myColors from '../../styles/myColors';
import buttonStyles from '../../styles/buttonStyles';
import {strings} from '../../i18n';

const PaymentButtons = props => {
	const {label, icon} = props;
	return (
		<View style={buttonStyles.longBtn}>
			<View style={buttonStyles.export}>
				<Text style={buttonStyles.longBtnTxt}>{label ? label : 'Export Data '}</Text>
				<Image source={icon ? icon : require('../../../assets/images/exportIcon.png')} style={buttonStyles.img} />
			</View>
		</View>
	);
};
export let ApprovedButtons = props => {
	const {label, icon, handlePress} = props;
	return (
		<Pressable onPress={handlePress}>
			<View style={[buttonStyles.longBtn, {backgroundColor: '#87F9BA4D'}]}>
				<View style={buttonStyles.export}>
					<Image source={icon ? icon : require('../../../assets/images/success-green.png')} style={buttonStyles.img} />
					<Text style={buttonStyles.btnTxt}>{label ? label : strings('Approved')}</Text>
				</View>
			</View>
		</Pressable>
	);
};
export let PendingButtons = props => {
	const {label, icon, handlePress} = props;
	return (
		<Pressable onPress={handlePress}>
			<View style={[buttonStyles.longBtn, {backgroundColor: '#6366F10F'}]}>
				<View style={buttonStyles.export}>
					<Image source={icon ? icon : require('../../../assets/images/pending.png')} style={buttonStyles.img} />
					<Text style={buttonStyles.btnTxt}>{label ? label : strings('Pending')}</Text>
				</View>
			</View>
		</Pressable>
	);
};
export let DeclinedButtons = props => {
	const {label, icon} = props;
	return (
		<View style={[buttonStyles.longBtn, {backgroundColor: myColors.slate200}]}>
			<View style={buttonStyles.export}>
				<Image
					source={icon ? icon : require('../../../assets/images/declined.png')}
					style={{width: 24, height: 24, marginRight: 8}}
				/>
				<Text style={buttonStyles.btnTxt}>{label ? label : 'Declined'}</Text>
			</View>
		</View>
	);
};

export default PaymentButtons;
