import {StyleSheet} from 'react-native';
import {myfonts} from '../assets/Fonts';
import myColors from './myColors';
import {theme_color} from '../mutils';

const buttonStyles = StyleSheet.create({
	smallBtn: {
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 4,
		marginHorizontal: 10,
	},
	longBtn: {
		backgroundColor: theme_color,
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 6,
		height: 48,
		//marginHorizontal: 16 ,
		marginBottom: 16,
		flexDirection: 'row',
	},

	longBtnTxt: {
		fontFamily: 'Inter-Medium',
		color: 'white',
		textAlign: 'center',
		fontSize: 16,
		//: 500,
	},

	export: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 'auto',
		marginLeft: 'auto',
	},

	opBtn: {width: 24, height: 24, padding: 6},
	btnContainer: {
		width: 102,
		height: 40,
		paddingHorizontal: 6,
		borderRadius: 4,
		borderWidth: 0.78,
		marginHorizontal: 4,
		marginTop: 8,
		marginBottom: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	btnTxt: {
		fontFamily: myfonts.Regular,
		fontSize: 16,
		//: 500,
		lineHeight: 24,
		letterSpacing: 0,
		textAlign: 'left',
		color: myColors.slate_black_900,
	},
	img: {width: 24, height: 24, marginRight: 8},
	counterContainer: {
		width: 120,
		height: 40,
		borderRadius: 4,
		borderWidth: 0.78,
		marginHorizontal: 4,
		marginTop: 8,
		marginBottom: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

export default buttonStyles;
