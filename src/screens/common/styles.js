import {StyleSheet} from 'react-native';
import {screenHeight, screenwidth, theme_color} from '../../mutils';
import {myfonts} from '../../assets/Fonts';
import myColors from '../../styles/myColors';
import commonstyles from '../../styles/defultStyles';
import inputStyles from '../../styles/inputStyles';

const styles = StyleSheet.create({
	emptyTag: {
		flex: 0.5,
		flexDirection: 'row',
		margin: 6,
		paddingHorizontal: 8,
		paddingVertical: 8,
	},
	deliveryTxt: {
		fontFamily: myfonts.Medium,
		fontSize: 14,
		//: 500,
		lineHeight: 24,
		textAlign: 'left',
		color: myColors.slate600,
		marginLeft: 8,
	},
	saveBtn: {
		//width: Fill (361px)
		height: 48,
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 6,
		backgroundColor: theme_color,
		marginVertical: 8,
	},
	imgTxt: {
		fontFamily: myfonts.Medium,
		fontSize: 14,
		//: 500,
		lineHeight: 21,
		//textAlign: 'center',
		color: myColors.slate600,
		marginBottom: 8,
		marginLeft: 32,
		marginTop: 4,
	},
	chhoseTxt: {
		fontFamily: myfonts.Bold,
		fontSize: 12,
		//: 500,
		lineHeight: 18,
		textAlign: 'left',
		color: myColors.slate700,
	},
	fileUpload: {
		height: 30,
		width: 100,
		paddingVertical: 6,
		paddingHorizontal: 16,
		borderRadius: 4,
		marginRight: 10,
		backgroundColor: '#EEF2FF',
	},
	inputSm: {
		// width: Fill (156.5px)
		height: 42,
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: myColors.slate200,
		marginVertical: 16,
	},
	smallTxt: {
		fontFamily: myfonts.Medium,
		fontSize: 12,
		//: 500,
		color: myColors.slate600,
		lineHeight: 18,
	},
	sectionImg: {
		width: 18,
		height: 18,
		marginHorizontal: 8,
	},
	sectionTxt: {
		fontFamily: myfonts.Regular,
		fontSize: 16,
		//: 500,
		lineHeight: 24,
		textAlign: 'left',
		color: '#475569',
		marginTop: -4,
	},
	rowView: {
		height: 53,
		padding: 16,
		borderRadius: 6,
		marginBottom: 24,
		backgroundColor: myColors.clrWhite,
		flexDirection: 'row',
	},
	textarea: inputStyles.textarea,
	input: inputStyles.input,
	productName: inputStyles.name,
	editTxt: {
		textAlign: 'left',
		fontFamily: myfonts.Bold,
		fontSize: 22,
		//: 600,
		lineHeight: 33,
		marginBottom: 24,
		color: myColors.slate800,
		marginTop: 25,
		marginBottom: 12,
	},
	formView: commonstyles.formView,

	subheader: commonstyles.subheader,
	container: {
		flex: 1,
		marginHorizontal: 16,
	},
});
export default styles;
