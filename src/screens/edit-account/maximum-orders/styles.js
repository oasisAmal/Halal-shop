import {StyleSheet} from 'react-native';
import {myfonts} from '../../../assets/Fonts';
import myColors from '../../../styles/myColors';

const orderstyles = StyleSheet.create({
	subtxt: {
		fontFamily: myfonts.Regular,
		fontSize: 14,
		//: 400,
		lineHeight: 21,
		letterSpacing: 0,
		textAlign: 'left',
		color: myColors.slate700,
		marginBottom: 2,
	},
});
export default orderstyles;
