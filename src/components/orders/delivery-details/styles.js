import {StyleSheet} from 'react-native';
import {theme_color} from '../../../mutils';
import {myfonts} from '../../../assets/Fonts';
import myColors from '../../../styles/myColors';

const styles = StyleSheet.create({
	mainView: {flex: 1, flexDirection: 'row', marginTop: 16, marginBottom: 4},
	mainTxt: {
		fontFamily: myfonts.Medium,
		fontSize: 14,
		//: 500,
		letterSpacing: 0,
		textAlign: 'left',
		//marginHorizontal: 16,
		color: '#334155',
		marginBottom: 4,
		lineHeight: 21,
	},
	subTxt: {
		fontFamily: myfonts.Regular,
		fontSize: 12,
		//: 400,
		textAlign: 'left',
		color: '#64748B',
		lineHeight: 18,
		letterSpacing: 0,
	},

	title: {
		fontFamily: myfonts.Bold,
		fontSize: 16,
		//: 600,
		lineHeight: 24,
		letterSpacing: 0,
		// text-align: left;
		color: myColors.slate800,
		marginBottom: 12,
		marginTop: 8,
	},
	cardView: {
		//height: 203,
		// paddingHorizontal: 16,
		borderRadius: 8,
		// marginHorizontal: 16,
		backgroundColor: 'white',
		marginBottom: 12,
	},
});

export default styles;
