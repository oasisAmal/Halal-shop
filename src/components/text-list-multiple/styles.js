import {StyleSheet} from 'react-native';
import myColors from '../../styles/myColors';
import {myfonts} from '../../assets/Fonts';

const listStyles = StyleSheet.create({
	title: {
		marginRight: 'auto',
		marginLeft: 'auto',
		color: myColors.slate700,
		fontFamily: myfonts.Medium,
		fontSize: 14,
		//: 600,
		lineHeight: 21,
		textAlign: 'center',
	},
	headerView1: {
		height: 62,
		padding: 16,
		backgroundColor: '#FAFAFA',
		borderTopRightRadius: 6,
		borderTopLeftRadius: 6,
	},
	headerView: {
		//height: 252,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: myColors.slate200,
		//backgroundColor: '#FAFAFA',
		marginBottom: 16,
		marginHorizontal: 12,
	},
	item: {
		//width: Fill (152.5px)
		height: 62,
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderColor: myColors.slate200,
		borderWidth: 1,
	},
	itemTxt: {
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 400,
		lineHeight: 18,
		textAlign: 'left',
		color: myColors.slate700,
	},
});
export default listStyles;
