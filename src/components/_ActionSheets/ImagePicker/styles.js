import {StyleSheet} from 'react-native';
// import {myfonts} from '../../../assets/Fonts';
// import {fullWidth} from '../../../mutils';
// import myColors from '../../../styles/myColors';

export const styles = StyleSheet.create({
	sheetContainer: {
		paddingTop: 20,
		paddingBottom: 40,
	},
	content: {
		alignItems: 'center',
	},
	buttonContainer: {
		width: '100%',
		flexDirection: 'column',
		paddingHorizontal: 42,
		height: 66,
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 40,
	},
	primaryButton: {
		width: '80%',
		// backgroundColor: myColors.darkGreen,
		height: 40,
		borderRadius: 30,
		marginHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
		borderWidth: 1,
	},
	primaryButtonTxt: {
		// color: myColors.clrWhite,
		fontSize: 16,
		// fontFamily: myfonts.Regular,
	},
});
