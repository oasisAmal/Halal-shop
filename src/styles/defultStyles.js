import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {theme_color} from '../mutils';
import {myfonts} from '../assets/Fonts';
import myColors from './myColors';

const commonstyles = StyleSheet.create({
	center: {
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	mb12: {
		marginBottom: 12,
	},
	formView: {
		paddingHorizontal: 16,
		paddingTop: 16,
		borderRadius: 8,
		margin: 2,
		backgroundColor: myColors.clrWhite,
		marginBottom: 24,
	},
	flex50: {
		flex: 0.5,
	},
	subheader: {
		textAlign: 'left',
		fontFamily: myfonts.Bold,
		fontSize: 18,
		//: 600,
		lineHeight: 27,
		marginBottom: 24,
		color: myColors.slate800,
	},
	label: {
		fontFamily: myfonts.Medium,
		fontSize: 16,
		//: 500,
		lineHeight: 24,
		textAlign: 'left',
		color: myColors.slate600,
	},
	mainView: {
		flexDirection: 'row',
		height: 36,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 6,
		margin: 4,
	},
	dropdownStyle: {
		zIndex: 100,
		//paddingVertical: 12,
		borderRadius: 6,
		border: 1,
		marginBottom: 16,
		marginTop: -8,
		backgroundColor: 'white',
		fontSize: 12,
		height: 254,

		padding: 8,
		borderRadius: 8,
		borderWidth: 1,
		//margin: 8,
		borderColor: '#E2E8F0',
		//elevation: 4,
	},

	mb16: {
		marginBottom: 16,
	},
	mh16: {
		marginHorizontal: 16,
	},
	flewRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	longBtn: {
		backgroundColor: theme_color,
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 6,
		//width: 361,
		height: 48,
		marginHorizontal: 16,
		marginBottom: 16,
		flexDirection: 'row',
	},
	longBtnTxt: {
		fontFamily: 'Inter-Medium',
		color: 'white',
		textAlign: 'center',
		fontSize: 16,
		//: 500,
		marginHorizontal: 8,
	},
	mh16: {
		marginHorizontal: 16,
		marginBottom: 8,
	},
	mainTxt: {
		fontFamily: myfonts.Regular,
		fontSize: 16,
		//: 500,

		letterSpacing: 0,
		textAlign: 'left',
		color: '#475569',
		marginBottom: 8,
	},
	mainTxt1: {
		fontFamily: 'Inter-Regular',
		fontSize: 16,
		//: 500,
		letterSpacing: 0,
		textAlign: 'left',
		color: '#475569',
		marginRight: 16,
		marginLeft: -4,
	},
	input: {
		width: Dimensions.get('screen').width - 64,
		height: 42,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: '#E2E8F0',
		marginBottom: 8,
		//marginTop: 8,
		backgroundColor: 'white',
	},
	rowTextStyle: {
		fontSize: 12,
		textAlign: 'left',
		color: '#475569',
		fontFamily: myfonts.Regular,
	},
	subtxt: {
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 400,
		textAlign: 'left',
		marginHorizontal: 16,
		marginVertical: 12,
	},
	underlinedata: {
		color: myColors.slate500,
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 400,
		textAlign: 'left',
		lineHeight: 18,
		letterSpacing: 0,
	},
});

export default commonstyles;
