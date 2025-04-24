import {StyleSheet} from 'react-native';
import {myfonts} from '../assets/Fonts';
const styles = StyleSheet.create({
	mainTxt: {
		fontFamily: myfonts.Medium,
		textAlign: 'left',
		fontSize: 16,
		//: 500,
		margin: 4,
		color: '#334155',
	},
	subTxt: {
		fontFamily: myfonts.Regular,
		textAlign: 'left',
		fontSize: 14,
		//: 400,
		margin: 4,
		color: '#64748B',
	},
});
export default styles;
