import {StyleSheet} from 'react-native';
import myColors from '../../styles/myColors';
import {myfonts} from '../../assets/Fonts';

const listPriceStyles = StyleSheet.create({
	title: {
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 700,
		lineHeight: 18,
		letterSpacing: 0,
		textAlign: 'center',
		color: myColors.slate700,
		marginBottom: 2,
		marginTop: -2,
	},
	subtitle: {
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 400,
		lineHeight: 18,
		letterSpacing: 0,
		textAlign: 'center',
		color: myColors.slate600,
	},
});
export default listPriceStyles;
