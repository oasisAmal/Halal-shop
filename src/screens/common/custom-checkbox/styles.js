import {Dimensions, StyleSheet} from 'react-native';
import {myfonts} from '../../../assets/Fonts';
import {screenwidth} from '../../../mutils';

const styles = StyleSheet.create({
	checkedImg: {
		width: 24,
		height: 24,
		//marginLeft: 8,
	},
	selectedRowStyle: {
		backgroundColor: '#EEF2FF',
		marginTop: 8,
		padding: 8,
		width: Dimensions.get('screen').width - 88,
		borderRadius: 8,
	},
	selectedRowTextStyle: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		marginHorizontal: 'auto',
		color: '#4338CA',
		fontSize: 12,
		//: 700,
		fontFamily: myfonts.Bold,
		lineHeight: 18,
		textAlign: 'left',
	},
	rowStyle: {
		borderRadius: 6,
		borderBottomWidth: 0,
		//width: 298,
		height: 34,
		fontSize: 12,
		fontFamily: myfonts.Regular,
		marginTop: 8,
		//marginRight: 23,
		marginLeft: 8,
	},

	categoryTxt: {
		fontSize: 12,
		textAlign: 'left',
		color: '#1E293B',
		fontFamily: myfonts.Bold,

		//: 600,
		lineHeight: 18,
		letterSpacing: 0,
	},
	subCategoryTxt: {
		fontSize: 12,
		textAlign: 'left',
		color: '#475569',
		fontFamily: myfonts.Regular,
		marginHorizontal: 32,
	},
	buttonStyle: {
		width: screenwidth - 64,
		height: 42,
		paddingVertical: 12,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: '#E2E8F0',
		marginBottom: 16,
		marginTop: 8,
		backgroundColor: 'white',
		flexDirection: 'row',
	},
	buttonTextStyle: {
		flex: 0.9,
		height: 18,
		borderRadius: 6,
		color: '#64748B',
		fontSize: 12,
		fontFamily: myfonts.Regular,
		textAlign: 'left',
		marginLeft: 16,
	},
});
export default styles;
