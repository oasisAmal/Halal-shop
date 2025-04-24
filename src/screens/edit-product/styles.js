import {StyleSheet} from 'react-native';
import {screenHeight, screenwidth, theme_color} from '../../mutils';
import {myfonts} from '../../assets/Fonts';

const styles = StyleSheet.create({
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
	longBtn: {
		backgroundColor: theme_color,
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 6,
		height: 48,
		//marginHorizontal: 16 ,
		marginBottom: 16,
		flexDirection: 'row',
	},
	btn: {
		marginTop: 16,
		marginBottom: 9,
		marginRight: 8,
		paddingVertical: 12,
		paddingHorizontal: 18,
		color: 'white',
		backgroundColor: theme_color,
		borderRadius: 6,
	},
	longBtnTxt: {
		fontFamily: 'Inter-Medium',
		color: 'white',
		textAlign: 'center',
		fontSize: 16,
		//: 500,
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
	next: {
		flexDirection: 'row',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	plusImg: {
		width: 16,
		height: 16,
		marginLeft: 5,
		marginVertical: 4,
	},

	filter: {
		flex: 0.1,
		paddingVertical: 16,
		paddingHorizontal: 20,
		backgroundColor: 'white',
		marginRight: 8,
		//marginLeft:16,
		marginBottom: 8,
		borderRadius: 6,
	},
	search: {
		flex: 0.1,
		backgroundColor: 'white',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderBottomRightRadius: 6,
		borderTopRightRadius: 6,
		marginBottom: 8,
	},
	orderView: {
		marginBottom: 8,
		marginTop: 8,
	},
	mb100: {marginBottom: 100},
});
export default styles;
