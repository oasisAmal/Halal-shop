import {StyleSheet} from 'react-native';
import {theme_color} from '../../../config';

const styles = StyleSheet.create({
	btn: {
		paddingVertical: 12,
		paddingHorizontal: 24,
		height: 48,
		backgroundColor: theme_color,
		borderRadius: 6,
	},

	noteMain: {
		marginBottom: 16,
		backgroundColor: 'white',
		padding: 16,
		borderRadius: 8,
		margin: 2,
	},
	title: {
		color: '#334155',
		fontFamily: 'Inter-Bold',
		fontSize: 16,
		//: 500,
		textAlign: 'left',
		marginBottom: 8,
	},

	btnTxt: {
		fontFamily: 'Inter-Medium',
		fontSize: 16,
		//: 500,
		textAlign: 'center',
		color: 'white',
	},
});
export default styles;
