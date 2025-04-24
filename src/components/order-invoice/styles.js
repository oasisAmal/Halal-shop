import {StyleSheet} from 'react-native';

import {screenHeight, screenwidth, theme_color} from '../../../config';

export default styles = StyleSheet.create({
	view3: {
		flexDirection: 'column',
		padding: 8,
		marginBottom: 16,
	},
	flex100: {
		flex: 1,
	},
	view2: {
		borderWidth: 1,
		marginVertical: 8,
	},
	view1: {
		flexDirection: 'column',
		padding: 8,
		marginBottom: 16,
	},
	logo: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
	flex30: {
		flex: 0.3,
	},
	mv20: {
		marginVertical: 20,
	},
	mt40: {
		marginTop: 40,
	},
	flex70: {
		flex: 0.7,
	},
	flexrow: {
		flexDirection: 'row',
	},
	head2: {
		flexDirection: 'column',
		padding: 8,
	},
	head1: {
		borderWidth: 1,
		marginVertical: 8,
	},
	tableView: {
		flexDirection: 'row',
		marginTop: 16,
		marginHorizontal: 0,
	},
	repeatView: {
		flexDirection: 'row',
		marginTop: 16,
		marginHorizontal: 2,
	},
	flex25: {
		flex: 0.25,
	},
	flex50: {
		flex: 0.5,
	},
	headView: {
		flexDirection: 'row',
		marginTop: 16,
		marginHorizontal: 0,
	},
	paraLeft: {
		fontSize: 16,
		color: 'black',
		//: 'bold',
		fontFamily: 'Inter-Medium',
		//textAlign:'left'
	},
	paraCenter: {
		fontSize: 14,
		color: 'black',
		//: 'bold',
		fontFamily: 'Inter-Medium',
		textAlign: 'center',
	},
	para: {
		fontSize: 16,
		color: 'black',
		//: 'bold',
		fontFamily: 'Inter-Medium',
		//textAlign:'right'
	},
	pararight: {
		fontSize: 16,
		color: 'black',
		//: 'bold',
		fontFamily: 'Inter-Medium',
		textAlign: 'right',
	},
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
		paddingHorizontal: 8,
		paddingTop: 24,
		height: screenHeight,
		width: screenwidth - 17,
		paddingBottom: 150,
		//marginBottom: 50
	},
});
