import {StyleSheet} from 'react-native';
import {myfonts} from '../../assets/Fonts';
import myColors from '../../styles/myColors';

const ad_styles = StyleSheet.create({
	totalView: {
		flexDirection: 'row',
		// marginHorizontal: 16,
		marginBottom: 16,
	},
	hr: {
		borderWidth: 0.5,
		borderColor: myColors.slate200,
		marginBottom: 16,
	},
	paymentMethodTxt: {
		fontFamily: myfonts.Bold,
		fontSize: 18,
		//: 600,
		lineHeight: 22,
		letterSpacing: 0,
		textAlign: 'left',
		color: myColors.slate800,
		marginBottom: 16,
	},
	total: {
		color: myColors.slate800,
		fontFamily: myfonts.Bold,
		marginRight: 4,
	},
	currency: {
		color: myColors.slate800,
		marginRight: 4,
	},
	paymentTxt: {
		fontFamily: myfonts.Regular,
		fontSize: 16,
		//: 400,
		lineHeight: 19,
		letterSpacing: 0,
		textAlign: 'left',
		color: myColors.slate500,
	},
	paymentImgs: {
		width: 71.52,
		height: 45.09,
		//padding: 4,
		borderRadius: 6.22,
		borderWidth: 0.78,
		marginRight: 8,
	},
	subTxt: {
		fontFamily: myfonts.Regular,
		fontSize: 18,
		//: 400,
		//lineHeight: 30,
		//letterSpacing: 0,
		textAlign: 'center',
		color: myColors.slate500,
		marginBottom: 200,
	},
	approvedTxt: {
		fontFamily: myfonts.Bold,
		fontSize: 24,
		//: 600,
		lineHeight: 36,
		letterSpacing: 0,
		textAlign: 'center',
		color: myColors.slate800,
		marginBottom: 16,
	},
	successGreenImg: {
		marginTop: 150,
		marginRight: 'auto',
		marginLeft: 'auto',
		marginBottom: 24,
	},
	failedImg: {
		marginTop: 150,
		marginRight: 'auto',
		marginLeft: 'auto',
		marginBottom: 24,
		width: 76,
		height: 76,
	},
	title: {
		fontFamily: myfonts.Bold,
		fontSize: 16,
		//: 600,
		lineHeight: 19,
		letterSpacing: 0,
		textAlign: 'left',
		color: '#000000',
	},
});
export default ad_styles;
