import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {theme_color} from './config';

const commonstyles = StyleSheet.create({
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
		fontSize: 16, //: 500
	},
	mh16: {
		marginHorizontal: 16,
		marginBottom: 8,
	},
	mainTxt: {
		fontFamily: 'Inter-Regular',
		fontSize: 16,
		//: 500,
		letterSpacing: 0,
		textAlign: 'left',
		marginHorizontal: 16,
		color: '#475569',
	},
	mainTxt1: {
		fontFamily: 'Inter-Regular',
		fontSize: 16,
		//: 500,
		letterSpacing: 0,
		textAlign: 'left',
		marginRight: 16,
		color: '#475569',
		marginLeft: -4,
	},
	input: {
		width: Dimensions.get('screen').width - 64,
		height: 42,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: '#E2E8F0',
		marginVertical: 16,
		backgroundColor: 'white',
	},
});

export default commonstyles;
