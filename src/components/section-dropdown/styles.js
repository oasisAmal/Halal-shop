import {Dimensions, StyleSheet} from 'react-native';
import {myfonts} from '../../assets/Fonts';
import {screenwidth} from '../../mutils';

const styles = StyleSheet.create({
	subcontainer: {
		// width: Fill (297px)px;
		// height: Hug (34px)px;
		paddingVertical: 8,
		paddingHorizontal: 32,
		marginHorizontal: 10,
		borderRadius: 8,
	},
	productcontainer: {
		// width: Fill (297px)px;
		// height: Hug (34px)px;
		paddingVertical: 8,
		paddingHorizontal: 48,
		marginHorizontal: 10,
		borderRadius: 8,
	},
	selectedRowStyle: {
		backgroundColor: '#EEF2FF',
		marginTop: 8,
		padding: 8,
		width: Dimensions.get('screen').width - 88,
		borderRadius: 8,
		flexDirection: 'row',
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
		flexDirection: 'row',
	},
	rowTextStyle: {
		fontSize: 12,
		textAlign: 'left',
		color: '#475569',
		fontFamily: myfonts.Regular,
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
		//textAlign: 'left',
		color: '#334155',
		fontFamily: myfonts.Regular,
		//marginHorizontal: 32,

		//: 500,
		lineHeight: 18,
	},
	productTxt: {
		//: 400,
		lineHeight: 18,
		fontSize: 12,
		textAlign: 'left',
		color: '#475569',
		fontFamily: myfonts.Regular,
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
	dropdownStyle: {
		zIndex: 100,
		//paddingVertical: 12,
		borderRadius: 6,
		border: 1,
		marginBottom: 16,
		marginTop: -8,
		backgroundColor: 'white',
		fontSize: 12,
		height: 254,

		padding: 8,
		borderRadius: 8,
		borderWidth: 1,
		//margin: 8,
		borderColor: '#E2E8F0',
		//elevation: 4,
	},
});
export default styles;
