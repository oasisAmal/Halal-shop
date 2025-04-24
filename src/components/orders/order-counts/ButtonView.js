import React from 'react';
import {View, Text, StyleSheet, I18nManager} from 'react-native';
import myColors from '../../../styles/myColors';

const ButtonView = props => {
	let {bgcolor, label} = props;
	return (
		<View
			style={[
				styles.btn,
				{
					backgroundColor: bgcolor ? bgcolor : '#B4F6FE',
				},
			]}>
			<Text style={styles.btnTxt}> {label ? label : ''}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	btn: {
		//marginTop: 16,
		marginBottom: 17,
		marginRight: 8,
		paddingVertical: 12,
		paddingHorizontal: 18,

		flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
		borderRadius: 6,
	},
	btnTxt: {
		fontFamily: 'Inter-Medium',
		color: 'white',
		textAlign: 'center',
		fontSize: 14,
		//: 400,
		lineHeight: 21,
		letterSpacing: 0,
		textAlign: 'left',
		color: myColors.slate_black_900,
	},
});

export default ButtonView;
