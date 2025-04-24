import {StyleSheet} from 'react-native';
import {myfonts} from '../assets/Fonts';
import myColors from './myColors';

const datePickerStyles = StyleSheet.create({
	cardItem: {
		flexDirection: 'row-reverse',
		flex: 1,
	},
	cardView: {
		borderRadius: 8,
		marginHorizontal: 12,
		marginTop: 8,
	},
	textCancel: {
		color: myColors.theme_color,
		//: 500,
		fontSize: 14,
		fontFamily: myfonts.Regular,
		padding: 10,
	},
	textOk: {
		color: myColors.theme_color,
		//: 500,
		fontSize: 14,
		padding: 10,
	},
	optionStyles: {
		mainColor: myColors.theme_color,
		backgroundColor: 'white',
		textHeaderColor: '#64748B',
		textDefaultColor: 'black',
		selectedTextColor: 'white',
		textSecondaryColor: '#64748B',
	},
	dateStyle: {
		borderRadius: 10,
		//width: 300,
		selectedTextColor: 'white',
		selectedBackgroundColor: 'orange',
	},
});

export default datePickerStyles;
