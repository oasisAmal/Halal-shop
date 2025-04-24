import {StyleSheet, PixelRatio} from 'react-native';
import {screenHeight, theme_color} from '../../mutils';
import {myfonts} from '../../assets/Fonts';
import myColors from '../../styles/myColors';

const loginstyles = StyleSheet.create({
	time: {
		fontFamily: myfonts.Regular,
		fontSize: 14,
		//: 500,
		lineHeight: 17,
		letterSpacing: 0,
		textAlign: 'left',
		color: myColors.slate600,
	},
	resend: {
		color: '#6366F1',
		marginLeft: 8,
		//: 600,
	},
	didnotreceive: {
		fontFamily: myfonts.Regular,
		fontSize: 14,
		//: 600,
		lineHeight: 17,
		letterSpacing: 0,
		textAlign: 'center',
		color: myColors.slate400,
	},
	otpVerifiedRow: {
		flexDirection: 'row',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	otpVerifiedTxt: {
		color: myColors.slate800,
		fontFamily: myfonts.Regular,
		fontSize: 20,
		lineHeight: 20,
		letterSpacing: 0,
		alignSelf: 'center',
		marginLeft: 8,
	},
	mt110: {
		marginTop: 110,
	},
	mr12: {
		marginRight: 12,
	},
	smallBtn: {
		backgroundColor: myColors.slate50,
		borderColor: myColors.slate200,
		width: 46,
		height: 50,
		borderRadius: 6,
		borderWidth: 1,
		marginBottom: 20,
	},
	codeView: {flex: 0.25, marginRight: 8, flexDirection: 'row'},
	countryView: {flex: 0.5, marginRight: 8, flexDirection: 'row'},
	dropdownImg: {
		width: 16,
		height: 16,
		marginVertical: 18,
	},
	flagImg: {
		width: 18,
		height: 12,
		marginVertical: 18,
	},
	countryCode: {
		color: myColors.slate800,
		fontFamily: myfonts.Bold,
		fontSize: 16,
		//: 400,
		lineHeight: 19,
		letterSpacing: 0,
		marginTop: 16,
		marginLeft: 8,
	},
	slate50bg: {
		backgroundColor: myColors.slate50,
	},
	mobileTxt: {
		marginTop: 80,
		marginBottom: 8,
		color: myColors.slate_black_900,
		textAlign: 'center',
		fontFamily: myfonts.Bold,
		fontSize: 28,
		//: 600,
		lineHeight: 34,
		letterSpacing: 0,
		//lineHeight: 17,
	},
	iconImg: {
		width: 18,
		height: 18,
		marginTop: 14,
	},
	forgotTxt: {
		color: myColors.slate700,
		fontFamily: myfonts.Regular,
		fontSize: 14,
		//: 500,
		lineHeight: 21,
		letterSpacing: 0,
		lineHeight: 17,
	},
	mb40: {
		marginBottom: 40,
	},
	mb16: {
		marginBottom: 16,
	},
	mb8: {
		marginBottom: 8,
	},
	input: {
		borderWidth: 1,
		height: 52,
		paddingVertical: 0,
		paddingHorizontal: 12,
		borderRadius: 6,
		borderColor: '#CBD5E1',
	},
	formView: {
		marginHorizontal: 16,
	},
	subTxt: {
		color: myColors.slate600,
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 500,
		lineHeight: 15,
		letterSpacing: 0.065,
		textAlign: 'center',
		marginBottom: 80,
	},
	headTxt: {
		fontFamily: myfonts.Regular,
		fontSize: 28,
		//: 700,
		lineHeight: 34,
		letterSpacing: -0.02,
		textAlign: 'center',
		color: myColors.slate_black_900,
		marginBottom: 12,
	},
	logo: {
		width: 110.1,
		height: 110.1,
		marginRight: 'auto',
		marginLeft: 'auto',
		marginTop: 80,
		marginBottom: 16,
		resizeMode: 'contain',
	},
	container: {
		backgroundColor: myColors.clrWhite,
		height: screenHeight,
	},
});
export default loginstyles;
