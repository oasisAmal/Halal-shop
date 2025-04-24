import {StyleSheet} from 'react-native';

import myColors from '../../styles/myColors';
import {myfonts} from '../../assets/Fonts';

const listSingleStyles = StyleSheet.create({
	selectedTxt: {
		fontFamily: myfonts.Bold,
		fontSize: 12,
		//: 700,
		lineHeight: 18,
		textAlign: 'left',
		color: myColors.slate700,
	},
});
export default listSingleStyles;
