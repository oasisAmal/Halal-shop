import {StyleSheet} from 'react-native';
import {theme_color} from '../../../mutils';

const styles = StyleSheet.create({
	problemView: {
		backgroundColor: 'white',
		marginTop: 4,
		marginBottom: 16,
		// width: Fixed (361px)
		height: 96,
		padding: 16,
		borderRadius: 8,
		margin: 2,
	},
	backOrderProblem: {
		fontFamily: 'Inter-Medium',
		fontSize: 16,
		//: 500,
		textAlign: 'left',
		color: '#334155',
	},
	orderProblem: {
		fontFamily: 'Inter-Regular',
		fontSize: 12,
		//: 400,
		textAlign: 'left',
		color: '#64748B',
		marginTop: 4,
		marginBottom: 16,
	},
	container: {
		flex: 1,
		marginHorizontal: 16,
	},
	btn: {},
	longBtnTxt: {
		fontFamily: 'Inter-Regular',
		fontSize: 14,
		//: 500,
		color: 'white',
		textAlign: 'center',
		letterSpacing: 0,
		marginRight: 'auto',
		marginLeft: 'auto',
	},

	orderTxt: {
		marginTop: 16,
		marginBottom: 4,
		fontFamily: 'Inter-Bold',
		fontSize: 20,
		//: 600,
		// lineHight: 30,
		letterSpacing: 0,
		textAlign: 'left',
		color: '#1E293B',
	},

	longBtn: {
		backgroundColor: theme_color,
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 6,
		height: 45,
		marginBottom: 16,
	},
});

export default styles;
