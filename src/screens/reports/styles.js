import {StyleSheet} from 'react-native';
import {screenHeight, screenwidth, theme_color} from '../../mutils';
import {myfonts} from '../../assets/Fonts';

const giftstyles = StyleSheet.create({
	exportView: {
		width: 98,
		height: 33,
		paddingVertical: 6,
		paddingHorizontal: 16,
		borderRadius: 6,
		marginHorizontal: 8,
		backgroundColor: '#FF9F43',
		elevation: 4,
		right: 0,
		position: 'absolute',
	},
	totalOrderTxt: {
		fontFamily: myfonts.Medium,
		fontSize: 14,
		//: 500,
		lineHeight: 21,
		textAlign: 'left',
		color: myColors.slate700,
		marginTop: 4,
	},
	subheader: {
		textAlign: 'left',
		fontFamily: 'Inter-Regular',
		fontSize: 14,
		//: 400,
		lineHeight: 21,
		marginBottom: 24,
		color: '#475569',
	},
	container: {
		flex: 1,
		marginHorizontal: 16,
	},
	orderTxt: {
		textAlign: 'left',
		//paddingLeft: 16,
		paddingTop: 24,
		paddingBottom: 4,
		fontSize: 20,
		//: 600,
		color: 'black',
	},

	input: {
		height: 42,
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: myColors.slate200,
	},
	productName: {
		fontFamily: myfonts.Medium,
		fontSize: 16,
		//: 500,
		lineHeight: 24,
		textAlign: 'left',
		color: myColors.slate600,
		marginBottom: 8,
	},

	formView: {
		//width: Fixed (361px)
		//height: 1062,
		paddingHorizontal: 16,
		paddingTop: 16,
		borderRadius: 8,
		margin: 2,
		backgroundColor: myColors.clrWhite,
		marginBottom: 24,
	},
});
export default giftstyles;
