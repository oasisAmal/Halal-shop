import {StyleSheet} from 'react-native';
import {theme_color} from '../../mutils';

const styles = StyleSheet.create({
	btnView: {
		flex: 1,
		flexDirection: 'row-reverse',
		bottom: 40,
		right: 24,
		position: 'absolute',
	},
	nextView: {
		backgroundColor: theme_color,
		borderColor: 'none',
	},
	backView: {
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#94A3B8',
	},
	backTxt: {
		color: '#64748B',
	},
	btnTxt: {
		fontFamily: 'Inter-Regular',
		fontSize: 14,
		//: 500,
		textAlign: 'center',
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
	clrWhite: {
		color: 'white',
	},
});
export default styles;
