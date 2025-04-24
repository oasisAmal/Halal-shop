import {StyleSheet} from 'react-native';
import {screenHeight, screenwidth, theme_color} from '../../mutils';
import {myfonts} from '../../../assets/Fonts';
import myColors from '../../../styles/myColors';

const styles = StyleSheet.create({
	mainview: {
		width: 46,
		height: 45,
		paddingVertical: 12,
		paddingHorizontal: 19,
		borderRadius: 6,
		//margin: 8,
		backgroundColor: myColors.indigo500,
	},
	container: {
		//width: 361,
		height: 53,
		padding: 4,
		borderRadius: 6,
		marginBottom: 14,
		backgroundColor: myColors.clrWhite,
	},
	label: {
		fontFamily: myfonts.Regular,
		fontSize: 14,
		//: 400,
		textAlign: 'left',
		color: myColors.slate_black_900,
		margin: 12,
	},
	labelActive: {
		fontFamily: myfonts.Bold,
		fontSize: 14,
		//: 700,
		textAlign: 'left',
		color: myColors.slate_black_900,
		margin: 12,
	},
	number: {
		fontFamily: myfonts.Regular,
		fontSize: 14,
		//: 500,
		textAlign: 'left',
		color: myColors.clrWhite,
	},
});
export default styles;
