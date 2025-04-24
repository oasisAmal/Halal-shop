import {StyleSheet} from 'react-native';
import myColors from './myColors';
import {myfonts} from '../assets/Fonts';

const styles = StyleSheet.create({
	title: {
		textAlign: 'left',
		fontFamily: myfonts.Bold,
		fontSize: 20,
		//: 600,
		lineHeight: 30,
		color: myColors.slate800,
		letterSpacing: 0,
		marginBottom: 4,
	},
	subtitle: {
		textAlign: 'left',
		paddingBottom: 4,
		fontSize: 14,
		//: 400,
		color: myColors.slate600,
		fontFamily: myfonts.Medium,
		lineHeight: 21,
		letterSpacing: 0,
		marginBottom: 24,
	},
});

export default styles;
