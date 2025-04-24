import {StyleSheet} from 'react-native';
import {myfonts} from '../assets/Fonts';

const submenuStyles = StyleSheet.create({
	mainView: {
		minHeight: 90,
		padding: 8,
		borderRadius: 6,
		borderWidth: 1,
		margin: 8,
		borderColor: '#E2E8F0',
		marginLeft: 24,
		marginRight: 24,
	},
	menutxt: {
		fontFamily: myfonts.Regular,
		fontSize: 14,
		//: 400,
		textAlign: 'left',
	},
	menuView: {
		marginHorizontal: 24,
		// width: Fill (313px)
		height: 37,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 6,
		marginHorizontal: 2,
		//backgroundColor:'#EEF2FF'
	},
});
export default submenuStyles;
