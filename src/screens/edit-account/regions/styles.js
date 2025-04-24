import {StyleSheet} from 'react-native';
import {myfonts} from '../../../assets/Fonts';
import myColors from '../../../styles/myColors';

const genDataStyles = StyleSheet.create({
	title: {
		textAlign: 'left',
		fontSize: 18,
		//: 600,
		color: myColors.slate800,
		fontFamily: myfonts.Bold,
		lineHeight: 27,
	},
	subtitle: {
		textAlign: 'left',
		fontSize: 12,
		//: 500,
		color: myColors.slate600,
		fontFamily: myfonts.Regular,
		lineHeight: 18,
		letterSpacing: 0,
	},
});
export default genDataStyles;
