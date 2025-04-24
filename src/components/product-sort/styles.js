import {StyleSheet} from 'react-native';

import {screenHeight, screenwidth, theme_color} from '../../../config';

export default styles = StyleSheet.create({
	driverTxt: {
		fontFamily: 'Inter-Bold',
		fontSize: 20,
		//: 600,
		color: '#1E293B',
	},
	closeImg: {
		width: 24,
		height: 24,
		right: -36,
		top: 6,
	},
	btnView: {
		flex: 1,
		flexDirection: 'row-reverse',
		bottom: 92,
		right: 24,
		position: 'absolute',
	},
	nextView: {
		backgroundColor: theme_color,
		borderColor: 'none',
	},
	clrWhite: {color: 'white'},
	backView: {
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#94A3B8',
	},
	backTxt: {
		color: '#64748B',
	},
	title: {flexDirection: 'row', marginBottom: 24},
	container: {
		backgroundColor: 'red',
	},
	btn: {
		width: 120,
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 6,
		marginLeft: 16,
	},
	btnTxt: {
		fontFamily: 'Inter-Regular',
		fontSize: 14,
		//: 500,
		textAlign: 'center',
	},
	modalView: {
		backgroundColor: 'white',
		//borderRadius: 8,
		//padding: 35,
		paddingHorizontal: 24,
		paddingTop: 24,
		height: screenHeight,
		width: screenwidth - 17,
	},
});
