import {StyleSheet} from 'react-native';
import {myfonts} from '../assets/Fonts';
import myColors from './myColors';

const inputStyles = StyleSheet.create({
	mb16: {
		marginBottom: 16,
	},
	mh16: {
		marginHorizontal: 16,
	},
	input: {
		height: 42,
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: myColors.slate200,
	},
	name: {
		fontFamily: myfonts.Medium,
		fontSize: 16,
		//: 500,
		lineHeight: 24,
		textAlign: 'left',
		color: myColors.slate600,
		marginBottom: 8,
	},
	textarea: {
		paddingBottom: 100,
		paddingHorizontal: 16,
		borderRadius: 6,
		borderWidth: 1,
		marginBottom: 8,
		height: 146,
		borderColor: '#E2E8F0',
	},
});

export default inputStyles;
