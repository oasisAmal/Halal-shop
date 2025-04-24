import {StyleSheet} from 'react-native';
import {screenHeight, screenwidth, theme_color} from '../../mutils';
import {myfonts} from '../../assets/Fonts';
import myColors from '../../styles/myColors';

const chatstyles = StyleSheet.create({
	hrDate: {
		flex: 0.4,
		borderWidth: 1,
		height: 0,
		borderColor: myColors.slate200,
		marginTop: 8,
	},
	opBtns: {
		flexDirection: 'row-reverse',
		alignSelf: 'flex-end',
		flex: 0.1,
	},
	sendViewBtn: {right: 0, left: 0, position: 'absolute', bottom: 140},
	hr: {
		marginTop: -8,
		borderWidth: 1,
		borderColor: myColors.slate200,
		marginBottom: 34,
	},
	attachImg: {
		width: 24,
		height: 24,
		marginTop: 12,
	},
	sendImg: {
		width: 32,
		height: 32,
		marginVertical: 8,
		marginLeft: 16,
	},
	youTxt: {
		//styleName: Metadata/03;
		fontFamily: myfonts.Regular,
		fontSize: 10,
		//: 600,
		lineHeight: 16,
		letterSpacing: 0,
		textAlign: 'left',
		color: theme_color,
	},
	replyView: {
		height: 60,
		padding: 8,
		marginHorizontal: 4,
		backgroundColor: myColors.slate100,
		borderLeftWidth: 4,
		borderLeftColor: theme_color,
		marginBottom: 4,
	},
	sendView: {
		height: 48,
		//left: 16,
		paddingHorizontal: 8,
		borderRadius: 6,
		borderWidth: 0.8,
		backgroundColor: myColors.clrWhite,
		borderColor: theme_color,

		// bottom: 40,
		// right: 24,
		// position: 'absolute',
	},
	timeRight: {
		textAlign: 'right',

		fontFamily: myfonts.Regular,
		fontSize: 10,
		//: 400,
		lineHeight: 16,
		textAlign: 'right',
		color: myColors.clrWhite,
	},
	container: {
		marginHorizontal: 16,
		height: screenHeight,
	},
	chatTxtRight: {
		fontFamily: myfonts.Regular,
		fontSize: 14,
		//: 400,
		lineHeight: 24,
		textAlign: 'right',
		color: myColors.clrWhite,
		//marginBottom: 8,
	},
	chatTxt: {
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 400,
		lineHeight: 24,
		textAlign: 'left',
		color: myColors.slate600,
		//marginBottom: 8,
	},
	leftcardView: {
		width: screenwidth * 0.6,
		//height: 64,
		padding: 10,
		borderTopRightRadius: 16,
		borderTopLeftRadius: 16,
		borderBottomStartRadius: 0,
		borderBottomEndRadius: 16,
		marginHorizontal: 4,
		backgroundColor: myColors.clrWhite,
		marginBottom: 16,
	},
	rightcardView: {
		width: screenwidth * 0.6,
		//height: 64,
		padding: 10,
		borderTopRightRadius: 16,
		borderTopLeftRadius: 16,
		borderBottomStartRadius: 16,
		borderBottomEndRadius: 0,
		marginHorizontal: 4,
		backgroundColor: myColors.theme_color,
		alignSelf: 'flex-end',
		marginBottom: 16,

		//position: 'absolute',
	},
});
export default chatstyles;
