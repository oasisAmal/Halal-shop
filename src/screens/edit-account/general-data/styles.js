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
});
export default genDataStyles;
