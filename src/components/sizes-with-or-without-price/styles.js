import {StyleSheet} from 'react-native';
import myColors from '../../styles/myColors';
import {myfonts} from '../../assets/Fonts';

const sizePriceStyles = StyleSheet.create({
	label: {
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 400,
		lineHeight: 18,
		textAlign: 'center',
		color: myColors.slate700,
	},
	mainview: {
		flexDirection: 'row',
		// width: 101.67,
		flex: 1 / 3,

		borderWidth: 1,

		borderColor: '#E2E8F0',

		height: 70,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 6,
		margin: 10,
		backgroundColor: '#DAFCF2',
	},
	view1: {
		marginHorizontal: 14,
		borderWidth: 1,
		borderTopWidth: 0,
		marginTop: -16,
		borderColor: myColors.slate200,
		borderBottomEndRadius: 6,
		borderBottomStartRadius: 6,
		borderTopStartRadius: 0,
		borderTopEndRadius: 0,
		marginBottom: 16,
	},

	headerView: {
		height: 63,
		//borderRadius: 6,
		borderWidth: 1,
		borderColor: myColors.slate200,
		//backgroundColor: '#FAFAFA',
		marginBottom: 16,
		marginHorizontal: 12,
		borderTopEndRadius: 6,
		borderTopStartRadius: 6,
	},
	headerView1: {
		height: 62,
		padding: 16,
		backgroundColor: '#FAFAFA',
		// borderTopRightRadius: 6,
		// borderTopLeftRadius: 6,
	},
});
export default sizePriceStyles;
