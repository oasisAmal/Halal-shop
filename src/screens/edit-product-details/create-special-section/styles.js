import {Dimensions, StyleSheet} from 'react-native';
import {myfonts} from '../../../assets/Fonts';
import {screenwidth} from '../../../mutils';

const createSectionStyles = StyleSheet.create({
	btn: {
		height: 48,
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 6,
		marginHorizontal: 8,
		marginBottom: 12,
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

	container: {
		flex: 1,
		marginHorizontal: 16,
	},
});

export default createSectionStyles;
