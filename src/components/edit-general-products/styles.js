import {StyleSheet} from 'react-native';
import {screenHeight, screenwidth} from '../../../config';
import {myfonts} from '../../assets/Fonts';
import myColors from '../../styles/myColors';

export default styles = StyleSheet.create({
	subTxt: {
		fontFamily: myfonts.Medium,
		fontSize: 16,
		//: 500,
		textAlign: 'left',
		marginBottom: 8,
		color: myColors.slate600,
	},
	productTxt: {
		fontFamily: myfonts.Bold,
		fontSize: 20,
		//: 600,
		color: '#1E293B',
	},
	closeImg: {
		width: 24,
		height: 24,
		right: -36,
		top: 6,
	},
	title: {flexDirection: 'row', marginBottom: 24},
	modalView: {
		backgroundColor: 'white',
		paddingHorizontal: 24,
		paddingTop: 24,
		height: screenHeight,
		width: screenwidth - 17,
	},
});
