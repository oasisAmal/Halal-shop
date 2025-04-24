import {StyleSheet} from 'react-native';
import {myfonts} from '../assets/Fonts';
import {screenwidth} from '../mutils';

const dropdownStyles = StyleSheet.create({
	dropdownStyle: {
		// width:329,
		paddingVertical: 12,
		borderRadius: 6,
		border: 1,
		marginBottom: 16,
		marginTop: 8,
		backgroundColor: 'white',
		fontSize: 12,
		height: 186,
	},
	buttonTextStyle: {
		height: 18,
		borderRadius: 6,
		color: '#64748B',
		fontSize: 12,
		fontFamily: 'Inter-Regular',
		textAlign: 'left',
	},
	buttonStyle: {
		width: screenwidth - 64,
		height: 42,
		// paddingVertical: 12,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: '#E2E8F0',
		marginBottom: 16,
		marginTop: 8,
		backgroundColor: 'white',
	},
	rowTextStyle: {
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 400,
		lineHeight: 18,
		color: myColors.slate700,
		textAlign: 'left',
		marginLeft: -8,
		marginTop: 4,
	},
	rowTextStyle1: {
		fontSize: 12,
		textAlign: 'left',
		color: '#475569',
		fontFamily: 'Inter-Regular',
	},

	selectedRowStyle: {
		backgroundColor: '#EEF2FF',
		marginTop: 8,
		marginRight: 8,
		marginLeft: 8,
		width: screenwidth - 80,
	},
	rowStyle: {
		borderRadius: 6,
		borderBottomWidth: 0,
		width: 298,
		height: 34,
		fontSize: 12,
		fontFamily: 'Inter-Regular',
		marginTop: 8,
		marginRight: 23,
		marginLeft: 8,
	},
	selectedRowTextStyle: {
		paddingVertical: 8,
		paddingHorizontal: 8,
		marginHorizontal: 'auto',
		color: '#4338CA',
		fontSize: 12,
		//: 400,
	},
});
export default dropdownStyles;
