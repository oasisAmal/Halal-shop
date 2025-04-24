import {StyleSheet} from 'react-native';
import myColors from '../../styles/myColors';
import {myfonts} from '../../assets/Fonts';

const sizeSelectionStyles = StyleSheet.create({
	selectedViewTxt: {
		textAlign: 'center',
		color: myColors.clrWhite,
		paddingVertical: 6,
	},
	selectedView: {
		flex: 1 / 3,
		backgroundColor: myColors.darkGreen,
		marginVertical: 14,
		borderRadius: 6,
	},
	mainView: {
		flexDirection: 'row',
		flex: 1,
		borderWidth: 1,
		marginHorizontal: 12,
		marginTop: -16,
		marginBottom: 16,
		borderColor: myColors.slate200,
		paddingVertical: 8,
		borderBottomStartRadius: 6,
		borderBottomEndRadius: 6,
	},
	label: {
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 400,
		lineHeight: 18,
		textAlign: 'center',
		paddingVertical: 18,
	},
});
export default sizeSelectionStyles;
