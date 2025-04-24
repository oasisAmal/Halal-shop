import {StyleSheet} from 'react-native';
import {screenHeight, screenwidth, theme_color} from '../../../mutils';
import {myfonts} from '../../../assets/Fonts';

const styles = StyleSheet.create({
	tagImg: {
		width: 20,
		height: 20,
		marginRight: 6,
	},
	closeImg: {
		width: 24,
		height: 24,
		left: 6.75,
	},
	btnTxt: {
		fontFamily: 'Inter-Regular',
		fontSize: 14,
		//: 500,
		textAlign: 'center',
	},
	tagTxt: {
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 400,
		textAlign: 'left',
		color: '#64748B',
	},
	tagView: {
		flexDirection: 'row',
		paddingHorizontal: 8,
		paddingVertical: 8,

		borderRadius: 6,
		borderWidth: 1,
		margin: 6,
		borderColor: '#E2E8F0',
	},
	title: {
		fontSize: 16,
		fontFamily: 'Inter-Medium',
		//: 500,
		textAlign: 'left',
		color: '#475569',
	},
	subTxt: {
		fontFamily: myfonts.Bold,
		fontSize: 20,
		//: 600,
		color: '#1E293B',
		lineHeight: 27,
		textAlign: 'left',
	},
	hr: {
		borderBottomColor: '#F5F5F5',
		borderBottomWidth: 1,
		marginTop: -8,
		marginBottom: 16,
	},
	btn: {
		width: 140,
		//(Dimensions.get('window').width - 80)/2 ,
		paddingVertical: 12,
		height: 45,
		paddingHorizontal: 24,
		borderRadius: 6,
		marginVertical: 8,
	},
	modalView: {
		backgroundColor: 'white',
		//borderRadius: 8,
		//padding: 35,
		paddingHorizontal: 24,
		paddingTop: 16,
		height: screenHeight,
		width: screenwidth - 17,
	},
});
export default styles;
