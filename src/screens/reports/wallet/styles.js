import {StyleSheet} from 'react-native';
import {myfonts} from '../../../assets/Fonts';
import myColors from '../../../styles/myColors';

const walletstyles = StyleSheet.create({
	title: {
		fontFamily: myfonts.Bold,
		fontSize: 18,
		//: 600,
		lineHeight: 27,
		textAlign: 'left',
		color: myColors.slate800,
		marginBottom: 16,
	},
});
export default walletstyles;
