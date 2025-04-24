import {StyleSheet} from 'react-native';
import {myfonts} from '../assets/Fonts';
import {theme_color} from '../mutils';
import myColors from './myColors';
import {fullWidth} from '../utils/commonFunctions';

const modalStyles = StyleSheet.create({
	centerModal: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	deleteTxt: {
		fontFamily: myfonts.Regular,
		fontSize: 16,
		//: 500,
		lineHeight: 24,
		color: myColors.slate800,
		textAlign: 'left',
		alignSelf: 'flex-start',
		//marginLeft: -64,
	},
	container: {
		marginHorizontal: 16,
		padding: 12,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalView: {
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 35,
		alignItems: 'center',
		shadowColor: theme_color,
		shadowOpacity: 1,
		elevation: 4,
		marginBottom: 40,
		width: fullWidth - 32,
	},
	header: {
		fontFamily: myfonts.Bold,
		fontSize: 18,
		//: 600,
		color: '#1E293B',
		lineHeight: 27,
		textAlign: 'left',
		marginLeft: -16,
	},
	subheader: {
		fontFamily: myfonts.Bold,
		fontSize: 18,
		//: 600,
		color: myColors.slate700,
		lineHeight: 27,
		textAlign: 'left',
	},
	mediumHeader: {
		fontFamily: myfonts.Medium,
	},
});
export default modalStyles;
